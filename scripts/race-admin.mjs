#!/usr/bin/env node
/**
 * Kleine Verwaltung für die Race-Anmeldungen.
 *
 * Braucht es vor allem für Absagen: sagt jemand ab, muss der Startplatz wieder
 * frei werden, sonst rückt niemand von der Warteliste nach. Die Listen-Seite ist
 * bewusst nur zum Anschauen, Löschen läuft über hier.
 *
 *   node scripts/race-admin.mjs liste
 *   node scripts/race-admin.mjs absage <id>       Anmeldung entfernen
 *   node scripts/race-admin.mjs nachruecken <id>  Warteliste -> Startplatz
 *   node scripts/race-admin.mjs testdaten-weg     alle @domai.ch-Testeinträge
 */
import { neon } from "@neondatabase/serverless";
import { readFileSync } from "node:fs";

// .env.local laden, ohne den Wert je auszugeben
for (const datei of [".env.local", ".env"]) {
  try {
    for (const zeile of readFileSync(datei, "utf8").split("\n")) {
      const t = zeile.trim();
      if (!t || t.startsWith("#")) continue;
      const i = t.indexOf("=");
      if (i < 1) continue;
      const k = t.slice(0, i).trim();
      if (process.env[k]) continue;
      process.env[k] = t.slice(i + 1).trim().replace(/^["']|["']$/g, "");
    }
  } catch {
    // Datei fehlt: dann kommt die Verbindung hoffentlich aus der Umgebung
  }
}

const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
if (!url) {
  console.error("Keine Datenbank-Verbindung gefunden (DATABASE_URL).");
  process.exit(1);
}
const sql = neon(url);

const PLAETZE = { full_single: 20, full_double: 10, half_single: 10, half_double: 12 };

const [befehl, arg] = process.argv.slice(2);

async function liste() {
  const zeilen = await sql`
    SELECT id, kategorie, status, vorname, nachname, email, p_vorname, p_nachname, created_at
    FROM race_anmeldungen ORDER BY created_at ASC`;
  if (!zeilen.length) return console.log("Noch keine Anmeldungen.");

  for (const k of Object.keys(PLAETZE)) {
    const belegt = zeilen.filter((z) => z.kategorie === k && z.status === "angemeldet").length;
    const warte = zeilen.filter((z) => z.kategorie === k && z.status === "warteliste").length;
    console.log(
      `${k.padEnd(12)} ${String(belegt).padStart(2)}/${PLAETZE[k]}` +
        (warte ? `  (+${warte} Warteliste)` : ""),
    );
  }
  console.log();
  for (const z of zeilen) {
    const partner = z.p_vorname ? ` + ${z.p_vorname} ${z.p_nachname}` : "";
    const marke = z.status === "warteliste" ? "WL" : "  ";
    console.log(
      `${marke} #${String(z.id).padEnd(4)} ${z.kategorie.padEnd(12)} ${z.vorname} ${z.nachname}${partner}  <${z.email}>`,
    );
  }
}

/** Entfernt eine Anmeldung und zeigt, wer dadurch nachrücken könnte. */
async function absage(id) {
  const [weg] = await sql`DELETE FROM race_anmeldungen WHERE id = ${Number(id)} RETURNING *`;
  if (!weg) return console.error(`Keine Anmeldung mit Nummer ${id}.`);
  console.log(`Entfernt: #${weg.id} ${weg.vorname} ${weg.nachname} (${weg.kategorie})`);

  if (weg.status !== "angemeldet") return;
  const [naechster] = await sql`
    SELECT id, vorname, nachname, email FROM race_anmeldungen
    WHERE kategorie = ${weg.kategorie} AND status = 'warteliste'
    ORDER BY created_at ASC LIMIT 1`;
  if (naechster) {
    console.log(
      `\nAuf der Warteliste wartet: #${naechster.id} ${naechster.vorname} ${naechster.nachname} <${naechster.email}>` +
        `\nNachrücken lassen mit:  node scripts/race-admin.mjs nachruecken ${naechster.id}`,
    );
  } else {
    console.log("\nNiemand auf der Warteliste, der Platz ist einfach wieder frei.");
  }
}

/** Holt jemanden von der Warteliste auf einen Startplatz, aber nur wenn wirklich Platz ist. */
async function nachruecken(id) {
  const [eintrag] = await sql`SELECT * FROM race_anmeldungen WHERE id = ${Number(id)}`;
  if (!eintrag) return console.error(`Keine Anmeldung mit Nummer ${id}.`);
  if (eintrag.status === "angemeldet") return console.log("Steht bereits auf einem Startplatz.");

  const [{ anzahl }] = await sql`
    SELECT count(*)::int AS anzahl FROM race_anmeldungen
    WHERE kategorie = ${eintrag.kategorie} AND status = 'angemeldet'`;
  if (anzahl >= PLAETZE[eintrag.kategorie]) {
    return console.error(
      `${eintrag.kategorie} ist mit ${anzahl}/${PLAETZE[eintrag.kategorie]} voll. Erst einen Platz freigeben.`,
    );
  }
  await sql`UPDATE race_anmeldungen SET status = 'angemeldet' WHERE id = ${Number(id)}`;
  console.log(
    `#${eintrag.id} ${eintrag.vorname} ${eintrag.nachname} steht jetzt auf einem Startplatz.` +
      `\nBitte kurz Bescheid geben: ${eintrag.email}`,
  );
}

async function testdatenWeg() {
  const weg = await sql`
    DELETE FROM race_anmeldungen
    WHERE email LIKE 'test+%@domai.ch' OR email LIKE 'partner+%@domai.ch'
       OR p_email LIKE 'test+%@domai.ch'
    RETURNING id`;
  console.log(`${weg.length} Testeinträge entfernt.`);
}

const befehle = { liste, absage, nachruecken, "testdaten-weg": testdatenWeg };
const fn = befehle[befehl];
if (!fn) {
  console.log("Befehle: liste | absage <id> | nachruecken <id> | testdaten-weg");
  process.exit(1);
}
await fn(arg);
