import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { Activity, Flame, Zap, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Analysen & Diagnostik",
  description:
    "InBody Körperanalyse, Stoffwechselanalyse und Leistungsanalyse in St. Gallen. Datenbasiertes Training für messbare Ergebnisse bei Alpha Sports.",
};

const analyses = [
  {
    id: "inbody",
    icon: Activity,
    title: "InBody Körperanalyse",
    price: "CHF 80",
    description:
      "Die InBody-Analyse misst deine Körperzusammensetzung: Muskelmasse, Körperfett, Wasseranteil und mehr. Du erhältst einen detaillierten Report als Grundlage für deinen Trainings- und Ernährungsplan.",
    includes: [
      "Körperfett-Anteil",
      "Muskelmasse pro Körperregion",
      "Viszerales Fett",
      "Grundumsatz (BMR)",
      "Wasserhaushalt",
      "Detaillierter Report zum Mitnehmen",
    ],
    note: "4er Karte: CHF 270 (Ersparnis CHF 50)",
  },
  {
    id: "stoffwechsel",
    icon: Flame,
    title: "Stoffwechselanalyse",
    price: "CHF 149",
    description:
      "Erfahre, wie dein Stoffwechsel arbeitet. Die Analyse zeigt dir exakt, wie viel du essen solltest und welches Verhältnis von Kohlenhydraten und Fetten dein Körper am effizientesten verbrennt.",
    includes: [
      "Ruhe-Stoffwechselrate",
      "Fett- vs. Kohlenhydratverbrennung",
      "Optimale Kalorienzufuhr",
      "Persönliche Ernährungsempfehlung",
      "Nachbesprechung mit Trainer",
    ],
  },
  {
    id: "leistung",
    icon: Zap,
    title: "Leistungsanalyse",
    price: "CHF 159",
    description:
      "Bestimme dein aktuelles Fitness-Level und deine Trainingszonen. Ideal für gezieltes Ausdauer- und Krafttraining oder Wettkampfvorbereitung wie HYROX.",
    includes: [
      "Maximale Sauerstoffaufnahme (VO2max)",
      "Individuelle Trainingszonen",
      "Laktat-Schwellenbestimmung",
      "Herzfrequenz-Zonen",
      "Trainingsempfehlungen",
    ],
  },
];

export default function AnalysenPage() {
  return (
    <>
      <PageHero
        badge="Analysen & Diagnostik"
        title="Kenne deinen Körper."
        description="Mit unserer Stoffwechsel-, Körper- und Leistungsanalyse lernst du deinen Körper besser kennen — für gezieltes, datenbasiertes Training."
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-center gap-4">
            <BarChart3 className="h-8 w-8 text-orange" />
            <div>
              <h2 className="text-2xl font-bold text-text">
                Messbare Fortschritte statt Bauchgefühl.
              </h2>
              <p className="mt-1 text-text-secondary">
                Drei Analysen, die zusammen ein vollständiges Bild ergeben.
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
                    <p className="mt-6 text-text-secondary leading-relaxed">
                      {a.description}
                    </p>
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

      <CTABanner
        title="Bereit, deinen Körper kennenzulernen?"
        description="Buche eine Analyse und erfahre, was in dir steckt. Alle Analysen können mit einem Personal Training kombiniert werden."
      />
    </>
  );
}
