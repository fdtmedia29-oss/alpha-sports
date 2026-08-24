import { Resend } from "resend";
import { KATEGORIEN, type Kategorie } from "./race";

/**
 * Mailversand für die Race-Anmeldung.
 *
 * Bewusst hinter einem Schalter: fehlt RESEND_API_KEY oder RACE_MAIL_FROM,
 * läuft die Anmeldung normal durch und es geht nur keine Mail raus.
 * So blockiert eine ausstehende Domain-Verifikation nichts.
 */

const FROM = process.env.RACE_MAIL_FROM; // z.B. "Alpha Sports Race <race@send.domai.ch>"
const REPLY_TO = process.env.RACE_MAIL_REPLY_TO || "info@alpha-sports.ch";
const AN_VERANSTALTER = process.env.RACE_MAIL_TO || "info@alpha-sports.ch";

export function mailAktiv() {
  return Boolean(process.env.RESEND_API_KEY && FROM);
}

function client() {
  return new Resend(process.env.RESEND_API_KEY);
}

export type MailDaten = {
  id: number;
  kategorie: Kategorie;
  status: "angemeldet" | "warteliste";
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  adresse: string;
  jahrgang: number;
  geschlecht: string;
  mitglied: boolean;
  partner?: {
    vorname: string;
    nachname: string;
    email: string;
    telefon: string;
    adresse: string;
    jahrgang: number;
    geschlecht: string;
    mitglied: boolean;
  } | null;
  ok_werbung: boolean;
};

const esc = (s: unknown) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function huelle(inhalt: string) {
  return `<!doctype html><html lang="de"><body style="margin:0;padding:0;background:#f7f7f7">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f7f7;padding:28px 12px">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fff;border-radius:14px;overflow:hidden;font-family:Helvetica,Arial,sans-serif;color:#111">
<tr><td style="background:#111;padding:22px 28px">
<div style="color:#fff;font-size:13px;letter-spacing:1.6px;text-transform:uppercase;font-weight:700">Alpha Sports St. Gallen</div>
<div style="color:#E8772A;font-size:20px;font-weight:800;margin-top:5px">HYROX Race Simulation 2026</div>
</td></tr>
<tr><td style="padding:28px">${inhalt}</td></tr>
<tr><td style="background:#f7f7f7;padding:18px 28px;font-size:12px;color:#777;line-height:1.6">
Alpha Sports Personal Training · Unterer Graben 21, 9000 St. Gallen<br>
Fragen? Antworte einfach auf diese Mail.
</td></tr>
</table></td></tr></table></body></html>`;
}

function zeile(k: string, v: string) {
  return `<tr><td style="padding:6px 0;font-size:14px;color:#777;width:150px">${esc(k)}</td><td style="padding:6px 0;font-size:14px;color:#111;font-weight:600">${esc(v)}</td></tr>`;
}

/** Bestätigung an den Teilnehmer. */
async function anTeilnehmer(d: MailDaten) {
  const kat = KATEGORIEN[d.kategorie];
  const warte = d.status === "warteliste";

  const kopf = warte
    ? `<p style="margin:0 0 16px;font-size:16px;line-height:1.6">Hallo ${esc(d.vorname)}, deine Anmeldung ist bei uns angekommen.</p>
       <p style="margin:0 0 20px;font-size:16px;line-height:1.6"><b>In deiner Kategorie sind aktuell alle Startplätze vergeben</b>, darum stehst du auf der Warteliste. Sobald jemand absagt, rücken wir in der Reihenfolge nach und melden uns bei dir.</p>`
    : `<p style="margin:0 0 16px;font-size:16px;line-height:1.6">Hallo ${esc(d.vorname)}, dein Startplatz ist reserviert. Wir freuen uns auf dich.</p>`;

  const partner = d.partner
    ? zeile("Partner", `${d.partner.vorname} ${d.partner.nachname}`)
    : "";

  return client().emails.send({
    from: FROM!,
    to: d.email,
    replyTo: REPLY_TO,
    subject: warte
      ? "Du stehst auf der Warteliste — HYROX Race Simulation, 3. Oktober"
      : "Startplatz reserviert — HYROX Race Simulation, 3. Oktober",
    html: huelle(`${kopf}
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid #eee;border-bottom:1px solid #eee;margin:4px 0 20px">
${zeile("Kategorie", kat.label)}
${partner}
${zeile("Datum", "Samstag, 3. Oktober 2026")}
${zeile("Check-in", "ab 08:00 Uhr")}
${zeile("Ort", "Unterer Graben 21, 9000 St. Gallen")}
${zeile("Startgeld", "Kostenlos")}
</table>
<p style="margin:0 0 8px;font-size:15px;line-height:1.7"><b>Was du mitbringst:</b> Trainingskleidung und Trainingsschuhe. Bitte keine Strassenschuhe.</p>
<p style="margin:0;font-size:15px;line-height:1.7">Deine Startzeit und den genauen Ablauf schicken wir dir vor dem Event. Wenn du doch nicht kannst, gib uns bitte kurz Bescheid, damit jemand von der Warteliste nachrücken kann.</p>`),
    text: `Hallo ${d.vorname},

${
  warte
    ? "deine Anmeldung ist angekommen. In deiner Kategorie sind aktuell alle Startplätze vergeben, darum stehst du auf der Warteliste. Sobald jemand absagt, melden wir uns."
    : "dein Startplatz ist reserviert. Wir freuen uns auf dich."
}

Kategorie: ${kat.label}${d.partner ? `\nPartner: ${d.partner.vorname} ${d.partner.nachname}` : ""}
Datum: Samstag, 3. Oktober 2026
Check-in: ab 08:00 Uhr
Ort: Unterer Graben 21, 9000 St. Gallen
Startgeld: Kostenlos

Mitbringen: Trainingskleidung und Trainingsschuhe, keine Strassenschuhe.
Startzeit und Ablauf schicken wir vor dem Event.

Alpha Sports St. Gallen`,
  });
}

