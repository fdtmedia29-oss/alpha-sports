import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import PhotoCarousel from "@/components/ui/PhotoCarousel";
import Image from "next/image";
import { Leaf, Utensils, Heart, Smartphone, Zap, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";
import { certifications } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ernährungsberatung",
  description:
    "Professionelle Ernährungsberatung in St. Gallen. Massgeschneiderte Ernährungsplaene für Abnehmen, Muskelaufbau und Wohlbefinden. Qualitop zertifiziert.",
};

const keyBenefits = [
  {
    icon: Heart,
    title: "Gesund abnehmen & wohlfühlen",
    text: "Nachhaltige Ernährungsstrategien, die in deinen Alltag passen. Kein Verzicht, keine Crash-Diäten — sondern ein klarer Plan für dein Wohlfühlkörper.",
  },
  {
    icon: Utensils,
    title: "Messen statt raten",
    text: "Wir erstellen dir eine individuelle Ernährungsstrategie basierend auf deinem Grundumsatz, deiner Körperzusammensetzung und deinen Leistungsparametern — um zu garantieren, dass wir dich auf schnellstem Weg zu deinem Ziel begleiten.",
  },
  {
    icon: Zap,
    title: "Stoffwechsel-Optimierung",
    text: "Mit unserer Stoffwechselanalyse optimieren wir deine Ernährung für maximale Energie und Effizienz.",
  },
  {
    icon: Leaf,
    title: "Mehr Energie",
    text: "Neues Körperbewusstsein, mehr Energie, besserer Schlaf, weniger Stress — gute Ernährung verändert alles. Erreiche deine körperliche Bestform.",
  },
];

export default function ErnährungsberatungPage() {
  return (
    <>
      <PageHero
        badge="Ernährungsberatung"
        title="Dein Schlüssel zur nachhaltigen Veränderung."
        description="Entdecke, wie eine gezielte Ernährungsstrategie dein Leben verbessert."
        ctaText="Beratung buchen"
        ctaHref="/kostenloses-beratungsgespraech"
        backgroundImage="/images/ernaehrung/food-1898194-1280.jpg"
        backgroundImageDesktop="/images/ernaehrung/food-3654199-1280.jpg"
      />

      {/* Intro with image */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-orange">
                Ernährungsberatung
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
                Die richtige Ernährung verändert alles.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                Entdecke, wie eine gezielte Ernährungsstrategie dein Leben
                verbessert. Mit unserer individuellen Beratung optimierst du deinen
                Stoffwechsel, erreichst deine Fitnessziele und findest deine perfekte
                Balance für Gesundheit und dein Wohlbefinden. Egal, ob Fettabbau,
                Muskelaufbau oder einfach mehr Energie — wir begleiten dich Schritt
                für Schritt.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/ernaehrung/food-3654199-1280.jpg"
                  alt="Gesunde Ernährung"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Unser Ansatz
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-5xl">
              Was dich erwartet.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {keyBenefits.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-light">
                  <f.icon className="h-5 w-5 text-orange" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-text">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="relative overflow-hidden py-20 md:py-24 bg-dark">
        <Image
          src="/images/ernaehrung/design-ohne-titel.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-dark/75" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-4xl">
            Bereit für eine Veränderung?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/60">
            Vereinbare ein kostenloses Beratungsgespräch und erfahre, welche
            Ernährungsstrategie am besten zu dir passt.
          </p>
          <div className="mt-8">
            <Link
              href="/kostenloses-beratungsgespraech"
              className="group inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 text-base font-semibold text-white transition-all hover:bg-orange/90 hover:gap-3"
            >
              Kostenloses Beratungsgespräch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
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

      {/* App tracking with screenshots */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-light">
                <Smartphone className="h-5 w-5 text-orange" />
              </div>
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-text md:text-3xl">
                Ergebnisse direkt in der App.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                Die Alpha Sports Tracking-App liefert dir deine Daten, Ernährungspläne und Trainingsempfehlungen, welche individuell auf dich angepasst sind.
              </p>
            </div>
            <div className="flex items-end justify-center gap-4">
              <div className="relative h-[280px] w-[140px] overflow-hidden rounded-2xl shadow-xl sm:h-[340px] sm:w-[170px]">
                <Image
                  src="/images/app/tracking-app-uebersicht.png"
                  alt="Tracking App"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="relative -mb-4 h-[320px] w-[160px] overflow-hidden rounded-2xl shadow-xl sm:h-[380px] sm:w-[190px]">
                <Image
                  src="/images/app/ernaehrungsplan-uebersicht.png"
                  alt="Ernährungsplan App"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <PhotoCarousel
            title="Ernährungsberatung"
            images={[
              "/images/ernaehrung/food-1898194-1280.jpg",
              "/images/ernaehrung/food-3654199-1280.jpg",
              "/images/ernaehrung/design-ohne-titel.jpg",
            ]}
          />
        </div>
      </section>

      <CTABanner
        title="Bereit für den Wandel?"
        description="Vereinbare jetzt ein kostenloses Beratungsgespräch und erfahre, wie die richtige Ernährung dein Leben verändert."
      />
    </>
  );
}
