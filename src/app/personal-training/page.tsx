import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import PhotoCarousel from "@/components/ui/PhotoCarousel";
import InlineVideo from "@/components/ui/InlineVideo";
import Image from "next/image";
import {
  ArrowRight,
  Users,
  Activity,
  Target,
  ShieldCheck,
  TrendingUp,
  CalendarCheck,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personal Training",
  description:
    "Individuelles 1:1 Personal Training im privaten Studio in St. Gallen. Abnehmen, Muskelaufbau, Schmerzfreiheit — massgeschneiderte Trainings- und Ernährungsstrategien. Krankenkassen anerkannt. Kostenloses Beratungsgespräch.",
};

const schwerpunkte = [
  { icon: Users, text: "Individuelle Coachings" },
  { icon: Activity, text: "Umfangreiche Diagnostik" },
  { icon: Target, text: "Persönliche Trainingsplanung mit individueller Strategie" },
  { icon: ShieldCheck, text: "Korrekte Übungsausführung für maximale Effizienz ohne Verletzungen" },
  { icon: TrendingUp, text: "Spürbare Fortschritte und sichtbare Ergebnisse" },
  { icon: CalendarCheck, text: "Flexible Terminwahl" },
];


export default function PersonalTrainingPage() {
  return (
    <>
      <PageHero
        badge="Personal Training"
        title="Individuell & effektiv für deine Bestform."
        description="Bei Alpha Sports bekommst du keine Standardlösungen — sondern massgeschneiderte Trainings- und Ernährungsstrategien, die dich effizient und sicher zu deiner Bestform begleiten."
        ctaText="Kostenloses Beratungsgespräch"
        ctaHref="/kostenloses-beratungsgespraech"
        backgroundImage="/images/pt/lerchenfeld-73.jpg"
      />

      {/* Intro with video */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-orange">
                Dein Weg zur Bestform
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
                Keine Standardlösungen - sondern eine Strategie die funktioniert.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
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
            <div className="flex justify-center lg:col-span-2">
              <InlineVideo src="/videos/pt-coaching.mp4" />
            </div>
          </div>
        </div>
      </section>

      {/* Schwerpunkte */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Schwerpunkte
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
              Was dich erwartet.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {schwerpunkte.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-4 rounded-2xl border border-border bg-white p-6 transition-all hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-light">
                  <item.icon className="h-5 w-5 text-orange" />
                </div>
                <span className="font-medium text-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <Image
          src="/images/pt/kal00633.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/75" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-4xl">
            Bereit für den ersten Schritt?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/60">
            Vereinbare jetzt ein kostenloses Beratungsgespräch, in welchem wir eine
            Strategie zur Erreichung deiner Ziele ausarbeiten.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/kostenloses-beratungsgespraech"
              className="group inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 text-base font-semibold text-white transition-all hover:bg-orange/90 hover:gap-3"
            >
              Kostenloses Beratungsgespräch buchen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
              "/images/pt/pt-coach-lui-l-chelnd.png",
              "/images/pt/alpha-personal-32.jpg",
              "/images/pt/lerchenfeld-73.jpg",
              "/images/pt/alpha-personal-03.jpg",
              "/images/pt/alpha-personal-07.jpg",
              "/images/pt/alpha-personal-09.jpg",
              "/images/pt/alpha-personal-15.jpg",
              "/images/pt/alpha-personal-24.jpg",
              "/images/pt/alpha-personal-26.jpg",
              "/images/pt/kal00470.jpg",
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
