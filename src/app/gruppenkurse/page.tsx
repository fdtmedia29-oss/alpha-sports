import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import PhotoCarousel from "@/components/ui/PhotoCarousel";
import { Clock, User, Check, Dumbbell, Flame, Heart, Zap, StretchHorizontal, Baby } from "lucide-react";

export const metadata: Metadata = {
  title: "Gruppenkurse",
  description:
    "Gruppenkurse bei Alpha Sports St. Gallen: Bootcamp, HIIT Boxing, Hypertrophic, Yoga, Pilates, Stretching & Mobility, Schwangerschaftskurs. Max. 8 Teilnehmer. Probetraining kostenlos.",
};

const detailedClasses = [
  {
    id: "bootcamp",
    name: "Bootcamp",
    trainer: "Nicole Walser",
    schedule: "Mo 18:30 & Fr 17:30",
    icon: Flame,
    image: "/images/classes/bootcamp.png",
    shortDescription:
      "Der energiegeladene Gruppenkurs fuer jedes Fitness-Level.",
    description:
      "Du willst fit werden, Koerperfett verbrennen und Muskeln aufbauen — aber nicht alleine? Unser Bootcamp ist ein hochintensives Gruppentraining mit abwechslungsreichen Uebungen. Kraft-Ausdauer, Herz-Kreislauf-Training, Fettverbrennung und Muskelaufbau stehen im Fokus. Der Nachbrenneffekt haelt bis zu 72 Stunden an — dein Stoffwechsel bleibt angekurbelt, Sauerstoffaufnahme verbessert und Muskeln werden aufgebaut.",
    highlights: [
      "Kraft, Ausdauer & Beweglichkeit",
      "Fettverbrennung & Muskelaufbau",
      "Motivierende Gruppendynamik",
      "Funktionelles Training",
      "Musik, Energie & Spass",
    ],
  },
  {
    id: "hypertrophic",
    name: "Hypertrophic",
    trainer: "Team Alpha Sports",
    schedule: "Mi 18:00–19:00",
    icon: Dumbbell,
    image: "/images/studio/studio-6.jpg",
    shortDescription:
      "Fundiertes Hypertrophie-Training mit Fokus auf korrekte Technik.",
    description:
      "Evidenzbasiertes Hypertrophie-Training in der Kleingruppe. Progressive Ueberlastung, Muskelspannung und gezielter Reiz fuer maximalen Muskelaufbau. Hanteln, Langhanteln und Bodyweight-Uebungen — mit praezisem Technik-Coaching bei allen Grunduebungen. Ideal fuer Muskelwachstum, bessere Gym-Performance oder Body Recomposition.",
    highlights: [
      "Progressive Ueberlastung",
      "Technik-Coaching bei Grunduebungen",
      "Hanteln, Langhantel & Bodyweight",
      "Muskelaufbau & Body Recomposition",
      "Anfaenger & Fortgeschrittene",
    ],
  },
  {
    id: "hiit-boxing",
    name: "HIIT Boxing",
    trainer: "Luigi Lieberherr",
    schedule: "Do 18:30–19:30",
    icon: Zap,
    image: "/images/studio/studio-7.jpg",
    shortDescription:
      "Fusion aus Thaiboxen (Muay Thai) und HIIT-Training.",
    description:
      "Steigere deine Power, dein Selbstvertrauen und dein Selbstbewusstsein mit unserer Fusion aus zwei Welten. Wir kombinieren das Beste aus Thaiboxen (Muay Thai) und HIIT Training — Kicks, Schlaege, Knie und Ellbogen mit hochintensiven Intervallen. Schnelle Uebungswechsel und kurze Pausen kurbeln deinen Stoffwechsel an. Kalorien werden noch lange nach dem Training verbrannt.",
    highlights: [
      "Thaibox-Elemente: Kicks, Schlaege, Knie, Ellbogen",
      "Selbstverteidigung, Koordination & Gleichgewicht",
      "Ganzkoerper-Workout aller Muskelgruppen",
      "Schnelligkeit, Reaktionsfaehigkeit & Core-Stabilitaet",
      "Gemeinschaftsgefuehl & gegenseitige Motivation",
    ],
  },
  {
    id: "pilates",
    name: "Pilates",
    trainer: "Julia Lau",
    schedule: "So 10:00–11:00",
    icon: Heart,
    image: "/images/studio/studio-3.jpg",
    shortDescription:
      "Staerke deine Mitte und finde die Balance.",
    description:
      "Umfassendes Koerpertraining mit Fokus auf Core-Stabilitaet, bewusste Atmung und kontrollierte Bewegungen. Bauch-, Ruecken- und Beckenbodentraining, Rueckenschmerz-Praevention und verbesserte Koerperhaltung. Sanft aber effektiv — fuer alle Fitness-Levels und Altersgruppen. Ideale Ergaenzung zum Krafttraining.",
    highlights: [
      "Core-Stabilitaet & Mobilitaet",
      "Koerperhaltung verbessern",
      "Bauch-, Ruecken- & Beckenbodentraining",
      "Rueckenschmerz-Praevention",
      "Fuer alle Levels & Altersgruppen",
    ],
  },
  {
    id: "yoga",
    name: "Yoga",
    trainer: "David Rogers",
    schedule: "Mi 19:30–20:30",
    icon: Heart,
    image: "/images/studio/studio-4.jpg",
    shortDescription:
      "Koerper, Geist und Seele in Einklang bringen.",
    description:
      "Ganzheitliches Training fuer Koerper, Geist und Seele. Gezielte Atemtechniken, fliessende Bewegungen und achtsame Praxis foerdern koerperliches Wohlbefinden und innere Balance. Rueckenmuskulatur staerken, Koerperhaltung verbessern, Flexibilitaet und Mobilitaet steigern. Stressreduktion und innere Ruhe finden.",
    highlights: [
      "Ganzheitliches Training",
      "Atemtechniken & fliessende Bewegungen",
      "Rueckenmuskulatur staerken",
      "Stressreduktion & innere Ruhe",
      "Anfaenger & Fortgeschrittene",
    ],
  },
  {
    id: "stretching",
    name: "Stretching & Mobility",
    trainer: "David Rogers",
    schedule: "So 11:30–12:30",
    icon: StretchHorizontal,
    image: "/images/studio/studio-5.jpg",
    shortDescription:
      "Flexibilitaet und Beweglichkeit verbessern.",
    description:
      "Dynamische und statische Dehnuebungen, die dir helfen, deine Beweglichkeit zu steigern und Flexibilitaet zu verbessern. Gelenke mobilisieren, Muskulatur entspannen und Verspannungen loesen. Professionell und abwechslungsreich gestaltet — hilft, Bewegungsfreiheit zu verbessern, Verletzungsrisiko zu verringern und sportliche Leistung zu steigern.",
    highlights: [
      "Erhoehte Flexibilitaet",
      "Verbesserte Koerperhaltung",
      "Reduziertes Verletzungsrisiko",
      "Bessere Bewegungsfreiheit",
      "Ideale Ergaenzung zum Training",
    ],
  },
];

