import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { Clock, User, Check } from "lucide-react";
import { groupClasses } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gruppenkurse",
  description:
    "Gruppenkurse bei Alpha Sports St. Gallen: Bootcamp, HIIT Boxing, Yoga, Pilates, Hypertrophic, Stretching & Mobility. Probetraining kostenlos.",
};

const pregnancyPrograms = [
  {
    title: "Schwangerschaftskurs",
    trainer: "Isabell Tatzl",
    schedule: "Sonntags 09:00–10:00",
    description:
      "Sanfte Kraft- und Beweglichkeitsübungen, Beckenboden-Training und Entspannungstechniken. Max. 6 Teilnehmerinnen.",
    price: "CHF 180 (6 Wochen)",
  },
  {
    title: "Schwangerschaftscoaching 1:1",
    trainer: "Isabell Tatzl",
    schedule: "Individuell",
    description:
      "Personalisierte Sessions angepasst an deine Schwangerschaftsphase. Krafttraining, Schmerzlinderung, Geburtsvorbereitung, Stressabbau.",
    price: "Auf Anfrage",
  },
];

export default function GruppenkursePage() {
  return (
    <>
      <PageHero
        badge="Gruppenkurse"
        title="Gemeinsam stärker."
        description="Probetraining ist bei allen Kursen kostenlos. Kleine Gruppen, professionelle Anleitung, maximale Motivation."
      />

      {/* All classes */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {groupClasses.map((cls) => (
              <div
                key={cls.name}
                id={cls.name.toLowerCase().replace(/\s+/g, "-")}
                className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-white transition-all hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <Image
                    src={cls.image}
                    alt={cls.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text">{cls.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {cls.description}
                  </p>
                  <div className="mt-4 space-y-2">
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
            Probetraining kostenlos. Immer.
          </h2>
          <p className="mt-4 text-text-secondary">
            Egal welcher Kurs — dein erstes Training ist immer kostenlos und
            unverbindlich. Komm vorbei und probiere es aus.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {["Kostenlos testen", "Kleine Gruppen", "Alle Level willkommen"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full bg-bg-alt px-4 py-2"
                >
                  <Check className="h-4 w-4 text-orange" />
                  <span className="text-sm font-medium text-text">{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <CTABanner
        title="Lust auf ein kostenloses Probetraining?"
        description="Wähle deinen Kurs und melde dich an. Einfach per WhatsApp oder über unser Kontaktformular."
      />
    </>
  );
}
