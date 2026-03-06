import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { Check, Dumbbell, Heart, Target, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Training",
  description:
    "Individuelles 1:1 Personal Training im privaten Studio in St. Gallen. Abnehmen, Muskelaufbau, Schmerzfreiheit. Krankenkassen anerkannt. Kostenloses Beratungsgespräch.",
};

const benefits = [
  {
    icon: Target,
    title: "Individuelle Strategie",
    text: "Trainingsplan basierend auf deiner InBody-Analyse und deinen persönlichen Zielen — ob Abnehmen, Muskelaufbau oder Schmerzfreiheit.",
  },
  {
    icon: Dumbbell,
    title: "Korrekte Ausführung",
    text: "Jede Übung wird kontrolliert und korrigiert. Maximale Effizienz ohne Verletzungsrisiko.",
  },
  {
    icon: Heart,
    title: "Privates Studio",
    text: "Max. 2 Personen gleichzeitig — volle Aufmerksamkeit, keine Ablenkung, familiäre Atmosphäre.",
  },
  {
    icon: Clock,
    title: "Flexible Termine",
    text: "Auch abends und am Wochenende. Dein Training passt sich deinem Leben an, nicht umgekehrt.",
  },
  {
    icon: Shield,
    title: "Krankenkassen anerkannt",
    text: "Qualitop, EMR und SwissActive zertifiziert — ein Teil der Kosten kann von deiner Krankenkasse übernommen werden.",
  },
];

const includes = [
  "Individueller Trainingsplan",
  "Leistungsdiagnostik",
  "Persönliche Trainingsplanung",
  "Korrekte Übungsausführung",
  "Spürbare Fortschritte",
  "Flexible Terminwahl",
  "Protein Shake pro Session",
  "Sportgetränk & Handtuch",
];

export default function PersonalTrainingPage() {
  return (
    <>
      <PageHero
        badge="Personal Training"
        title="Dein Weg zur Bestform."
        description="Individuelle Betreuung für schnelle und nachhaltige Ergebnisse. Kein Standardprogramm — sondern ein Plan, der zu dir passt."
      />

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Warum Personal Training
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-5xl">
              Training, das wirklich funktioniert.
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Bei Alpha Sports bekommst du keine Standardlösung. Wir analysieren
              deinen Körper, verstehen deine Ziele und entwickeln eine Strategie,
              die in deinen Alltag passt.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-light">
                  <b.icon className="h-5 w-5 text-orange" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-text">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
                Inklusive
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
                Was dich erwartet.
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                Jedes Personal Training bei Alpha Sports beinhaltet mehr als nur
                eine Stunde im Studio.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {includes.map((item) => (
                <div key={item} className="flex items-center gap-3">
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

      {/* Target keywords section for SEO */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
              Für wen ist Personal Training?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              Ob du <strong>abnehmen</strong> möchtest,{" "}
              <strong>Muskeln aufbauen</strong> willst, dich endlich wieder{" "}
              <strong>wohlfühlen</strong> willst oder dein{" "}
              <strong>Bauchfett reduzieren</strong> möchtest — bei Alpha Sports
              bist du richtig. Unser Personal Training in St. Gallen ist für
              alle, die mehr wollen als ein normales Fitnessstudio.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Starte mit einem kostenlosen Beratungsgespräch."
        description="30 Minuten, unverbindlich. Wir lernen dich kennen, analysieren deine Ziele und zeigen dir, wie wir dich begleiten können."
      />
    </>
  );
}
