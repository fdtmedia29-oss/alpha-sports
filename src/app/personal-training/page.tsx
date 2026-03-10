import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import PhotoCarousel from "@/components/ui/PhotoCarousel";
import {
  Check,
  Dumbbell,
  Heart,
  Target,
  Clock,
  Shield,
  Users,
  Baby,
  Apple,
  Zap,
  ArrowRight,
  Scale,
  Bone,
  Trophy,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personal Training",
  description:
    "Individuelles 1:1 Personal Training im privaten Studio in St. Gallen. Abnehmen, Muskelaufbau, Schmerzfreiheit — massgeschneiderte Trainings- und Ernährungsstrategien. Krankenkassen anerkannt. Kostenloses Beratungsgespraech.",
};

const schwerpunkte = [
  "Individuelle Coachings",
  "Leistungsdiagnostik",
  "Persönliche Trainingsplanung mit individueller Strategie",
  "Korrekte Übungsausfuehrung für maximale Effizienz ohne Verletzungen",
  "Spürbare Fortschritte und sichtbare Ergebnisse",
  "Flexible Terminwahl (auch am Wochenende)",
];

const schwangerschaftskursFeatures = [
  "Sanfte Kraft- und Beweglichkeitsübungen",
  "Beckenbodentraining",
  "Übungen zur Entspannung",
  "Geschuetzter Raum zum Austausch",
];

const schwangerschaftscoachingFeatures = [
  "Individuelle Betreuung",
  "Gezielte Staerkung",
  "Beschwerdefrei durch die Schwangerschaft",
  "Optimale Geburtsvorbereitung",
  "Stressabbau & Entspannung",
  "Beckenbodentraining",
];

export default function PersonalTrainingPage() {
  return (
    <>
      <PageHero
        badge="Personal Training"
        title="Individuell & effektiv für deine Bestform."
        description="Bei Alpha Sports bekommst du keine Standardloesungen — sondern massgeschneiderte Trainings- und Ernährungsstrategien, die dich effizient und sicher zu deiner Bestform begleiten."
      />

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-text-secondary">
              Bei Alpha Sports bekommst du keine Standardloesungen — sondern
              massgeschneiderte Trainings- und Ernährungsstrategien, die dich
              effizient und sicher zu deiner Bestform begleiten. Deine Ziele und
              deine persönliche Ausgangslage stehen bei uns an erster Stelle.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              In einer familiaeren & privaten Atmosphäre begleiten wir dich auf
              deinem Weg. Dank modernster Analysen lernen wir deinen Körper genau
              kennen und entwickeln daraus eine zielgerichtete Trainingsstrategie,
              die perfekt zu dir und deinem Alltag passt. So erreichst du sichtbare
              Ergebnisse — schnell und nachhaltig.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Unser Anspruch ist es, dass du nicht nur Fortschritte siehst, sondern
              dich stärker, energiegeladener und ausgeglichener fühlst — im
              Training sowie im Alltag.
            </p>
          </div>
        </div>
      </section>

      {/* Schwerpunkte */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange">
                Schwerpunkte
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
                Was dich erwartet.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {schwerpunkte.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-light">
                    <Check className="h-3.5 w-3.5 text-orange" />
                  </div>
                  <span className="text-sm font-medium text-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-text-secondary">
            Vereinbare jetzt ein kostenloses Beratungsgespraech, in dem wir eine
            Strategie zur Erreichung deiner Ziele ausarbeiten.
          </p>
          <div className="mt-6">
            <Link
              href="/kostenloses-beratungsgespraech"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 text-base font-semibold text-white transition-all hover:bg-orange/90"
            >
              Kostenloses Beratungsgespraech buchen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Schwangerschaftskurs */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange">
                Schwangerschaftskurs
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
                Gesund und voller Energie durch die Schwangerschaft!
              </h2>
              <p className="mt-4 text-text-secondary">
                Trainerin: <strong>Isabell Tatzl</strong>
              </p>
              <div className="mt-6 space-y-3">
                {schwangerschaftskursFeatures.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-light">
                      <Check className="h-3.5 w-3.5 text-orange" />
                    </div>
                    <span className="text-sm font-medium text-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-white p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Clock className="h-4 w-4 text-orange" />
                  Jeden Sonntag 09:00–10:00
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Users className="h-4 w-4 text-orange" />
                  Max. 6 Teilnehmerinnen
                </div>
                <div className="mt-4 inline-block rounded-full bg-orange-light px-4 py-1.5 text-sm font-semibold text-orange">
                  CHF 180
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1:1 Schwangerschaftscoaching */}
      <section id="schwangerschaft" className="scroll-mt-24 section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="grid gap-4 sm:grid-cols-2">
                {schwangerschaftscoachingFeatures.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-light">
                      <Check className="h-3.5 w-3.5 text-orange" />
                    </div>
                    <span className="text-sm font-medium text-text">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl bg-bg-alt p-6">
                <p className="text-sm text-text-secondary">
                  <strong>Trainerin:</strong> Isabell Tatzl — ausgebildete Expertin
                  und Mutter von zwei Kindern.
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  <strong>1:1 Coaching:</strong> CHF 150 pro Session, individuell
                  terminiert.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-semibold uppercase tracking-widest text-orange">
                1:1 Schwangerschaftscoaching
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
                Aktiv und gesund durch deine Schwangerschaft.
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                Unser 1:1 Schwangerschaftscoaching bietet dir die perfekte
                Möglichkeit, aktiv und gesund durch deine Schwangerschaft zu gehen.
                Wir beruecksichtigen nicht nur deine individuellen Bedürfnisse und
                Wuensche, sondern auch den aktuellen Verlauf deiner Schwangerschaft.
              </p>
              <p className="mt-4 text-text-secondary">
                Ob Anfängerin oder erfahrene Sportlerin — unser
                Schwangerschaftscoaching ist für jede Frau geeignet. Gemeinsam
                schaffen wir eine Balance zwischen Aktivitaet und Entspannung. Dein
                Wohlbefinden und das deines Babys stehen an erster Stelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <PhotoCarousel
            title="Personal Training"
            images={[
              "/images/pt/alpha-personal-03.jpg",
              "/images/pt/alpha-personal-07.jpg",
              "/images/pt/alpha-personal-09.jpg",
              "/images/pt/alpha-personal-15.jpg",
              "/images/pt/alpha-personal-24.jpg",
              "/images/pt/alpha-personal-26.jpg",
              "/images/pt/alpha-personal-32.jpg",
              "/images/pt/lerchenfeld-73.jpg",
              "/images/pt/kal00470.jpg",
              "/images/pt/kal00633.jpg",
              "/images/pt/kal00693.jpg",
            ]}
          />
        </div>
      </section>

      <CTABanner
        title="Starte mit einem kostenlosen Beratungsgespraech."
        description="30 Minuten, unverbindlich. Wir lernen dich kennen, analysieren deine Ziele und zeigen dir, wie wir dich auf dem schnellsten Weg zu deiner Bestform begleiten koennen."
      />
    </>
  );
}
