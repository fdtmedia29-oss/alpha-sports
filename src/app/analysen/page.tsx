import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import PhotoCarousel from "@/components/ui/PhotoCarousel";
import Image from "next/image";
import { Activity, Flame, Zap, BarChart3, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Analysen & Diagnostik",
  description:
    "InBody Körperanalyse, Stoffwechsel- und Stressanalyse und Leistungsanalyse in St. Gallen. Datenbasiertes Training für messbare Ergebnisse bei Alpha Sports.",
};

const analyses = [
  {
    id: "inbody",
    icon: Activity,
    title: "InBody Körperanalyse",
    subtitle: "Dein Start in Richtung Bestform",
    price: "CHF 80",
    images: [
      "/images/analysen/2-inbody-k-rperanalyse.png",
      "/images/analysen/inbody-analyse.webp",
    ],
    description:
      "Die InBody-Analyse nutzt bioelektrische Impedanzanalyse (BIA), um deine Körperzusammensetzung in nur einer Minute zu bestimmen. Ein schwacher Strom wird durch deinen Körper geleitet — der spezifische elektrische Widerstand zeigt, wie viel fettfreie Körpermasse, Muskulatur, Fett sowie intra- und extrazellulaeres Wasser dein Körper enthaelt.",
    detailedDescription:
      "Du erhältst ein detailliertes Datenblatt, das deinen aktuellen körperlichen Zustand, Trainingsstatus und deine Regenerationsfähigkeit zeigt. Die Analyse bildet die Grundlage für individuell angepasste Trainings- und Ernährungsplaene.",
    measures: [
      "Körperfettanteil",
      "Muskelmasse",
      "Viszeralfett",
      "Segmentale Muskulatur",
      "Wasserhaushalt",
      "Phasenwinkel",
      "Intra- und Extrazelluläres Wasser",
    ],
    includes: [
      "Muskelmasse / Körperfett / Knochenmasse / Wasserhaushalt",
      "Überblick Gesundheit",
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
    title: "Stoffwechsel- und Stressanalyse",
    subtitle: "Verstehe deinen Körper & erreiche deine Bestform",
    price: "CHF 149",
    description:
      "Eine 30-minütige Atemgasanalyse in Ruhe bestimmt deine exakte Stoffwechselsituation und dein Stresslevel. Du erfaehrst, welche Energiequelle (Kohlenhydrate, Proteine oder Fette) dein Körper aktuell bevorzugt und wie hoch dein genauer Grundumsatz ist.",
    detailedDescription:
      "Während des Termins fuehrst du einen Atemtest in Ruhe durch. Unsere Spezialisten erfragen deine täglichen körperlichen Aktivitaeten, um deinen Leistungsumsatz zu berechnen und deinen täglichen Gesamtkalorienbedarf zu ermitteln. Ergebnisse werden sofort über eine App bereitgestellt — mit optimaler Makronährstoff-Verteilung und deinem täglichen Kalorienbudget.",
    measures: [
      "Grundumsatz",
      "Metabolische Flexibilität",
      "Verhältnis Energiegewinnung aus Kohlenhydraten und Fett",
      "Stresslevel",
      "Atemzugfrequenz",
    ],
    includes: [
      "Exakte Messung Grundumsatz",
      "Analyse Fett- vs. Kohlenhydrat-Verbrennung",
      "Individuelle Ernährungsempfehlung",
      "Grundlage für Transformation",
    ],
    note: "Add-On zu Personal Training Stempelkarten: CHF 119",
  },
  {
    id: "leistung",
    icon: Zap,
    title: "Leistungsanalyse",
    subtitle: "Trainiere gezielt & effizient auf dem Weg zu deiner Bestform",
    price: "CHF 159",
    description:
      "Mit unserer Spiroergometrie basierten Leistungsanalyse bestimmen wir auf genauste Art die Ergonomie deines Herzkreislaufsystems. Du erfährst den Pulsbereich, in dem du am meisten Fett verbrennst, deine VO2max-Werte und den Punkt, an dem deine Muskulatur beginnt zu übersäuern.",
    detailedDescription:
      "Du erhältst deine individuellen Herzfrequenz-Zonen für dein Ausdauertraining, du erfährst in welcher Zone du deine Fettverbrennung trainierst, deine VO2max-Werte und deinen personalisierten 6-Monats-Ausdauertrainingsplan. Ideal für gezieltes Ausdauer- und Krafttraining oder Wettkampfvorbereitung wie HYROX.",
    measures: [],
    includes: [
      "Maximale Sauerstoffaufnahme (VO2max)",
      "Individuelle Trainingszonen",
      "Fettverbrennungs-Pulsbereich",
      "Übersaeuerungsschwelle",
      "Herzfrequenz-Zonen",
      "6-Monate Ausdauertrainingsplan",
      "App-Zugang mit Ergebnissen",
    ],
    note: "Add-On zu Personal Training Stempelkarten: CHF 129",
  },
];

export default function AnalysenPage() {
  return (
    <>
      <PageHero
        badge="Analysen & Diagnostik"
        title="Lerne deinen Körper neu kennen."
        description="Mit unserer Stoffwechsel-, Körper- und Leistungsanalyse lernst du deinen Körper besser kennen — für gezieltes, datenbasiertes Training."
        ctaText="Beratung buchen"
        ctaHref="/kostenloses-beratungsgespraech"
        backgroundImage="/images/analysen/stoffwechselanalyse.jpg"
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
                Trainings- und Ernährungsstrategien, die perfekt in deinen Alltag
                passen.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {analyses.map((a) => (
              <div
                key={a.id}
                id={a.id}
                className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-white transition-all hover:shadow-lg"
              >
                {/* Image header — two photos side by side */}
                {"images" in a && (a as typeof a & { images: string[] }).images && (
                  <div className="grid grid-cols-2 gap-px bg-border/50">
                    {(a as typeof a & { images: string[] }).images.map((img, i) => (
                      <div key={i} className="relative aspect-[16/9] overflow-hidden bg-bg-alt">
                        <Image
                          src={img}
                          alt={`${a.title} ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="p-8 md:p-12">
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
                        Das erfährst du
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
            Die Resultate aller Analysen werden direkt über eine App bereitgestellt
            — mit individuellen Trainingszonen, Ernährungsempfehlungen, Rezepten und
            deinem persönlichen Kalorienbudget.
          </p>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <PhotoCarousel
            title="Analysen & Diagnostik"
            images={[
              "/images/analysen/erkl-r-foto-lui.jpg",
              "/images/analysen/2-inbody-k-rperanalyse.png",
              "/images/analysen/leistungsanalyse.jpg",
              "/images/analysen/stoffwechselanalyse.jpg",
              "/images/analysen/inbody-analyse.webp",
            ]}
          />
        </div>
      </section>

      <CTABanner
        title="Bereit, deinen Körper kennenzulernen?"
        description="Buche eine Analyse und erfahre, was in dir steckt. Alle Analysen können kombiniert oder als Add-On zu Personal Training Stempelkarten gebucht werden."
      />
    </>
  );
}
