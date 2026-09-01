import { neon } from "@neondatabase/serverless";

/**
 * Jubiläums-Race 2026 — Anmeldungen.
 *
 * Startplätze pro Kategorie kommen von Luigi (Call 18.08):
 * Full Single 20 / Full Double 10 / Half Single 10 / Half Double 12 = 52.
 * Ein Double belegt EINEN Startplatz und bringt ZWEI Personen mit.
 */
export const KATEGORIEN = {
  full_single: { label: "Full HYROX · Single", plaetze: 20, double: false },
  full_double: { label: "Full HYROX · Double", plaetze: 10, double: true },
  half_single: { label: "Half HYROX · Single", plaetze: 10, double: false },
  half_double: { label: "Half HYROX · Double", plaetze: 12, double: true },
} as const;

export type Kategorie = keyof typeof KATEGORIEN;

export const KATEGORIE_KEYS = Object.keys(KATEGORIEN) as Kategorie[];

export function istKategorie(v: unknown): v is Kategorie {
  return typeof v === "string" && v in KATEGORIEN;
}

/**
 * Anmeldeschluss: Mittwoch, 4. November 2026, Ende des Tages.
 *
 * Das Event wurde am 01.09.2026 vom 3. Oktober auf den 7. November verschoben.
 * Der Abstand von drei Tagen vor dem Event ist der gleiche wie bei Luigis
 * urspruenglicher Bestaetigung (24.08). Achtung Zeitzone: im November gilt
 * CET (+01:00), nicht mehr CEST.
 */
export const ANMELDESCHLUSS = new Date("2026-11-04T23:59:59+01:00");

export function anmeldungGeschlossen(jetzt = new Date()) {
  return jetzt.getTime() > ANMELDESCHLUSS.getTime();
}

function connectionString() {
  const url =
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.RACE_DATABASE_URL;
  if (!url) throw new Error("Keine Datenbank-Verbindung konfiguriert");
  return url;
}

export function sql() {
  return neon(connectionString());
}

let schemaReady: Promise<void> | null = null;

/** Legt Tabelle + Indizes an, falls sie fehlen. Läuft pro Instanz nur einmal. */
export function ensureSchema() {
  if (!schemaReady) {
    schemaReady = (async () => {
      const q = sql();
      await q`
        CREATE TABLE IF NOT EXISTS race_anmeldungen (
          id              serial PRIMARY KEY,
          created_at      timestamptz NOT NULL DEFAULT now(),
          kategorie       text NOT NULL,
          status          text NOT NULL DEFAULT 'angemeldet',
          vorname         text NOT NULL,
          nachname        text NOT NULL,
          adresse         text NOT NULL,
          email           text NOT NULL,
          telefon         text NOT NULL,
          jahrgang        integer NOT NULL,
          geschlecht      text NOT NULL,
          mitglied        boolean NOT NULL DEFAULT false,
          p_vorname       text,
          p_nachname      text,
          p_adresse       text,
          p_email         text,
          p_telefon       text,
          p_jahrgang      integer,
          p_geschlecht    text,
          p_mitglied      boolean,
          ok_organisation boolean NOT NULL DEFAULT false,
          ok_werbung      boolean NOT NULL DEFAULT false,
          ip              text
        )
      `;
      await q`
        CREATE UNIQUE INDEX IF NOT EXISTS race_email_uniq
        ON race_anmeldungen (lower(email))
      `;
      await q`
        CREATE INDEX IF NOT EXISTS race_kat_idx
        ON race_anmeldungen (kategorie, status)
      `;
    })().catch((err) => {
      schemaReady = null;
      throw err;
    });
  }
  return schemaReady;
}

export type Belegung = {
  kategorie: Kategorie;
  label: string;
  plaetze: number;
  belegt: number;
  frei: number;
  voll: boolean;
  warteliste: number;
};

/** Belegung pro Kategorie. Warteliste zählt nicht gegen die Startplätze. */
export async function belegung(): Promise<Belegung[]> {
  await ensureSchema();
  const q = sql();
  const rows = (await q`
    SELECT kategorie, status, count(*)::int AS anzahl
    FROM race_anmeldungen
    GROUP BY kategorie, status
  `) as { kategorie: string; status: string; anzahl: number }[];

  return KATEGORIE_KEYS.map((k) => {
    const belegt =
      rows.find((r) => r.kategorie === k && r.status === "angemeldet")?.anzahl ?? 0;
    const warteliste =
      rows.find((r) => r.kategorie === k && r.status === "warteliste")?.anzahl ?? 0;
    const plaetze = KATEGORIEN[k].plaetze;
    return {
      kategorie: k,
      label: KATEGORIEN[k].label,
      plaetze,
      belegt,
      frei: Math.max(0, plaetze - belegt),
      voll: belegt >= plaetze,
      warteliste,
    };
  });
}
