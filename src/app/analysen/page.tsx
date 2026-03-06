import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { Activity, Flame, Zap, BarChart3, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Analysen & Diagnostik",
  description:
    "InBody Koerperanalyse, Stoffwechselanalyse und Leistungsanalyse in St. Gallen. Datenbasiertes Training fuer messbare Ergebnisse bei Alpha Sports. Fuer alle Altersgruppen. Krankenkassen anerkannt.",
};

const analyses = [
  {
    id: "inbody",
    icon: Activity,
    title: "InBody Koerperanalyse",
    price: "CHF 80",
    description:
      "Die InBody-Analyse nutzt bioelektrische Impedanzanalyse (BIA), um deine Koerperzusammensetzung in nur einer Minute zu bestimmen. Ein schwacher Strom wird durch deinen Koerper geleitet — der spezifische elektrische Widerstand zeigt, wie viel fettfreie Koerpermasse, Muskulatur, Fett sowie intra- und extrazellulaeres Wasser dein Koerper enthaelt.",
    detailedDescription:
      "Du erhaeltst ein detailliertes Datenblatt, das deinen aktuellen koerperlichen Zustand, Trainingsstatus und Grundumsatz erklaert. Die Analyse bildet die Grundlage fuer individuell angepasste Trainings- und Ernaehrungsplaene — ob Abnehmen oder Muskelaufbau.",
    includes: [
      "Koerperfett-Anteil",
      "Muskelmasse pro Koerperregion",
      "Viszerales Fett",
      "Grundumsatz (BMR)",
      "Wasserhaushalt (intra-/extrazellulaer)",
      "Phasenwinkel",
      "Knochenmasse",
      "Detaillierter Report inkl. Besprechung",
    ],
    note: "3er Karte: CHF 210 (Ersparnis CHF 30) | Add-On zu anderen Leistungen: CHF 60",
    benefits: [
      "Fuer alle Altersgruppen geeignet",
      "Detaillierte Einblicke in Gesundheits- und Ernaehrungsstatus",
      "Individuell angepasste Strategien ermoeglichen",
      "Effiziente Zielerreichung unterstuetzen",
      "Selbstvertrauen und Motivation steigern",
    ],
  },
  {
    id: "stoffwechsel",
    icon: Flame,
    title: "Stoffwechselanalyse",
    price: "CHF 149",
    description:
      "Eine 5-minuetige Atemgasanalyse in Ruhe bestimmt deine exakte Stoffwechselsituation. Du erfaehrst, welche Energiequelle (Kohlenhydrate, Proteine oder Fette) dein Koerper aktuell bevorzugt und wie hoch dein genauer Grundumsatz ist.",
    detailedDescription:
      "Waehrend des Termins fuehrst du einen kurzen Atemtest in Ruhe durch. Unsere Spezialisten erfragen deine taeglichen koerperlichen Aktivitaeten, um deinen Leistungsumsatz zu berechnen und deinen taeglichen Gesamtkalorienbedarf zu ermitteln. Ergebnisse werden sofort ueber eine App bereitgestellt — mit Rezepten, optimaler Makronaehrstoff-Verteilung und deinem taeglichen Kalorienbudget.",
    includes: [
      "Ruhe-Stoffwechselrate",
      "Fett- vs. Kohlenhydratverbrennung",
      "Optimale Kalorienzufuhr",
      "Taeglicher Gesamtkalorienbedarf",
      "Persoenliche Ernaehrungsempfehlung",
      "App-Zugang mit Rezepten (3 Monate)",
      "Nachbesprechung mit Trainer",
    ],
    note: "Add-On zu anderen Leistungen: CHF 119",
    benefits: [
      "Stoffwechsel-Optimierung fuer maximale Energie",
      "Gesundheitsverbesserungen",
      "Gesteigerte koerperliche Leistungsfaehigkeit",
      "Nachhaltige Ernaehrungsstrategien",
    ],
  },
  {
    id: "leistung",
    icon: Zap,
    title: "Leistungsanalyse",
    price: "CHF 159",
    description:
      "Ein 20-minuetiger Stufentest bestimmt dein aktuelles Fitness-Level, deine kardiovaskulaere Kapazitaet und Stoffwechselfunktion. Du erfaehrst den Pulsbereich, in dem du am meisten Fett verbrennst, deine VO2max-Werte und den Punkt, an dem deine Muskulatur beginnt zu uebersaeuern.",
    detailedDescription:
      "Die Ergebnisse werden sofort ueber eine App bereitgestellt und beinhalten einen personalisierten 6-Monats-Ausdauertrainingsplan mit individualisierten Herzfrequenz-Zonen. Ideal fuer gezieltes Ausdauer- und Krafttraining oder Wettkampfvorbereitung wie HYROX.",
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
    benefits: [
      "Perfekte Trainingsplanung",
      "Strategischer Ansatz fuer persoenliche Fitnessziele",
      "Uebertraining vermeiden",
      "Fuer alle Altersgruppen geeignet",
    ],
  },
];

export default function AnalysenPage() {
  return (
    <>
      <PageHero
        badge="Analysen & Diagnostik"
        title="Kenne deinen Koerper."
        description="Mit unserer Stoffwechsel-, Koerper- und Leistungsanalyse lernst du deinen Koerper besser kennen — fuer gezieltes, datenbasiertes Training. Fuer alle Altersgruppen geeignet."
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
                    <p className="mt-6 leading-relaxed text-text-secondary">
                      {a.description}
                    </p>
                    <p className="mt-4 leading-relaxed text-text-secondary">
                      {a.detailedDescription}
                    </p>

                    {/* Benefits */}
                    <div className="mt-6">
                      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-secondary">
                        Vorteile
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {a.benefits.map((b) => (
                          <span
                            key={b}
                            className="rounded-full bg-bg-alt px-3 py-1.5 text-xs font-medium text-text-secondary"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-secondary">
                      Beinhaltet
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

      {/* Insurance note */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-text">
            Krankenkassen anerkannt
          </h2>
          <p className="mt-4 text-text-secondary">
            Alpha Sports ist Qualitop zertifiziert. Informiere dich auf qualitop.ch
            ueber moegliche finanzielle Unterstuetzung deiner Krankenkasse fuer
            Fitnessaktivitaeten.
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
