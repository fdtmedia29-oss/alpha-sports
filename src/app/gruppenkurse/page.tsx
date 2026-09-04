import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import PhotoCarousel from "@/components/ui/PhotoCarousel";
import GruppenkurseCards from "@/components/sections/GruppenkurseCards";
import BuchungsLink from "@/components/ui/BuchungsLink";
import PageFAQ from "@/components/sections/PageFAQ";
import { Check, ArrowRight, Shield } from "lucide-react";
import { certifications, faqSections } from "@/lib/content";
import { gruppenkurseBuchung } from "@/lib/booking";

export const metadata: Metadata = {
  alternates: { canonical: "/gruppenkurse" },
  title: "Gruppenkurse",
  description:
    "Gruppenkurse bei Alpha Sports St. Gallen: HYROX, Indoor Bootcamp & HYROX Strength. Max. 12 Teilnehmer. Kostenlose Probewoche. Krankenkassen anerkannt.",
};

const detailedClasses = [
  {
    id: "hyrox",
    name: "HYROX",
    subtitle: "Ein Ziel. Eine Challenge. Ein Team, das dich pusht!",
    icon: "Zap",
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
    icon: "Flame",
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
    // Umbenannt am 04.09.2026 auf Luigis Wunsch (vorher "Strength").
    // Die id bleibt "strength", damit /gruppenkurse#strength und der
    // Navigations-Eintrag weiterhin greifen.
    id: "strength",
    name: "HYROX Strength",
    subtitle:
      "Athletischer Körperaufbau für mehr Kraft und Race Performance",
    icon: "Dumbbell",
    image: "/images/studio/studio-6.jpg",
    intro:
      "Du möchtest einen starken, definierten und leistungsfähigen Körper aufbauen? Dann ist HYROX Strength der richtige Gruppenkurs für dich.",
    description:
      "Im Mittelpunkt dieses Kurses steht der gezielte Aufbau eines athletischen Körpers. Durch strukturiertes Kraft- und Hypertrophietraining entwickelst du Muskulatur, verbesserst deine Körperkomposition und formst einen definierten Körper. Dabei trainierst du nicht nur für die Optik, sondern baust gleichzeitig Kraft, Stabilität und Belastbarkeit auf. Genau diese Kombination wirkt sich positiv auf deine Leistung im HYROX Race aus: mehr funktionelle Muskelmasse und eine gut entwickelte Kraftbasis helfen dir dabei, Disziplinen wie Sled Push, Sled Pull, Lunges und Wall Balls effizienter zu bewältigen. Ein HYROX Race muss jedoch nicht dein primäres Ziel sein. Der Kurs richtet sich ebenso an alle, die ihren Körper athletisch formen, Muskulatur aufbauen und sich stärker fühlen möchten. Bei HYROX Strength geht es deshalb nicht darum, einfach nur möglichst hart zu trainieren. Entscheidend sind eine saubere Übungsausführung, gezielte Trainingsreize und eine kontinuierliche Steigerung deiner Leistung. Im Kleingruppen-Setting erhältst du persönliches Coaching und trainierst strukturiert auf dein individuelles Ziel hin.",
    highlights: [
      "Gezielter Aufbau eines starken und athletischen Körpers",
      "Strukturiertes Hypertrophie- und Krafttraining",
      "Unterstützung bei Muskelaufbau und Body Recomposition",
      "Mehr Kraft, Stabilität und Belastbarkeit",
      "Eine starke körperliche Grundlage für dein HYROX Race",
      "Präzises Technik-Coaching",
      "Progressive Steigerung von Gewicht und Belastung",
      "Training mit Langhanteln, Kurzhanteln und dem eigenen Körpergewicht",
      "Persönliche Betreuung in der Kleingruppe",
      "Geeignet für Einsteiger und Fortgeschrittene",
    ],
    closing:
      "Wie alle unsere Gruppenkurse kannst du auch HYROX Strength mit unserem Ernährungs- und Leistungsdiagnostik-Package ergänzen. Mithilfe gezielter Analysen machen wir deine Ausgangslage und deine Entwicklung messbar, sodass Training und Ernährung noch genauer auf dein persönliches Ziel abgestimmt werden können. So erhältst du ein ganzheitliches Konzept, bei dem Training, Ernährung und Leistungsdiagnostik sinnvoll ineinandergreifen. HYROX Strength verbindet Körperaufbau und Leistungsfähigkeit: Dein Körper soll nicht nur athletisch aussehen, er soll auch athletisch funktionieren.",
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
        ctaHref={gruppenkurseBuchung}
        backgroundImage="/images/classes/hyrox-abklatschen.jpg"
      />

      {/* All classes */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <GruppenkurseCards classes={detailedClasses} />
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
            <BuchungsLink
              href={gruppenkurseBuchung}
              className="group inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 text-base font-semibold text-white transition-all hover:bg-orange/90 hover:gap-3"
            >
              Kostenlose Probewoche starten
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </BuchungsLink>
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
                <span className="text-muted">— 70+ Bewertungen</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <PageFAQ
        idPrefix="gk-faq"
        title="Häufige Fragen zu den Gruppenkursen."
        items={[
          ...faqSections.find((s) => s.category === "Gruppenkurse")!.items,
          ...faqSections.find((s) => s.category === "Vergleich & Entscheidungen")!.items,
        ]}
      />

      <CTABanner
        title="Lust auf eine kostenlose Probewoche?"
        description="Wähle deinen Kurs und melde dich an. Einfach per WhatsApp oder über unser Kontaktformular."
      />
    </>
  );
}
