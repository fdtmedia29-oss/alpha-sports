import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import PhotoCarousel from "@/components/ui/PhotoCarousel";
import Image from "next/image";
import AnalysenCards from "@/components/sections/AnalysenCards";
import { BarChart3, Smartphone, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";
import { certifications } from "@/lib/content";
import AnalysenBooking from "@/components/sections/AnalysenBooking";

export const metadata: Metadata = {
  title: "Analysen & Diagnostik",
  description:
    "InBody Körperanalyse, Stoffwechsel- und Stressanalyse und Leistungsanalyse in St. Gallen. Datenbasiertes Training für messbare Ergebnisse bei Alpha Sports.",
};

const analyses = [
  {
    id: "inbody",
    icon: "Activity",
    title: "InBody Körperanalyse",
    subtitle: "Dein Start in Richtung Bestform",
    price: "",
    images: [
      "/images/analysen/2-inbody-k-rperanalyse.jpg",
    ],
    description:
      "Die InBody-Analyse nutzt bioelektrische Impedanzanalyse (BIA), um deine Körperzusammensetzung in nur einer Minute zu bestimmen. Ein schwacher Strom wird durch deinen Körper geleitet — der spezifische elektrische Widerstand zeigt, wie viel fettfreie Körpermasse, Muskulatur, Fett sowie intra- und extrazelluläres Wasser dein Körper enthält.",
    detailedDescription:
      "Du erhältst ein detailliertes Datenblatt, das deinen aktuellen körperlichen Zustand, Trainingsstatus und deine Regenerationsfähigkeit zeigt. Die Analyse bildet die Grundlage für individuell angepasste Trainings- und Ernährungspläne.",
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
      "Muskuläre Dysbalance",
      "Fortschrittskontrolle",
      "Individuelle Empfehlung",
      "Ideal zur Zielverfolgung",
    ],
    note: "",
  },
  {
    id: "stoffwechsel",
    icon: "Flame",
    title: "Stoffwechsel- und Stressanalyse",
    subtitle: "Verstehe deinen Körper & erreiche deine Bestform",
    price: "",
    images: [
      "/images/analysen/stoffwechselanalyse-maske.jpg",
    ],
    description:
      "Eine 30-minütige Atemgasanalyse in Ruhe bestimmt deine exakte Stoffwechselsituation und dein Stresslevel. Du erfährst, welche Energiequelle (Kohlenhydrate, Proteine oder Fette) dein Körper aktuell bevorzugt und wie hoch dein genauer Grundumsatz ist.",
    detailedDescription:
      "Während des Termins führst du einen Atemtest in Ruhe durch. Unsere Spezialisten erfragen deine täglichen körperlichen Aktivitäten, um deinen Leistungsumsatz zu berechnen und deinen täglichen Gesamtkalorienbedarf zu ermitteln. Ergebnisse werden sofort über eine App bereitgestellt — mit deinem täglichen Kalorienbudget.",
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
    note: "",
  },
  {
    id: "leistung",
    icon: "Zap",
    title: "Leistungsanalyse",
    subtitle: "Trainiere gezielt & effizient auf dem Weg zu deiner Bestform",
    price: "",
    images: [
      "/images/analysen/leistungsanalyse-maske.jpg",
    ],
    description:
      "Mit unserer Spiroergometrie basierten Leistungsanalyse bestimmen wir auf genauste Art die Ergonomie deines Herzkreislaufsystems. Du erfährst den Pulsbereich, in dem du am meisten Fett verbrennst, deine VO2max-Werte und den Punkt, an dem deine Muskulatur beginnt zu übersäuern.",
    detailedDescription:
      "Du erhältst deine individuellen Herzfrequenz-Zonen für dein Ausdauertraining, du erfährst in welcher Zone du deine Fettverbrennung trainierst und deine VO2max-Werte. Ideal für gezieltes Ausdauer- und Krafttraining oder Wettkampfvorbereitung wie HYROX.",
    measures: [],
    includes: [
      "Maximale Sauerstoffaufnahme (VO2max)",
      "Individuelle Trainingszonen",
      "Fettverbrennungs-Pulsbereich",
      "Übersäuerungsschwelle",
      "Herzfrequenz-Zonen",
      "App-Zugang mit Ergebnissen",
    ],
    note: "",
  },
];

export default function AnalysenPage() {
  return (
    <>
      <PageHero
        badge="Analysen & Diagnostik"
        title="Lerne deinen Körper neu kennen."
        description="Mit unserer Stoffwechsel-, Körper- und Leistungsanalyse lernst du deinen Körper besser kennen — für gezieltes, datenbasiertes Training."
        ctaText="Jetzt buchen"
        ctaHref="#buchen"
        backgroundImage="/images/analysen/stoffwechselanalyse.jpg"
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
                Drei Analysen, die zusammen ein vollständiges Bild ergeben. Auf
                Basis der Ergebnisse entwickeln wir individuell massgeschneiderte
                Trainings- und Ernährungsstrategien, die perfekt in deinen Alltag
                passen.
              </p>
            </div>
          </div>

          <AnalysenCards analyses={analyses} />
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <Image
          src="/images/analysen/erkl-r-foto-lui.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/75" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-4xl">
            Datenbasiert zu deiner Bestform.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/60">
            Alle Analysen können kombiniert oder als Add-On zu Personal Training
            Stempelkarten gebucht werden. Buche ein kostenloses Beratungsgespräch
            und erfahre, welche Analyse am besten zu dir passt.
          </p>
          <div className="mt-8">
            <Link
              href="#buchen"
              className="group inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 text-base font-semibold text-white transition-all hover:bg-orange/90 hover:gap-3"
            >
              Jetzt Analyse buchen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
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
            - mit individuellen Trainingszonen und deinem persönlichen Kalorienbudget.
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
              "/images/analysen/stoffwechselanalyse-maske.jpg",
              "/images/analysen/leistungsanalyse-maske.jpg",
            ]}
          />
        </div>
      </section>

      {/* Krankenkassen + Google Reviews */}
      <section className="border-y border-border bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row">
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Shield className="h-4 w-4 text-dark" />
            <span className="font-medium">Krankenkassen anerkannt</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {certifications.map((cert) =>
              cert.logo.includes("qualitop") ? (
                <Image
                  key={cert.name}
                  src={cert.logo}
                  alt={cert.name}
                  width={80}
                  height={32}
                  className="h-8 w-auto opacity-60 grayscale"
                />
              ) : (
                <div
                  key={cert.name}
                  className="text-sm font-semibold uppercase tracking-widest text-muted"
                >
                  {cert.name}
                </div>
              )
            )}
            <div className="flex items-center gap-1.5 text-sm font-medium text-dark">
              <span className="text-lg text-amber-500">★</span>
              <span>
                5.0 auf Google{" "}
                <span className="text-muted">— 68 Bewertungen</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <AnalysenBooking />

      <CTABanner
        title="Bereit, deinen Körper kennenzulernen?"
        description="Buche eine Analyse und erfahre, was in dir steckt. Alle Analysen können kombiniert oder als Add-On zu Personal Training Stempelkarten gebucht werden."
      />
    </>
  );
}