const pregnancyPrograms = [
  {
    title: "Schwangerschaftskurs",
    trainer: "Isabell Tatzl",
    schedule: "Sonntags 09:00–10:00",
    description:
      "Sanfte Kraft- und Beweglichkeitsuebungen, die die Ausdauer foerdern. Beckenbodentraining fuer die Geburtsvorbereitung. Uebungen zur Entspannung und Atemtechniken. Geschuetzter Raum zum Austausch mit anderen werdenden Muettern. Max. 6 Teilnehmerinnen.",
    price: "CHF 180 (6 Wochen)",
  },
  {
    title: "Schwangerschaftscoaching 1:1",
    trainer: "Isabell Tatzl",
    schedule: "Individuell",
    description:
      "Personalisierte Sessions angepasst an deine Schwangerschaftsphase und dein Fitness-Level. Gezielte Staerkung durch sanfte Uebungen, Schmerzlinderung (z.B. Rueckenschmerzen), Beckenbodentraining, Stressabbau und optimale Geburtsvorbereitung. Dein Wohlbefinden und das deines Babys stehen an erster Stelle.",
    price: "CHF 150 / Session",
  },
];

export default function GruppenkursePage() {
  return (
    <>
      <PageHero
        badge="Gruppenkurse"
        title="Gemeinsam staerker."
        description="Training in motivierender Gemeinschaft — mit Spass, Verletzungspraevention und individueller Betreuung in der Kleingruppe. Max. 8 Teilnehmer. Probetraining immer kostenlos."
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
                  <div className={`relative aspect-[4/3] overflow-hidden bg-surface lg:aspect-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={cls.image}
                      alt={cls.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-light">
                        <cls.icon className="h-5 w-5 text-orange" />
                      </div>
                      <h3 className="text-2xl font-bold text-text">{cls.name}</h3>
                    </div>
                    <p className="mt-4 leading-relaxed text-text-secondary">
                      {cls.description}
                    </p>
                    <div className="mt-6 space-y-2">
                      {cls.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-sm text-text-secondary">
                          <Check className="h-3.5 w-3.5 shrink-0 text-orange" />
                          {h}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted">
                        <Clock className="h-4 w-4" />
                        {cls.schedule}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted">
                        <User className="h-4 w-4" />
                        {cls.trainer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pregnancy programs */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Schwangerschaft
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
              Gesund und voller Energie durch die Schwangerschaft.
            </h2>
            <p className="mt-4 text-text-secondary">
              Speziell ausgebildete Trainerin, sicheres und individuell angepasstes
              Training, verbesserte koerperliche und mentale Fitness, optimale
              Geburtsvorbereitung.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {pregnancyPrograms.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-white p-8"
              >
                <h3 className="text-lg font-bold text-text">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {p.description}
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Clock className="h-4 w-4" />
                    {p.schedule}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <User className="h-4 w-4" />
                    {p.trainer}
                  </div>
                </div>
                <div className="mt-4 inline-block rounded-full bg-orange-light px-4 py-1.5 text-sm font-semibold text-orange">
                  {p.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-text">
            Schnupperstunde kostenlos. Immer.
          </h2>
          <p className="mt-4 text-text-secondary">
            Egal welcher Kurs — deine erste Schnupperstunde ist immer kostenlos und
            unverbindlich. Komm vorbei und probiere es aus.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              "Kostenlos testen",
              "Kleine Gruppen (max. 8)",
              "Alle Level willkommen",
              "Krankenkassen anerkannt",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full bg-bg-alt px-4 py-2"
              >
                <Check className="h-4 w-4 text-orange" />
                <span className="text-sm font-medium text-text">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-bg-alt p-6 text-left">
            <h3 className="font-bold text-text">Preise Gruppenkurse</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { name: "Schnupperstunde", price: "Kostenlos" },
                { name: "Einzeleintritt", price: "CHF 30" },
                { name: "12er Karte", price: "CHF 324 (CHF 27/Kurs)" },
                { name: "24er Karte", price: "CHF 600 (CHF 25/Kurs)" },
                { name: "36er Karte", price: "CHF 864 (CHF 24/Kurs)" },
                { name: "48er Karte", price: "CHF 1'104 (CHF 23/Kurs)" },
              ].map((p) => (
                <div key={p.name} className="flex justify-between text-sm">
                  <span className="text-text-secondary">{p.name}</span>
                  <span className="font-semibold text-text">{p.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <PhotoCarousel
            title="Gruppenkurse"
            images={[
              "/images/classes/hyrox-gruppenkurs.jpg",
              "/images/pt/alpha-personal-07.jpg",
              "/images/pt/alpha-personal-15.jpg",
            ]}
          />
        </div>
      </section>

      <CTABanner
        title="Lust auf ein kostenloses Probetraining?"
        description="Waehle deinen Kurs und melde dich an. Einfach per WhatsApp oder ueber unser Kontaktformular."
      />
    </>
  );
}
