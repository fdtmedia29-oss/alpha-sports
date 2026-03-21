import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import PhotoCarousel from "@/components/ui/PhotoCarousel";
import Script from "next/script";
import { Check, Flame, Heart, Dumbbell, Zap, ArrowRight, Shield } from "lucide-react";
import { certifications } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gruppenkurse",
  description:
    "Gruppenkurse bei Alpha Sports St. Gallen: HYROX, Indoor Bootcamp, Pilates & Strength. Max. 12 Teilnehmer. Kostenlose Probewoche. Krankenkassen anerkannt.",
};

const detailedClasses = [
  {
    id: "hyrox",
    name: "HYROX",
    subtitle: "Ein Ziel. Eine Challenge. Ein Team, das dich pusht!",
    icon: Zap,
    image: "/images/classes/hyrox-gruppenkurs.jpg",
    intro:
      "HYROX ist das weltweit erste Fitnessrennen, das funktionelles Training, Kraft und Ausdauer in einem einzigartigen Wettkampf vereint.",
    description:
      "In unserem HYROX-Gruppenkurs trainierst du gezielt für diese Herausforderung – mit Workouts, die dich stärker, schneller und leistungsfähiger machen. Egal, ob du auf einen Wettkampf hinarbeiten oder einfach deine Bestform erreichen willst, hier findest du die perfekte Mischung aus Teamspirit, intensiver Challenge und echter Weiterentwicklung.",
    highlights: [
      "Kraft, Ausdauer & funktionelle Performance",
      "Athletisches Ganzkörpertraining",
      "Strukturierte Vorbereitung auf den Wettkampf",
      "Motivation & Wettkampf-Spirit",
      "Einsteiger & Fortgeschrittene",
      "Muskelaufbau, Kraftentwicklung & Bodyforming",
    ],
    closing:
      "Kombiniere funktionelle Kraft mit Ausdauer und erlebe das ultimative Trainingserlebnis. Ob als Vorbereitung auf deinen nächsten HYROX-Wettkampf oder als neue Herausforderung im Alltag – unser HYROX-Gruppenkurs bringt dich an dein Limit und darüber hinaus. Effektiv, fordernd und motivierend – in einer Community, die dich pusht.",
    href: "/hyrox",
  },
  {
    id: "bootcamp",
    name: "Indoor Bootcamp",
    subtitle: "Der energiegeladene Gruppenkurs für jedes Fitness-Level",
    icon: Flame,
    image: "/images/classes/bootcamp.png",
    intro:
      "Du willst fit werden, Körperfett verbrennen und Muskeln aufbauen - aber nicht alleine? Dann ist unser Indoor Bootcamp in St. Gallen genau das Richtige für dich!",
    description:
      "In diesem hochintensiven Gruppenkurs erwarten dich funktionelle Übungen, motivierende Workouts und ein Team, das dich pusht - egal ob du Einsteiger/in oder Fortgeschrittene/r bist.",
    highlights: [
      "Kraft, Ausdauer & Beweglichkeit",
      "Fettverbrennung & Muskelaufbau",
      "Motivierende Gruppendynamik",
      "Funktionelles Training",
      "Musik, Energie & Spass",
    ],
    closing:
      "Ob du deinen Körper formen willst, fit für den Alltag sein oder deine Leistung im Sport steigern möchtest - unser Indoor Bootcamp Gruppenkurs bringt dich aufs nächste Level.",
  },
  {
    id: "pilates",
    name: "Pilates",
    subtitle: "Stärke deine Mitte & finde die Balance",
    icon: Heart,
    image: "/images/studio/studio-3.jpg",
    intro:
      "Du suchst nach effektivem, sanftem Training, das deinen Körper stärkt, deine Haltung verbessert und deine Beweglichkeit fördert? Dann ist unser Pilates Gruppenkurs in St. Gallen genau das Richtige für dich!",
    description:
      "Pilates ist ein ganzheitliches Körpertraining mit Fokus auf die Stärkung der Körpermitte (Core), eine bewusste Atmung und kontrollierte Bewegungen. Ideal für alle, die gezielt etwas für ihre Gesundheit, ihre Haltung und ihr Wohlbefinden tun wollen - unabhängig vom Fitnesslevel oder Alter.",
    highlights: [
      "Rumpfstabilität, Beweglichkeit & Haltung",
      "Bauch, Rücken & Beckenboden",
      "Prävention von Rückenschmerzen",
      "Kleingruppen-Setting",
      "Anfänger & Fortgeschrittene",
    ],
    closing:
      "Ob zur Ergänzung deines Krafttrainings, zur Verbesserung deiner Körperhaltung oder für ein bewussteres Körpergefühl - unser Pilates Gruppenkurs bringt dich in Einklang mit dir selbst.",
  },
  {
    id: "strength",
    name: "Strength",
    subtitle: "Dein Strength-Gruppenkurs für Muskelaufbau mit System & Technik",
    icon: Dumbbell,
    image: "/images/studio/studio-6.jpg",
    intro:
      "Du willst gezielt Muskeln aufbauen, stärker werden und dabei technisch sauber trainieren? Dann ist Strength der richtige Gruppenkurs in St. Gallen für dich.",
    description:
      "Hier steht nicht nur intensives Training im Vordergrund, sondern auch die perfekte Technik. Unser Kurs kombiniert fundiertes Hypertrophie-Training mit einem starken Fokus auf korrekte Übungsausführung, Progression und Trainingsqualität. So erzielst du sichtbare Resultate und bleibst langfristig verletzungsfrei.",
    highlights: [
      "Hypertrophie- & Krafttraining",
      "Präzises Technik-Coaching",
      "Progressiver Overload, Muskelspannung & gezielte Reize",
      "Lang- & Kurzhanteln, Eigengewicht",
      "Einsteiger & Fortgeschrittene",
      "Kleingruppen-Setting",
      "Muskelaufbau, Kraftentwicklung & Bodyforming",
    ],
    closing:
      "Egal ob dein Ziel Body Recomposition, mehr Leistung im Gym oder einfach ein definierter, starker Körper ist - Strength vereint Wissen, Technik & Intensität in einem Kurs.",
  },
];

