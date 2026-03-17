"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface PriceRow {
  name: string;
  price: string;
  note?: string;
}

interface PricingTab {
  label: string;
  rows: PriceRow[];
  ergaenzung?: PriceRow[];
  footer?: string;
  footerNote?: string;
}

interface PricingSection {
  title: string;
  tabs: PricingTab[];
}

const sections: PricingSection[] = [
  {
    title: "Trainings",
    tabs: [
      {
        label: "Einzelbuchungen",
        rows: [
          { name: "Beratungsgespräch", price: "kostenlos", note: "30 Minuten" },
          { name: "1:1 Personal Training", price: "150.-", note: "60 Minuten" },
          { name: "1:2 Personal Training", price: "90.- p.P.", note: "60 Minuten" },
          { name: "Trainingsplanung", price: "65.-", note: "zu Stempelkarten & Personal Trainings" },
        ],
      },
      {
        label: "1:1 Stempelkarte",
        rows: [
          { name: "12er Stempelkarte", price: "ab CHF 580.- mtl.", note: "Entspricht 1 Training pro Woche, im Zeitraum von 3 Monaten" },
          { name: "24er Stempelkarte", price: "ab CHF 960.- mtl.", note: "Entspricht 2 Trainings pro Woche, im Zeitraum von 3 Monaten" },
          { name: "36er Stempelkarte", price: "ab CHF 1380.- mtl.", note: "Entspricht 3 Trainings pro Woche, im Zeitraum von 3 Monaten" },
          { name: "48er Stempelkarte", price: "ab CHF 1760.- mtl.", note: "Entspricht 4 Trainings pro Woche, im Zeitraum von 3 Monaten" },
        ],
        ergaenzung: [
          {
            name: "Alpha Sports Shape Package",
            price: "CHF 233.- mtl.",
            note: "4x InBody Analyse; 4x Erfolgsgespräch à 15 Min., 1x Stoffwechselanalyse, Ernährungsberatung (Sport- & Alltagsernährung inkl. Dossier)",
          },
          {
            name: "Alpha Sports Shape Plus Package",
            price: "CHF 389.50 mtl.",
            note: "4x InBody Analyse; 4x Erfolgsgespräch à 15 Min., 1x Stoffwechselanalyse, 4 Körpervermessungen + Vorher-Nachher-Fotos, Ernährungsberatung (Sport- & Alltagsernährung inkl. Dossier), 3 Ernährungspläne",
          },
        ],
        footer: "inkl. 1 Proteinshake & 1 Sportgetränk pro Training, Handtuchservice, Optional: Weitere Angebot mit Rabatt wählbar",
      },
      {
        label: "1:2 Stempelkarte",
        rows: [
          { name: "12er Stempelkarte", price: "ab CHF 280.- mtl.", note: "Entspricht 1 Training pro Woche, im Zeitraum von 3 Monaten" },
          { name: "24er Stempelkarte", price: "ab CHF 520.- mtl.", note: "Entspricht 2 Trainings pro Woche, im Zeitraum von 3 Monaten" },
          { name: "36er Stempelkarte", price: "ab CHF 720.- mtl.", note: "Entspricht 3 Trainings pro Woche, im Zeitraum von 3 Monaten" },
          { name: "48er Stempelkarte", price: "ab CHF 960.- mtl.", note: "Entspricht 4 Trainings pro Woche, im Zeitraum von 3 Monaten" },
        ],
        ergaenzung: [
          {
            name: "Alpha Sports Shape Package",
            price: "CHF 233.- mtl.",
            note: "4x InBody Analyse; 4x Erfolgsgespräch à 15 Min., 1x Stoffwechselanalyse, Ernährungsberatung (Sport- & Alltagsernährung inkl. Dossier)",
          },
          {
            name: "Alpha Sports Shape Plus Package",
            price: "CHF 389.50 mtl.",
            note: "4x InBody Analyse; 4x Erfolgsgespräch à 15 Min., 1x Stoffwechselanalyse, 4 Körpervermessungen + Vorher-Nachher-Fotos, Ernährungsberatung (Sport- & Alltagsernährung inkl. Dossier), 3 Ernährungspläne",
          },
        ],
        footer: "inkl. 1 Proteinshake & 1 Sportgetränk pro Training, Handtuchservice, Optional: Weitere Angebot mit Rabatt wählbar",
        footerNote: "Preise pro Person",
      },
      {
        label: "Gruppenkurse",
        rows: [
          { name: "Schnupperstunde", price: "kostenlos" },
          { name: "Einzeleintritt", price: "CHF 30.-" },
          { name: "12er Stempelkarte", price: "CHF 324.-", note: "CHF 27.- pro Kurs" },
          { name: "24er Stempelkarte", price: "CHF 600.-", note: "CHF 25.- pro Kurs" },
          { name: "36er Stempelkarte", price: "CHF 864.-", note: "CHF 24.- pro Kurs" },
          { name: "48er Stempelkarte", price: "CHF 1104.-", note: "CHF 23.- pro Kurs" },
        ],
        ergaenzung: [
          {
            name: "Alpha Sports Shape Package (233.- mtl.)",
            price: "CHF 699.-",
            note: "4x InBody Analyse; 4x Erfolgsgespräch à 15 Min., 1x Stoffwechselanalyse, Ernährungsberatung (Sport- & Alltagsernährung inkl. Dossier)",
          },
          {
            name: "Alpha Sports Shape Plus Package (389.50.- mtl.)",
            price: "CHF 1168.-",
            note: "4x InBody Analyse; 4x Erfolgsgespräch à 15 Min., 1x Stoffwechselanalyse, 4 Körpervermessungen + Vorher-Nachher-Fotos, Ernährungsberatung (Sport- & Alltagsernährung inkl. Dossier), 3 Ernährungspläne",
          },
        ],
      },
    ],
  },
  {
    title: "Premium Online Coaching mit Alpha Sports App",
    tabs: [
      {
        label: "Premium Online Coachings",
        rows: [
          {
            name: "Alpha Sports Shape 12 Wochen Programm",
            price: "CHF 420.- mtl.",
            note: "Lifestyle Beratung, Ernährungs- & Trainingsplan, Erläuterung der Alpha Sports App & Strategie-Besprechung. Inkl. 3 Monate Premium Online Betreuung über Alpha Sports App (wöchentliche Anpassung & Feedback, Support durch das Alpha Sports Team)",
          },
          {
            name: "Alpha Sports Shape 12 Wochen Programm Plus",
            price: "CHF 620.- mtl.",
            note: "Stoffwechselanalyse, Leistungsanalyse, InBody Analyse, FMS Test, Körpervermessung, Vorher-Nachher-Foto, Personal Training, Ernährungs- und Trainingsplan, Live Onboarding, Erläuterung der Alpha Sports App & Strategie Besprechung. Inkl. 3 Monate Premium Online Betreuung über Alpha Sports App (wöchentliche Anpassung & Feedback, Support durch das Alpha Sports Team)",
          },
        ],
        footer: "*Optional können alle Online Coaching Programme in Hybrid Programme umgewandelt werden.",
      },
    ],
  },
  {
    title: "Ernährungsberatung",
    tabs: [
      {
        label: "Einzelbuchungen",
        rows: [
          { name: "Ernährungsberatung", price: "CHF 150.-/h" },
          {
            name: "Alpha Sports Shape light",
            price: "CHF 592.40.-",
            note: "2h Ernährungsberatung, 1x Leistungsanalyse, 1x Stoffwechselanalyse, 1x InBody Körperanalyse, Ernährungsdossier & Trainingsempfehlung",
          },
        ],
      },
    ],
  },
  {
    title: "Analysen",
    tabs: [
      {
        label: "InBody Körperanalyse",
        rows: [
          { name: "InBody Körperanalyse", price: "CHF 80.-", note: "inkl. Auswertung" },
          { name: "4er Karte InBody Körperanalyse", price: "CHF 270.-", note: "spare CHF 50.-" },
          { name: "Optional", price: "CHF 60.-", note: "zu Ernährungsberatung, Stempelkarten & Paketen" },
        ],
      },
      {
        label: "Stoffwechselanalyse",
        rows: [
          { name: "Stoffwechselanalyse", price: "CHF 149.-" },
          { name: "Optional", price: "CHF 119.-", note: "zu Ernährungsberatung, Stempelkarten & Paketen" },
        ],
      },
      {
        label: "Leistungsanalyse",
        rows: [
          { name: "Leistungsanalyse", price: "CHF 159.-" },
          { name: "Optional", price: "CHF 129.-", note: "zu Ernährungsberatung, Stempelkarten & Paketen" },
        ],
      },
    ],
  },
  {
    title: "Externe Coachings",
    tabs: [
      {
        label: "Externe Coachings",
        rows: [
          { name: "Mental Coaching mit Robert Winzenried", price: "CHF 800.-", note: "3.5 Tage" },
          { name: "Stress-Management mit Birgit Allweier", price: "Preise nach Vereinbarung" },
        ],
      },
    ],
  },
];

