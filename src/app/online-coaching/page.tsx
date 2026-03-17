import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import CoachingTimeline from "@/components/sections/CoachingTimeline";
import Image from "next/image";
import {
  Check,
  Video,
  Smartphone,
  BarChart3,
  Utensils,
  Zap,
  Clock,
  MapPin,
  ArrowRight,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { certifications } from "@/lib/content";

export const metadata: Metadata = {
  title: "Online Coaching",
  description:
    "12-Wochen Online Coaching Programm von Alpha Sports. Individueller Trainings- & Ernährungsplan, persönliche Betreuung via App. Alpha Sports Shape & Shape Pro. Von überall trainieren.",
};

const problemPoints = [
  "Du hast ein Gym-Abo, aber keinen Plan der wirklich zu dir passt?",
  "Beruf, Familie, Termine — trotzdem willst du in Bestform kommen?",
  "Kein Studio in deiner Nähe oder einfach lieber von zuhause aus trainieren?",
  "Du trainierst regelmässig, aber ohne sichtbare Fortschritte und echte Veränderungen?",
  "Dir fehlt ein klarer Fahrplan, um deine Ziele wirklich Schritt für Schritt zu erreichen?",
  "Du brauchst jemanden, der dich motiviert, unterstützt und dir ehrliches Feedback gibt?",
  "Du willst deine Zeit im Training maximal effizient nutzen — ohne Umwege oder Rätselraten?",
];

const sixFeatures = [
  { icon: MapPin, text: "Flexibles Training von überall" },
  { icon: Clock, text: "Maximale Zeiteffizienz" },
  { icon: Utensils, text: "Individuelle Ernährungsstrategie" },
  { icon: BarChart3, text: "Fortschritte im Blick" },
  { icon: Video, text: "Support via App & Video" },
  { icon: Zap, text: "Top Coaching — ortsunabhängig" },
];

export default function OnlineCoachingPage() {
  return (
    <>
      <PageHero
        badge="Online Coaching"
        title="In 12 Wochen zu deiner Bestform."
        description="12-Wochen intensives 1:1 Online Coaching mit persönlicher Betreuung via App — Training, Ernährung und Lifestyle. Von überall."
        ctaText="Jetzt Starten"
        ctaHref="/kostenloses-beratungsgespraech"
        backgroundImage="/images/studio/studio-3.jpg"
      />

      {/* Problem section */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange">
                Kennst du das?
              </span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-text md:text-5xl">
                Online Coaching ist für dich, wenn...
              </h2>
            </div>
            <div className="space-y-4">
              {problemPoints.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-light">
                    <Check className="h-3.5 w-3.5 text-orange" />
                  </div>
                  <span className="text-sm text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6 Key Features */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Was dich erwartet
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-5xl">
              6 Komponenten für deinen Erfolg.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sixFeatures.map((c) => (
              <div
                key={c.text}
                className="flex items-center gap-4 rounded-2xl border border-border bg-white p-6 transition-all hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-light">
                  <c.icon className="h-5 w-5 text-orange" />
                </div>
                <span className="font-medium text-text">{c.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Timeline */}
      <CoachingTimeline />

      {/* Mid-page CTA */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <Image
          src="/images/studio/studio-5.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/75" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-4xl">
            Starte jetzt — werde die beste Version deiner selbst.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/60">
            Kostenloses Beratungsgespräch buchen. Wir zeigen dir, welches Programm am besten zu dir passt.
          </p>
          <div className="mt-8">
            <Link
              href="/kostenloses-beratungsgespraech"
              className="group inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 text-base font-semibold text-white transition-all hover:bg-orange/90 hover:gap-3"
            >
              Jetzt Starten
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* App section with screenshots */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-light">
                <Smartphone className="h-5 w-5 text-orange" />
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-text md:text-4xl">
                Alles in einer App.
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                Progress-Fotos, Körpermasse (Taille, Hüfte, Brust, Arme, Beine),
                Gewicht, Chat mit deinem Coach — alles an einem Ort. Einfach,
                übersichtlich, motivierend. Regelmässige Dokumentation und
                Fortschrittsanalyse.
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
                  src="/images/app/trainingsplan-uebersicht.png"
                  alt="Trainingsplan App"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Krankenkassen */}
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

      <CTABanner
        title="Starte jetzt — werde die beste Version deiner selbst."
        description="Kostenloses Beratungsgespräch buchen. Wir zeigen dir, welches Programm am besten zu dir passt."
      />
    </>
  );
}
