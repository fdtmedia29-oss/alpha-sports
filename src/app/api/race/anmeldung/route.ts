import { NextResponse } from "next/server";
import {
  KATEGORIEN,
  istKategorie,
  ensureSchema,
  sql,
  anmeldungGeschlossen,
  type Kategorie,
} from "@/lib/race";
import { mailsSenden } from "@/lib/race-mail";

export const dynamic = "force-dynamic";

/** Jahrgang-Grenzen. 2012 = am Eventtag 14 Jahre. Mit Luigi gegenprüfen. */
const JAHRGANG_MIN = 1930;
const JAHRGANG_MAX = 2012;

const GESCHLECHT = ["Männlich", "Weiblich"];

type Person = {
  vorname: string;
  nachname: string;
  adresse: string;
  email: string;
  telefon: string;
  jahrgang: number;
  geschlecht: string;
  mitglied: boolean;
};

class Fehler extends Error {}

function text(wert: unknown, feld: string, max = 120) {
  const s = typeof wert === "string" ? wert.trim() : "";
  if (!s) throw new Fehler(`Bitte ${feld} ausfüllen.`);
  if (s.length > max) throw new Fehler(`${feld} ist zu lang.`);
  return s;
}

function email(wert: unknown, feld: string) {
  const s = text(wert, feld, 160).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(s)) {
    throw new Fehler(`${feld} sieht nicht nach einer gültigen Adresse aus.`);
  }
  return s;
}

function telefon(wert: unknown, feld: string) {
  const s = text(wert, feld, 40);
  if ((s.match(/\d/g) || []).length < 9) {
    throw new Fehler(`${feld} sieht nicht nach einer gültigen Nummer aus.`);
  }
  return s;
}

function jahrgang(wert: unknown, feld: string) {
  const n = Number.parseInt(String(wert ?? "").trim(), 10);
  if (!Number.isFinite(n) || n < JAHRGANG_MIN || n > JAHRGANG_MAX) {
    throw new Fehler(
      `${feld}: bitte ein Jahr zwischen ${JAHRGANG_MIN} und ${JAHRGANG_MAX} eintragen.`,
    );
  }
  return n;
}

function geschlecht(wert: unknown, feld: string) {
  const s = text(wert, feld, 20);
  if (!GESCHLECHT.includes(s)) throw new Fehler(`Bitte ${feld} auswählen.`);
  return s;
}

function person(d: Record<string, unknown>, p: "" | "p_", wer: string): Person {
  const f = (n: string) => d[`${p}${n}`];
  return {
    vorname: text(f("vorname"), `${wer}Vorname`, 60),
    nachname: text(f("nachname"), `${wer}Nachname`, 60),
    adresse: text(f("adresse"), `${wer}Adresse`, 160),
    email: email(f("email"), `${wer}E-Mail`),
    telefon: telefon(f("telefon"), `${wer}Handynummer`),
    jahrgang: jahrgang(f("jahrgang"), `${wer}Jahrgang`),
    geschlecht: geschlecht(f("geschlecht"), `${wer}Geschlecht`),
    mitglied: f("mitglied") === true || f("mitglied") === "ja",
  };
}

