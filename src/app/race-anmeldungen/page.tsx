import { Fragment } from "react";
import type { Metadata } from "next";
import { KATEGORIEN, belegung, ensureSchema, sql, type Kategorie } from "@/lib/race";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Anmeldungen — HYROX Race Simulation",
  robots: { index: false, follow: false },
};

type Zeile = {
  id: number;
  created_at: string;
  kategorie: Kategorie;
  status: "angemeldet" | "warteliste";
  vorname: string;
  nachname: string;
  adresse: string;
  email: string;
  telefon: string;
  jahrgang: number;
  geschlecht: string;
  mitglied: boolean;
  p_vorname: string | null;
  p_nachname: string | null;
  p_email: string | null;
  p_telefon: string | null;
  p_adresse: string | null;
  p_jahrgang: number | null;
  p_geschlecht: string | null;
  p_mitglied: boolean | null;
  ok_werbung: boolean;
};

const datum = (s: string) =>
  new Date(s).toLocaleString("de-CH", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Zurich",
  });

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>;
}) {
  const { key } = await searchParams;
  const erwartet = process.env.RACE_LISTE_KEY;

  if (!erwartet || key !== erwartet) {
    return (
      <main style={S.gate}>
        <div style={S.gateBox}>
          <div style={S.eyebrow}>Alpha Sports</div>
          <h1 style={S.gateH}>Kein Zugriff</h1>
          <p style={S.gateP}>
            Diese Seite ist nur über den persönlichen Link erreichbar. Falls du ihn
            verlegt hast, melde dich bei Francesco.
          </p>
        </div>
      </main>
    );
  }

  await ensureSchema();
  const q = sql();
  const [zeilen, kategorien] = await Promise.all([
    q`SELECT * FROM race_anmeldungen ORDER BY created_at ASC` as unknown as Promise<Zeile[]>,
    belegung(),
  ]);

  const angemeldet = zeilen.filter((z) => z.status === "angemeldet");
  const warteliste = zeilen.filter((z) => z.status === "warteliste");

  // Ein Double bringt zwei Personen mit — für die Planung am Eventtag wichtig.
  const personen = zeilen.reduce(
    (s, z) => s + (KATEGORIEN[z.kategorie]?.double ? 2 : 1),
    0,
  );
  const personenAngemeldet = angemeldet.reduce(
    (s, z) => s + (KATEGORIEN[z.kategorie]?.double ? 2 : 1),
    0,
  );

  const tabelle = (titel: string, daten: Zeile[], leer: string) => (
    <section style={{ marginTop: 44 }}>
      <div style={S.eyebrow}>{titel}</div>
      <h2 style={S.h2}>
        {daten.length} {daten.length === 1 ? "Eintrag" : "Einträge"}
      </h2>
      {daten.length === 0 ? (
        <p style={S.leer}>{leer}</p>
      ) : (
        <div style={S.scroll}>
          <table style={S.table}>
            <thead>
              <tr>
                {[
                  "Nr.",
                  "Eingang",
                  "Kategorie",
                  "Name",
                  "E-Mail",
                  "Telefon",
                  "Adresse",
                  "Jahrgang",
                  "Geschl.",
                  "Mitglied",
                  "Werbung",
                ].map((h) => (
                  <th key={h} style={S.th}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {daten.map((z, i) => {
                const doppel = KATEGORIEN[z.kategorie]?.double;
                return (
                  <Fragment key={z.id}>
                    <tr style={i % 2 ? S.trAlt : undefined}>
                      <td style={S.td}>{z.id}</td>
                      <td style={S.td}>{datum(z.created_at)}</td>
                      <td style={{ ...S.td, ...S.tdStrong }}>
                        {KATEGORIEN[z.kategorie]?.label ?? z.kategorie}
                      </td>
                      <td style={{ ...S.td, ...S.tdStrong }}>
                        {z.vorname} {z.nachname}
                      </td>
                      <td style={S.td}>
                        <a href={`mailto:${z.email}`} style={S.link}>
                          {z.email}
                        </a>
                      </td>
                      <td style={S.td}>
                        <a href={`tel:${z.telefon.replace(/\s/g, "")}`} style={S.link}>
                          {z.telefon}
                        </a>
                      </td>
                      <td style={S.td}>{z.adresse}</td>
                      <td style={S.td}>{z.jahrgang}</td>
                      <td style={S.td}>{z.geschlecht}</td>
                      <td style={S.td}>{z.mitglied ? "Ja" : "—"}</td>
                      <td style={S.td}>{z.ok_werbung ? "Ja" : "—"}</td>
                    </tr>
                    {doppel && z.p_vorname && (
                      <tr style={i % 2 ? S.trAlt : undefined}>
                        <td style={S.td}></td>
                        <td style={{ ...S.td, ...S.tdPartner }}>Partner</td>
                        <td style={S.td}></td>
                        <td style={{ ...S.td, ...S.tdStrong }}>
                          {z.p_vorname} {z.p_nachname}
                        </td>
                        <td style={S.td}>
                          <a href={`mailto:${z.p_email}`} style={S.link}>
                            {z.p_email}
                          </a>
                        </td>
                        <td style={S.td}>
                          <a
                            href={`tel:${(z.p_telefon ?? "").replace(/\s/g, "")}`}
                            style={S.link}
                          >
                            {z.p_telefon}
                          </a>
                        </td>
                        <td style={S.td}>{z.p_adresse}</td>
                        <td style={S.td}>{z.p_jahrgang}</td>
                        <td style={S.td}>{z.p_geschlecht}</td>
                        <td style={S.td}>{z.p_mitglied ? "Ja" : "—"}</td>
                        <td style={S.td}></td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );

  return (
    <main style={S.page}>
      <div style={S.wrap}>
        <div style={S.head}>
          <div>
            <div style={S.eyebrow}>Alpha Sports · 3. Oktober 2026</div>
            <h1 style={S.h1}>Anmeldungen HYROX Race Simulation</h1>
            <p style={S.sub}>
              {angemeldet.length} von 52 Startplätzen vergeben · {personenAngemeldet}{" "}
              Personen am Start
              {warteliste.length > 0 && ` · ${warteliste.length} auf der Warteliste`}
              {personen !== personenAngemeldet && ` · ${personen} Personen insgesamt`}
            </p>
          </div>
          <a href={`/api/race/export?key=${encodeURIComponent(key)}`} style={S.btn}>
            Als Excel-Datei laden
          </a>
        </div>

        <div style={S.tiles}>
          {kategorien.map((k) => {
            const anteil = k.plaetze ? k.belegt / k.plaetze : 0;
            return (
              <div key={k.kategorie} style={S.tile}>
                <div style={S.tileK}>{k.label}</div>
                <div style={S.tileV}>
                  <span style={{ color: k.voll ? "#E8772A" : "#111" }}>{k.belegt}</span>
                  <span style={S.tileTotal}>/ {k.plaetze}</span>
                </div>
                <div style={S.bar}>
                  <div
                    style={{
                      ...S.barFill,
                      width: `${Math.min(100, anteil * 100)}%`,
                      background: k.voll ? "#E8772A" : "#111",
                    }}
                  />
                </div>
                <div style={S.tileNote}>
                  {k.voll ? "Ausgebucht" : `${k.frei} frei`}
                  {k.warteliste > 0 && ` · ${k.warteliste} Warteliste`}
                </div>
              </div>
            );
          })}
        </div>

        {tabelle(
          "Startplätze",
          angemeldet,
          "Noch keine Anmeldungen. Sobald sich jemand einträgt, steht er hier.",
        )}
        {warteliste.length > 0 &&
          tabelle("Warteliste", warteliste, "Niemand auf der Warteliste.")}

        <p style={S.fuss}>
          Die Liste aktualisiert sich bei jedem Neuladen. Bei Doubles stehen beide
          Teilnehmer untereinander, das Paar belegt zusammen einen Startplatz.
        </p>
      </div>
    </main>
  );
}

const S: Record<string, React.CSSProperties> = {
  page: {
    background: "#F7F7F7",
    minHeight: "100vh",
    padding: "40px 16px 80px",
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
    color: "#111",
  },
  wrap: { maxWidth: 1240, margin: "0 auto" },
  head: {
    display: "flex",
    flexWrap: "wrap",
    gap: 20,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    fontWeight: 700,
    color: "#777",
  },
  h1: { fontSize: 30, fontWeight: 900, margin: "8px 0 0", letterSpacing: -0.6 },
  h2: { fontSize: 20, fontWeight: 800, margin: "8px 0 16px" },
  sub: { fontSize: 15, color: "#444", margin: "10px 0 0" },
  btn: {
    background: "#111",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: 14,
    padding: "13px 20px",
    borderRadius: 10,
    whiteSpace: "nowrap",
  },
  tiles: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 14,
    marginTop: 28,
  },
  tile: {
    background: "#fff",
    borderRadius: 14,
    padding: "18px 20px",
    border: "1px solid #E6E6E6",
  },
  tileK: { fontSize: 13, fontWeight: 700, color: "#777" },
  tileV: {
    fontSize: 30,
    fontWeight: 900,
    marginTop: 6,
    display: "flex",
    alignItems: "baseline",
    gap: 6,
  },
  tileTotal: { fontSize: 16, fontWeight: 700, color: "#AAA" },
  bar: {
    height: 6,
    background: "#EEE",
    borderRadius: 99,
    overflow: "hidden",
    marginTop: 12,
  },
  barFill: { height: "100%", borderRadius: 99 },
  tileNote: { fontSize: 13, color: "#777", marginTop: 9, fontWeight: 600 },
  scroll: {
    overflowX: "auto",
    background: "#fff",
    borderRadius: 14,
    border: "1px solid #E6E6E6",
  },
  table: { borderCollapse: "collapse", width: "100%", fontSize: 13.5 },
  th: {
    textAlign: "left",
    padding: "13px 14px",
    fontSize: 11.5,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    color: "#777",
    borderBottom: "1px solid #E6E6E6",
    whiteSpace: "nowrap",
  },
  td: {
    padding: "12px 14px",
    borderBottom: "1px solid #F0F0F0",
    verticalAlign: "top",
    whiteSpace: "nowrap",
  },
  tdStrong: { fontWeight: 700 },
  tdPartner: {
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    color: "#E8772A",
    fontWeight: 800,
  },
  trAlt: { background: "#FAFAFA" },
  link: { color: "#111", textDecoration: "none", borderBottom: "1px solid #DDD" },
  leer: {
    background: "#fff",
    border: "1px dashed #DDD",
    borderRadius: 14,
    padding: "26px 20px",
    color: "#777",
    fontSize: 15,
  },
  fuss: { marginTop: 36, fontSize: 13, color: "#888", lineHeight: 1.7 },
  gate: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    background: "#111",
    padding: 20,
    fontFamily: "Inter, system-ui, sans-serif",
  },
  gateBox: { maxWidth: 420, textAlign: "center", color: "#fff" },
  gateH: { fontSize: 26, fontWeight: 900, margin: "10px 0 12px" },
  gateP: { fontSize: 15, lineHeight: 1.7, color: "#AAA" },
};