export default function GruppenkursePage() {
  return (
    <>
      <PageHero
        badge="Gruppenkurse"
        title="Gemeinsam stärker."
        description="Bei dir steht Spass und Freude am Training im Vordergrund? Training in motivierender Gemeinschaft - mit individueller Betreuung in der Kleingruppe. Max. 12 Teilnehmer. Kostenlose Probewoche."
        ctaText="Jetzt Starten"
        ctaHref="#buchen"
        backgroundImage="/images/classes/hyrox-abklatschen.jpg"
      />

      {/* All classes */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-12">
            {detailedClasses.map((cls, index) => (
              <div
                key={cls.id}
                id={cls.id}
                className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-white transition-all hover:shadow-lg"
              >
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  <div className={`relative aspect-[4/3] overflow-hidden bg-surface lg:aspect-auto lg:min-h-[400px] ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={cls.image}
                      alt={cls.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col p-8 md:p-10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-light">
                        <cls.icon className="h-5 w-5 text-orange" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text">{cls.name}</h3>
                        {cls.subtitle && (
                          <p className="mt-0.5 text-sm font-medium text-orange">{cls.subtitle}</p>
                        )}
                      </div>
                    </div>
                    <p className="mt-4 leading-relaxed text-text-secondary">
                      {cls.intro}
                    </p>
                    <p className="mt-3 leading-relaxed text-text-secondary">
                      {cls.description}
                    </p>
                    {cls.highlights.length > 0 && (
                      <div className="mt-6 space-y-2">
                        {cls.highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2 text-sm text-text-secondary">
                            <Check className="h-3.5 w-3.5 shrink-0 text-orange" />
                            {h}
                          </div>
                        ))}
                      </div>
                    )}
                    {cls.closing && (
                      <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                        {cls.closing}
                      </p>
                    )}
                    <div className="mt-auto pt-6">
                      <Link
                        href={"href" in cls && cls.href ? cls.href : "#buchen"}
                        className="group inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange/90 hover:gap-3"
                      >
                        {"href" in cls && cls.href ? "Mehr erfahren" : "Jetzt Buchen"}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Probetraining */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange">
            Kostenlose Probewoche
          </span>
          <h2 className="mt-4 text-2xl font-bold text-text md:text-3xl">
            Kostenlose Probewoche.
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Egal welcher Kurs - deine erste Woche ist immer kostenlos und
            unverbindlich. Komm vorbei und probiere es aus.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              "Kostenlose Probewoche",
              "Kleine Gruppen (max. 12)",
              "Alle Level willkommen",
              "Krankenkassen anerkannt",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2"
              >
                <Check className="h-4 w-4 text-orange" />
                <span className="text-sm font-medium text-text">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="#buchen"
              className="group inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 text-base font-semibold text-white transition-all hover:bg-orange/90 hover:gap-3"
            >
              Kostenlose Probewoche starten
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <PhotoCarousel
            title="Gruppenkurse"
            images={[
              "/images/classes/hyrox-abklatschen.jpg",
              "/images/classes/hyrox-gruppenkurs.jpg",
              "/images/classes/bootcamp.png",
              "/images/classes/hyrox-ski-erg.jpg",
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

      {/* Eversports Booking */}
      <section id="buchen" className="scroll-mt-24 section-padding bg-bg-alt">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Jetzt buchen
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-text md:text-3xl">
              Gruppenkurs buchen.
            </h2>
            <p className="mt-3 text-text-secondary">
              Wähle deinen Kurs und buche direkt über Eversports.
            </p>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: `<div data-eversports-widget-id="4840c17a-c7eb-48bc-989d-f294ad5f104f"></div>`,
            }}
          />
          <Script
            src="https://widget-static.eversports.io/loader.js"
            strategy="afterInteractive"
            type="module"
          />
        </div>
      </section>

      <CTABanner
        title="Lust auf eine kostenlose Probewoche?"
        description="Wähle deinen Kurs und melde dich an. Einfach per WhatsApp oder über unser Kontaktformular."
      />
    </>
  );
}