/** Meldung an Luigi. */
async function anVeranstalter(d: MailDaten) {
  const kat = KATEGORIEN[d.kategorie];
  const warte = d.status === "warteliste";

  const partnerBlock = d.partner
    ? `<div style="margin-top:18px;font-size:13px;text-transform:uppercase;letter-spacing:1.2px;color:#777;font-weight:700">Partner</div>
<table role="presentation" cellpadding="0" cellspacing="0" width="100%">
${zeile("Name", `${d.partner.vorname} ${d.partner.nachname}`)}
${zeile("E-Mail", d.partner.email)}
${zeile("Telefon", d.partner.telefon)}
${zeile("Adresse", d.partner.adresse)}
${zeile("Jahrgang", String(d.partner.jahrgang))}
${zeile("Geschlecht", d.partner.geschlecht)}
${zeile("Mitglied", d.partner.mitglied ? "Ja" : "Nein")}
</table>`
    : "";

  return client().emails.send({
    from: FROM!,
    to: AN_VERANSTALTER,
    replyTo: d.email,
    subject: `${warte ? "Warteliste" : "Neue Anmeldung"}: ${d.vorname} ${d.nachname} — ${kat.label}`,
    html: huelle(`<p style="margin:0 0 18px;font-size:16px;line-height:1.6">
${warte ? "Eine Anmeldung ist auf der <b>Warteliste</b> gelandet, die Kategorie ist voll." : "Es hat sich jemand angemeldet."}
</p>
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid #eee">
${zeile("Kategorie", kat.label)}
${zeile("Name", `${d.vorname} ${d.nachname}`)}
${zeile("E-Mail", d.email)}
${zeile("Telefon", d.telefon)}
${zeile("Adresse", d.adresse)}
${zeile("Jahrgang", String(d.jahrgang))}
${zeile("Geschlecht", d.geschlecht)}
${zeile("Mitglied", d.mitglied ? "Ja" : "Nein")}
${zeile("Werbung erlaubt", d.ok_werbung ? "Ja" : "Nein")}
</table>${partnerBlock}
<p style="margin:22px 0 0;font-size:14px;color:#777">Anmeldung Nr. ${d.id}</p>`),
    text: `${warte ? "WARTELISTE" : "Neue Anmeldung"} — ${kat.label}

${d.vorname} ${d.nachname}
${d.email} · ${d.telefon}
${d.adresse}
Jahrgang ${d.jahrgang} · ${d.geschlecht} · Mitglied: ${d.mitglied ? "Ja" : "Nein"}
Werbung erlaubt: ${d.ok_werbung ? "Ja" : "Nein"}
${
  d.partner
    ? `\nPartner:\n${d.partner.vorname} ${d.partner.nachname}\n${d.partner.email} · ${d.partner.telefon}\n${d.partner.adresse}\nJahrgang ${d.partner.jahrgang} · ${d.partner.geschlecht} · Mitglied: ${d.partner.mitglied ? "Ja" : "Nein"}`
    : ""
}

Anmeldung Nr. ${d.id}`,
  });
}

/**
 * Verschickt beide Mails. Wirft nie — eine Anmeldung darf nicht daran scheitern,
 * dass der Mailversand hakt. Fehler landen im Vercel-Log.
 */
export async function mailsSenden(d: MailDaten) {
  if (!mailAktiv()) return { gesendet: false, grund: "nicht konfiguriert" };

  const ergebnisse = await Promise.allSettled([anTeilnehmer(d), anVeranstalter(d)]);
  ergebnisse.forEach((r, i) => {
    const wer = i === 0 ? "Teilnehmer" : "Veranstalter";
    if (r.status === "rejected") {
      console.error(`[race] Mail an ${wer} fehlgeschlagen:`, r.reason);
    } else if (r.value?.error) {
      console.error(`[race] Mail an ${wer} abgelehnt:`, r.value.error);
    }
  });

  return { gesendet: true };
}