function PriceRowComponent({ row }: { row: PriceRow }) {
  return (
    <div className="rounded-xl px-2 py-4 md:px-4">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-base font-bold text-text md:text-lg">
          {row.name}
        </span>
        <span className="mx-2 mb-1 hidden flex-1 shrink-0 border-b-2 border-dotted border-border md:block" />
        <span className="shrink-0 text-base font-semibold text-text md:text-lg">
          {row.price}
        </span>
      </div>
      {row.note && (
        <p className="mt-1 text-sm text-muted">{row.note}</p>
      )}
    </div>
  );
}

export default function PricingTabs() {
  const [activeTabs, setActiveTabs] = useState<Record<string, number>>({});

  const getActiveTab = (sectionTitle: string) => activeTabs[sectionTitle] ?? 0;

  return (
    <div className="space-y-16">
      {sections.map((section) => {
        const activeIdx = getActiveTab(section.title);
        const activeTab = section.tabs[activeIdx];
        const hasTabs = section.tabs.length > 1;

        return (
          <div key={section.title}>
            {/* Section header */}
            <div className="mb-6 rounded-xl bg-dark px-6 py-4">
              <h2 className="text-center text-xl font-bold text-white md:text-2xl">
                {section.title}
              </h2>
            </div>

            {/* Tabs */}
            {hasTabs && (
              <div className="mb-8 flex flex-wrap justify-center gap-2">
                {section.tabs.map((tab, idx) => (
                  <button
                    key={tab.label}
                    onClick={() =>
                      setActiveTabs((prev) => ({
                        ...prev,
                        [section.title]: idx,
                      }))
                    }
                    className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-all ${
                      idx === activeIdx
                        ? "bg-dark text-white"
                        : "bg-surface text-text-secondary hover:bg-border"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            )}

            {/* Price rows */}
            <div className="space-y-1">
              {activeTab.rows.map((row, i) => (
                <PriceRowComponent key={`${row.name}-${i}`} row={row} />
              ))}
            </div>

            {/* Ergänzungspackages (inline within tab) */}
            {activeTab.ergaenzung && activeTab.ergaenzung.length > 0 && (
              <div className="mt-8">
                <div className="px-2 md:px-4">
                  <h3 className="text-base font-black uppercase tracking-wide text-text">
                    Ergänzungspackages:
                  </h3>
                </div>
                <div className="mt-2 space-y-1">
                  {activeTab.ergaenzung.map((row, i) => (
                    <PriceRowComponent key={`erg-${row.name}-${i}`} row={row} />
                  ))}
                </div>
              </div>
            )}

            {/* Footer */}
            {activeTab.footer && (
              <p className="mt-6 text-sm italic text-muted">
                {activeTab.footer}
              </p>
            )}
            {activeTab.footerNote && (
              <p className="mt-2 text-sm font-medium text-text-secondary">
                {activeTab.footerNote}
              </p>
            )}

            {/* CTA */}
            <div className="mt-6 text-center">
              <Link
                href="/kostenloses-beratungsgespraech"
                className="group inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange/90 hover:gap-3"
              >
                Beratung buchen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
