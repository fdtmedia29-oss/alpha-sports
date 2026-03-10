import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import PhotoCarousel from "@/components/ui/PhotoCarousel";
import {
  Check,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personal Training",
  description:
    "Individuelles 1:1 Personal Training im privaten Studio in St. Gallen. Abnehmen, Muskelaufbau, Schmerzfreiheit — massgeschneiderte Trainings- und Ernährungsstrategien. Krankenkassen anerkannt. Kostenloses Beratungsgespräch.",
};

const schwerpunkte = [
  "Individuelle Coachings",
  "Umfangreiche Diagnostik",
  "Persönliche Trainingsplanung mit individueller Strategie",
  "Korrekte Übungsausführung für maximale Effizienz ohne Verletzungen",
  "Spürbare Fortschritte und sichtbare Ergebnisse",
  "Flexible Terminwahl",
];


export default function PersonalTrainingPage() {
  return (
    <>
      <PageHero
        badge="Personal Training"
        title="Individuell & effektiv für deine Bestform."
        description="Bei Alpha Sports bekommst du keine Standardlösungen — sondern massgeschneiderte Trainings- und Ernährungsstrategien, die dich effizient und sicher zu deiner Bestform begleiten."
      />

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-text-secondary">
              Bei Alpha Sports bekommst du keine Standardlösungen — sondern
              massgeschneiderte Trainings- und Ernährungsstrategien, die dich
              effizient und sicher zu deiner Bestform begleiten. Deine Ziele und
              deine persönliche Ausgangslage stehen bei uns an erster Stelle.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              In einer familiären & privaten Atmosphäre begleiten wir dich auf
              deinem Weg. Dank modernster Analysen lernen wir deinen Körper genau
              kennen und entwickeln daraus eine zielgerichtete Trainingsstrategie,
              die perfekt zu dir und deinem Alltag passt. So erreichst du sichtbare
              Ergebnisse — schnell und nachhaltig.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Unser Anspruch ist es, dass du nicht nur Fortschritte siehst, sondern
              dass du Stärke, Selbstbewusstsein und Leistungsfähigkeit ausstrahlst.
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
            Vereinbare jetzt ein kostenloses Beratungsgespräch, in welchem wir eine
            Strategie zur Erreichung deiner Ziele ausarbeiten.
          </p>
          <div className="mt-6">
            <Link
              href="/kostenloses-beratungsgespraech"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 text-base font-semibold text-white transition-all hover:bg-orange/90"
            >
              Kostenloses Beratungsgespräch buchen
              <ArrowRight className="h-4 w-4" />
            </Link>
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
        title="Starte mit einem kostenlosen Beratungsgespräch."
        description="45 Minuten, unverbindlich. Wir lernen dich kennen, analysieren deine Ziele und zeigen dir, wie wir dich auf dem schnellsten Weg zu deiner Bestform begleiten können."
      />
    </>
  );
}
