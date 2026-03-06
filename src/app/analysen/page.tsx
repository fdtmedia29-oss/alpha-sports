import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { Activity, Flame, Zap, BarChart3, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Analysen & Diagnostik",
  description:
    "InBody Koerperanalyse, Stoffwechselanalyse und Leistungsanalyse in St. Gallen. Datenbasiertes Training fuer messbare Ergebnisse bei Alpha Sports.",
};

const analyses = [
  {
    id: "inbody",
    icon: Activity,
    title: "InBody Koerperanalyse",
    subtitle: "Dein Start in Richtung Bestform",
    price: "CHF 80",
    description:
      "Die InBody-Analyse nutzt bioelektrische Impedanzanalyse (BIA), um deine Koerperzusammensetzung in nur einer Minute zu bestimmen. Ein schwacher Strom wird durch deinen Koerper geleitet — der spezifische elektrische Widerstand zeigt, wie viel fettfreie Koerpermasse, Muskulatur, Fett sowie intra- und extrazellulaeres Wasser dein Koerper enthaelt.",
    detailedDescription:
      "Du erhaeltst ein detailliertes Datenblatt, das deinen aktuellen koerperlichen Zustand, Trainingsstatus und Grundumsatz erklaert. Die Analyse bildet die Grundlage fuer individuell angepasste Trainings- und Ernaehrungsplaene.",
    measures: [
      "Koerperfettanteil",
      "Muskelmasse",
      "Viszeralfett",
      "Segmentale Muskulatur",
      "Wasserhaushalt",
    ],
    includes: [
      "Muskelmasse / Koerperfett / Knochenmasse / Wasserhaushalt",
      "Ueberblick Gesundheit",
      "Muskulaere Dysbalance",
      "Fortschrittskontrolle",
      "Individuelle Empfehlung",
      "Ideal zur Zielverfolgung",
    ],
    note: "3er Karte: CHF 210 | 12er Karte: CHF 810 | Add-On: CHF 60",
  },
  {
    id: "stoffwechsel",
    icon: Flame,
    title: "Stoffwechselanalyse",
    subtitle: "Verstehe deinen Koerper & erreiche deine Bestform",
    price: "CHF 149",
    description:
      "Eine 5-minuetige Atemgasanalyse in Ruhe bestimmt deine exakte Stoffwechselsituation. Du erfaehrst, welche Energiequelle (Kohlenhydrate, Proteine oder Fette) dein Koerper aktuell bevorzugt und wie hoch dein genauer Grundumsatz ist.",
    detailedDescription:
      "Waehrend des Termins fuehrst du einen kurzen Atemtest in Ruhe durch. Unsere Spezialisten erfragen deine taeglichen koerperlichen Aktivitaeten, um deinen Leistungsumsatz zu berechnen und deinen taeglichen Gesamtkalorienbedarf zu ermitteln. Ergebnisse werden sofort ueber eine App bereitgestellt — mit Rezepten, optimaler Makronaehrstoff-Verteilung und deinem taeglichen Kalorienbudget.",
    measures: [],
    includes: [
      "Exakte Messung Grundumsatz",
      "Analyse Fett- vs. Kohlenhydrat-Verbrennung",
      "Individuelle Ernaehrungsempfehlung",
      "Grundlage fuer Transformation",
    ],
    note: "Add-On zu anderen Leistungen: CHF 119",
  },
  {
    id: "leistung",
    icon: Zap,
    title: "Leistungsanalyse",
    subtitle: "Trainiere gezielt & effizient auf dem Weg zu deiner Bestform",
    price: "CHF 159",
    description:
      "Ein 20-minuetiger Stufentest (Spiroergometrie) bestimmt dein aktuelles Fitness-Level, deine kardiovaskulaere Kapazitaet und Stoffwechselfunktion. Du erfaehrst den Pulsbereich, in dem du am meisten Fett verbrennst, deine VO2max-Werte und den Punkt, an dem deine Muskulatur beginnt zu uebersaeuern.",
    detailedDescription:
      "Die Ergebnisse werden sofort ueber eine App bereitgestellt und beinhalten einen personalisierten 6-Monats-Ausdauertrainingsplan mit individualisierten Herzfrequenz-Zonen. Ideal fuer gezieltes Ausdauer- und Krafttraining oder Wettkampfvorbereitung wie HYROX.",
    measures: [],
    includes: [
      "Maximale Sauerstoffaufnahme (VO2max)",
      "Individuelle Trainingszonen",
      "Fettverbrennungs-Pulsbereich",
      "Uebersaeuerungsschwelle",
      "Herzfrequenz-Zonen",
      "6-Monate Ausdauertrainingsplan",
      "App-Zugang mit Ergebnissen",
    ],
    note: "Add-On zu anderen Leistungen: CHF 129",
  },
];

export default function AnalysenPage() {
  return (
    <>
      <PageHero
        badge="Analysen & Diagnostik"
        title="Kenne deinen Koerper."
        description="Mit unserer Stoffwechsel-, Koerper- und Leistungsanalyse lernst du deinen Koerper besser kennen — fuer gezieltes, datenbasiertes Training."
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-center gap-4">
            <BarChart3 className="h-8 w-8 text-orange" />
            <div>
              <h2 className="text-2xl font-bold text-text">
                Messbare Fortschritte statt Bauchgefuehl.
              </h2>
              <p className="mt-1 text-text-secondary">
                Drei Analysen, die zusammen ein vollstaendiges Bild ergeben. Auf
                Basis der Ergebnisse entwickeln wir individuell massgeschneiderte
                Trainings- und Ernaehrungsstrategien, die perfekt in deinen Alltag
                passen.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {analyses.map((a) => (
              <div
                key={a.id}
                id={a.id}
                className="scroll-mt-24 rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-lg md:p-12"
              >
                <div className="grid gap-8 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-light">
                        <a.icon className="h-5 w-5 text-orange" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-text">
                          {a.title}
                        </h3>
                        <span className="text-lg font-semibold text-orange">
                          {a.price}
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 text-sm font-medium text-text-secondary italic">
                      {a.subtitle}
                    </p>
                    <p className="mt-6 leading-relaxed text-text-secondary">
                      {a.description}
                    </p>
                    <p className="mt-4 leading-relaxed text-text-secondary">
                      {a.detailedDescription}
                    </p>

                    {a.measures.length > 0 && (
                      <div className="mt-6">
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-secondary">
                          Was gemessen wird
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {a.measures.map((m) => (
                            <span
                              key={m}
                              className="rounded-full bg-bg-alt px-3 py-1.5 text-xs font-medium text-text-secondary"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-secondary">
                      Das erfaehrst du
                    </h4>
                    <ul className="space-y-3">
                      {a.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-text-secondary"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {a.note && (
                      <p className="mt-4 rounded-lg bg-bg-alt p-3 text-xs text-muted">
                        {a.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App delivery */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Smartphone className="h-12 w-12 text-orange" />
          </div>
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-text md:text-3xl">
            Ergebnisse sofort in der App.
          </h2>
          <p className="mt-4 text-text-secondary">
            Die Resultate aller Analysen werden direkt ueber eine App bereitgestellt
            — mit individuellen Trainingszonen, Ernaehrungsempfehlungen, Rezepten und
            deinem persoenlichen Kalorienbudget.
          </p>
        </div>
      </section>

      <CTABanner
        title="Bereit, deinen Koerper kennenzulernen?"
        description="Buche eine Analyse und erfahre, was in dir steckt. Alle Analysen koennen kombiniert oder als Add-On zu anderen Leistungen gebucht werden."
      />
    </>
  );
}
