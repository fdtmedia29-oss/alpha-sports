import { NextResponse } from "next/server";
import { KATEGORIEN, ensureSchema, sql, type Kategorie } from "@/lib/race";

export const dynamic = "force-dynamic";

type Zeile = Record<string, unknown> & { kategorie: Kategorie };

const SPALTEN: [string, (z: Zeile) => unknown][] = [
  ["Nr", (z) => z.id],
  [
    "Eingang",
    (z) =>
      new Date(String(z.created_at)).toLocaleString("de-CH", {
        timeZone: "Europe/Zurich",
      }),
  ],
  ["Kategorie", (z) => KATEGORIEN[z.kategorie]?.label ?? z.kategorie],
  ["Status", (z) => (z.status === "warteliste" ? "Warteliste" : "Startplatz")],
  ["Vorname", (z) => z.vorname],
  ["Nachname", (z) => z.nachname],
  ["E-Mail", (z) => z.email],
  ["Telefon", (z) => z.telefon],
  ["Adresse", (z) => z.adresse],
  ["Jahrgang", (z) => z.jahrgang],
  ["Geschlecht", (z) => z.geschlecht],
  ["Mitglied", (z) => (z.mitglied ? "Ja" : "Nein")],
  ["Partner Vorname", (z) => z.p_vorname],
  ["Partner Nachname", (z) => z.p_nachname],
  ["Partner E-Mail", (z) => z.p_email],
  ["Partner Telefon", (z) => z.p_telefon],
  ["Partner Adresse", (z) => z.p_adresse],
  ["Partner Jahrgang", (z) => z.p_jahrgang],
  ["Partner Geschlecht", (z) => z.p_geschlecht],
  ["Partner Mitglied", (z) => (z.p_mitglied == null ? "" : z.p_mitglied ? "Ja" : "Nein")],
  ["Werbung erlaubt", (z) => (z.ok_werbung ? "Ja" : "Nein")],
];

/** Excel auf Deutsch erwartet Semikolon als Trennzeichen. */
function feld(wert: unknown) {
  const s = wert == null ? "" : String(wert);
  return /[";\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export async function GET(req: Request) {
  const key = new URL(req.url).searchParams.get("key");
  const erwartet = process.env.RACE_LISTE_KEY;
  if (!erwartet || key !== erwartet) {
    return NextResponse.json({ ok: false }, { status: 404 });
  }

  await ensureSchema();
  const q = sql();
  const zeilen = (await q`
    SELECT * FROM race_anmeldungen
    ORDER BY status DESC, created_at ASC
  `) as Zeile[];

  const csv = [
    SPALTEN.map(([kopf]) => feld(kopf)).join(";"),
    ...zeilen.map((z) => SPALTEN.map(([, lies]) => feld(lies(z))).join(";")),
  ].join("\r\n");

  // BOM, sonst zeigt Excel Umlaute falsch an.
  return new NextResponse("﻿" + csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="anmeldungen-race-2026.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