/** Grober Missbrauchsschutz. Serverless-Instanzen sind kurzlebig, das ist Absicht: es reicht gegen stumpfes Hämmern. */
const letzte = new Map<string, number[]>();
function zuSchnell(ip: string) {
  const jetzt = Date.now();
  const fenster = letzte.get(ip)?.filter((t) => jetzt - t < 60_000) ?? [];
  fenster.push(jetzt);
  letzte.set(ip, fenster);
  if (letzte.size > 500) letzte.clear();
  return fenster.length > 5;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unbekannt";

  try {
    if (zuSchnell(ip)) {
      return NextResponse.json(
        { ok: false, fehler: "Zu viele Versuche. Bitte kurz warten." },
        { status: 429 },
      );
    }

    if (anmeldungGeschlossen()) {
      return NextResponse.json(
        {
          ok: false,
          fehler:
            "Die Anmeldefrist ist am 30. September abgelaufen. Melde dich bei info@alpha-sports.ch, wir schauen, was noch geht.",
        },
        { status: 400 },
      );
    }

    const d = (await req.json()) as Record<string, unknown>;

    // Honeypot: echte Menschen füllen dieses Feld nie aus.
    if (typeof d.website === "string" && d.website.trim() !== "") {
      return NextResponse.json({ ok: true, status: "angemeldet" });
    }

    if (!istKategorie(d.kategorie)) throw new Fehler("Bitte eine Kategorie wählen.");
    const kategorie = d.kategorie as Kategorie;
    const konfig = KATEGORIEN[kategorie];

    if (d.ok_organisation !== true) {
      throw new Fehler(
        "Ohne die erforderliche Einwilligung können wir die Anmeldung nicht bearbeiten.",
      );
    }

    const t1 = person(d, "", "");
    const t2 = konfig.double ? person(d, "p_", "Partner: ") : null;

    if (t2 && t2.email === t1.email) {
      throw new Fehler("Bitte für den Partner eine eigene E-Mail-Adresse angeben.");
    }

    const ok_werbung = d.ok_werbung === true;

    await ensureSchema();
    const q = sql();

    // Schon angemeldet? Prüft beide Teilnehmer gegen beide Spalten.
    const mails = [t1.email, ...(t2 ? [t2.email] : [])];
    const doppelt = (await q`
      SELECT vorname, email FROM race_anmeldungen
      WHERE lower(email) = ANY(${mails}) OR lower(p_email) = ANY(${mails})
      LIMIT 1
    `) as { vorname: string; email: string }[];
    if (doppelt.length > 0) {
      throw new Fehler(
        "Mit dieser E-Mail-Adresse liegt bereits eine Anmeldung vor. Schreib uns an info@alpha-sports.ch, wenn du etwas ändern möchtest.",
      );
    }

    // Status wird in derselben Anweisung bestimmt, damit zwei gleichzeitige
    // Anmeldungen nicht beide den letzten freien Platz belegen.
    const rows = (await q`
      INSERT INTO race_anmeldungen (
        kategorie, status,
        vorname, nachname, adresse, email, telefon, jahrgang, geschlecht, mitglied,
        p_vorname, p_nachname, p_adresse, p_email, p_telefon, p_jahrgang, p_geschlecht, p_mitglied,
        ok_organisation, ok_werbung, ip
      )
      SELECT
        ${kategorie},
        CASE WHEN (
          SELECT count(*) FROM race_anmeldungen
          WHERE kategorie = ${kategorie} AND status = 'angemeldet'
        ) < ${konfig.plaetze} THEN 'angemeldet' ELSE 'warteliste' END,
        ${t1.vorname}, ${t1.nachname}, ${t1.adresse}, ${t1.email}, ${t1.telefon},
        ${t1.jahrgang}, ${t1.geschlecht}, ${t1.mitglied},
        ${t2?.vorname ?? null}, ${t2?.nachname ?? null}, ${t2?.adresse ?? null},
        ${t2?.email ?? null}, ${t2?.telefon ?? null}, ${t2?.jahrgang ?? null},
        ${t2?.geschlecht ?? null}, ${t2?.mitglied ?? null},
        true, ${ok_werbung}, ${ip}
      RETURNING id, status
    `) as { id: number; status: "angemeldet" | "warteliste" }[];

    const eintrag = rows[0];

    // Mailversand darf die Anmeldung nie umwerfen.
    let mail = false;
    try {
      const versand = await mailsSenden({
        id: eintrag.id,
        kategorie,
        status: eintrag.status,
        ...t1,
        partner: t2,
        ok_werbung,
      });
      mail = versand.gesendet;
    } catch (err) {
      console.error("[race] Mailversand fehlgeschlagen:", err);
    }

    return NextResponse.json({ ok: true, status: eintrag.status, mail });
  } catch (err) {
    if (err instanceof Fehler) {
      return NextResponse.json({ ok: false, fehler: err.message }, { status: 400 });
    }
    // Unique-Index als letzte Sicherung, falls zwei Anfragen gleichzeitig durchgehen.
    if (String(err).includes("race_email_uniq")) {
      return NextResponse.json(
        { ok: false, fehler: "Mit dieser E-Mail-Adresse liegt bereits eine Anmeldung vor." },
        { status: 400 },
      );
    }
    console.error("[race] Anmeldung fehlgeschlagen:", err);
    return NextResponse.json(
      {
        ok: false,
        fehler:
          "Da ist bei uns etwas schiefgelaufen. Bitte versuch es nochmal oder schreib an info@alpha-sports.ch.",
      },
      { status: 500 },
    );
  }
}
