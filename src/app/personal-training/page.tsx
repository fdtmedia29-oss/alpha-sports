import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
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
    "Individuelles 1:1 Personal Training im privaten Studio in St. Gallen. Abnehmen, Muskelaufbau, Schmerzfreiheit — massgeschneiderte Trainings- und Ernaehrungsstrategien. Krankenkassen anerkannt. Kostenloses Beratungsgespraech.",
};

const benefits = [
  {
    icon: Target,
    title: "Individuelle Strategie",
    text: "Deine Ziele und deine persoenliche Ausgangslage stehen bei uns an erster Stelle. Dank modernster Analysen lernen wir deinen Koerper genau kennen und entwickeln daraus eine zielgerichtete Trainingsstrategie.",
  },
  {
    icon: Dumbbell,
    title: "Korrekte Ausfuehrung",
    text: "Jede Uebung wird kontrolliert und korrigiert — fuer maximale Effizienz ohne Verletzungsrisiko. Du lernst die richtige Technik fuer nachhaltige Fortschritte.",
  },
  {
    icon: Heart,
    title: "Privates Studio",
    text: "In einer familiaeren und privaten Atmosphaere begleiten wir dich auf deinem Weg. Max. 2 Personen gleichzeitig — volle Aufmerksamkeit, keine Ablenkung.",
  },
  {
    icon: Clock,
    title: "Flexible Termine",
    text: "Auch abends und am Wochenende. Dein Training passt sich deinem Leben an, nicht umgekehrt.",
  },
  {
    icon: Shield,
    title: "Krankenkassen anerkannt",
    text: "Qualitop, EMR und SwissActive zertifiziert — ein Teil der Kosten kann von deiner Krankenkasse uebernommen werden.",
  },
  {
    icon: Zap,
    title: "Sichtbare Ergebnisse",
    text: "Du wirst nicht nur Fortschritte sehen, sondern dich staerker, energiegeladener und ausgeglichener fuehlen. Schnell und nachhaltig.",
  },
];

const includes = [
  "Individuelle Coachings",
  "Leistungsdiagnostik",
  "Persoenliche Trainingsplanung mit individueller Strategie",
  "Korrekte Uebungsausfuehrung fuer maximale Effizienz",
  "Spuerbare Fortschritte und sichtbare Ergebnisse",
  "Flexible Terminwahl (auch am Wochenende)",
  "Protein Shake pro Session",
  "Sportgetraenk & Handtuch-Service",
];

const subServices = [
  {
    icon: Users,
    title: "Partner-Training (1:2)",
    description:
      "Teile deine Fitnessreise mit einem Partner und erreicht eure Ziele gemeinsam. Individuelle Betreuung fuer beide — gegenseitige Motivation, effektive Paaruebungen und gemeinsamer Erfolg. CHF 90 pro Person.",
    href: "#partner-training",
  },
  {
    icon: Baby,
    title: "Schwangerschaftscoaching",
    description:
      "Aktiv und gesund durch die Schwangerschaft. Individuell abgestimmte Trainingseinheiten, Beckenbodentraining, Geburtsvorbereitung und Stressabbau. Ob Anfaengerin oder erfahrene Sportlerin — fuer jede Frau geeignet.",
    href: "#schwangerschaft",
  },
  {
    icon: Apple,
    title: "Ernaehrungscoaching",
    description:
      "Muskeln effizienter aufbauen, Koerperfett reduzieren und gesund essen trotz vollem Alltag. Messbasierte Strategien statt Schaetzungen — mit individuellen Rezepten und Tracking-App.",
    href: "/ernaehrungsberatung",
  },
];

const goals = [
  {
    icon: Scale,
    title: "Gewicht reduzieren",
    text: "Koerperliche Aktivitaet veraendert die Psyche und normalisiert den Hirnbereich, der das Essverhalten steuert. Mehr Muskelgewebe erhoeht deinen taeglichen Grundumsatz — du darfst mehr essen und nimmst trotzdem ab.",
  },
  {
    icon: Dumbbell,
    title: "Muskeln aufbauen",
    text: "Schnelles, aber gesundes Aufbauen der Muskelmasse. Wir kombinieren individuelle Beratung mit Personal Training, um deine Ziele ohne Umwege zu erreichen — mit Freude und ohne Verletzungsrisiko.",
  },
  {
    icon: Bone,
    title: "Schmerzfrei werden",
    text: "Regelmaessiges, bewusstes Training traegt zur erfolgreichen Schmerzlinderung bei. Sport setzt natuerliche Glueckshormone frei, aehnlich wie Schmerzmittel — nur nachhaltig und ohne Nebenwirkungen.",
  },
  {
    icon: Trophy,
    title: "Sportartspezifisch trainieren",
    text: "Athletic Training fuer maximale Schnelligkeit, Leistung und Kraft. Wir zerlegen sportartspezifische Bewegungen in Einzelkomponenten und trainieren Kraft, Beweglichkeit, Schnelligkeit und Reaktionsvermoegen gezielt.",
  },
  {
    icon: Baby,
    title: "Gesunde Schwangerschaft",
    text: "Koerperliche Staerke fuer dich und dein Baby. Gezieltes Training lindert Beschwerden wie Rueckenschmerzen, staerkt den Beckenboden und bereitet dich optimal auf die Geburt vor.",
  },
];

export default function PersonalTrainingPage() {
  return (
    <>
      <PageHero
        badge="Personal Training"
        title="Individuell & effektiv fuer deine Bestform."
        description="Bei Alpha Sports bekommst du keine Standardloesungen — sondern massgeschneiderte Trainings- und Ernaehrungsstrategien. Individuelle Betreuung fuer schnelle und nachhaltige Ergebnisse."
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
              Deine Ziele und deine persoenliche Ausgangslage stehen bei uns an
              erster Stelle. Dank modernster Analysen lernen wir deinen Koerper
              genau kennen und entwickeln daraus eine zielgerichtete
              Trainingsstrategie. So erreichst du sichtbare Ergebnisse — schnell
              und nachhaltig.
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
                eine Stunde im Studio. In einer familiaeren und privaten
                Atmosphaere begleiten wir dich auf deinem Weg zur Bestform.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {includes.map((item) => (
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

      {/* Sub-services */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Mehr als 1:1
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
              Passend fuer jede Lebenssituation.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {subServices.map((s) => (
              <div
                key={s.title}
                id={s.href.startsWith("#") ? s.href.slice(1) : undefined}
                className="scroll-mt-24 rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-light">
                  <s.icon className="h-5 w-5 text-orange" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-text">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {s.description}
                </p>
                {!s.href.startsWith("#") && (
                  <Link
                    href={s.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange hover:underline"
                  >
                    Mehr erfahren <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Training Detail */}
      <section id="partner-training" className="scroll-mt-24 section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange">
                Partner-Training
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
                Gemeinsam trainieren. Gemeinsam wachsen.
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                Teile deine Fitnessreise mit einem Partner und erreicht eure Ziele
                gemeinsam. Wir stellen sicher, dass keiner von euch zu kurz kommt
                — individuell angepasste Uebungen in einer unterstuetzenden
                Atmosphaere.
              </p>
              <p className="mt-4 text-text-secondary">
                Gegenseitige Motivation, effektive Paaruebungen, Spass und soziale
                Verbindung waehrend der Sessions. Individuelle Trainingsplaene fuer
                beide Teilnehmer. Fuer alle Altersgruppen geeignet — optional auch
                Outdoor-Training.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-white p-6">
                <h4 className="font-bold text-text">Probetraining</h4>
                <p className="mt-1 text-sm text-text-secondary">
                  Inkl. Standortbestimmung, Body-Screening und 30-Minuten
                  Partner-Workout.
                </p>
                <span className="mt-2 inline-block text-lg font-black text-orange">
                  CHF 45
                </span>
              </div>
              <div className="rounded-2xl border border-orange bg-orange-light/30 p-6">
                <h4 className="font-bold text-text">Fortlaufendes Training</h4>
                <p className="mt-1 text-sm text-text-secondary">
                  Inkl. Body-Screening, individuelle Trainingsplaene und
                  langfristige Zielsetzung.
                </p>
                <span className="mt-2 inline-block text-lg font-black text-orange">
                  CHF 90 / Person / Session
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schwangerschaftscoaching Detail */}
      <section id="schwangerschaft" className="scroll-mt-24 section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Individuelle Betreuung",
                  "Gezielte Staerkung",
                  "Beschwerdefrei durch die Schwangerschaft",
                  "Optimale Geburtsvorbereitung",
                  "Stressabbau & Entspannung",
                  "Beckenbodentraining",
                ].map((item) => (
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
                  <strong>Gruppenkurs:</strong> Sonntags 09:00–10:00, max. 6
                  Teilnehmerinnen, CHF 180 (6 Wochen).
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  <strong>1:1 Coaching:</strong> CHF 150 pro Session, individuell
                  terminiert.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-semibold uppercase tracking-widest text-orange">
                Schwangerschaftscoaching
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
                Gesund und voller Energie durch die Schwangerschaft.
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                Unser 1:1 Schwangerschaftscoaching bietet dir die perfekte
                Moeglichkeit, aktiv und gesund durch deine Schwangerschaft zu gehen.
                Wir beruecksichtigen nicht nur deine individuellen Beduerfnisse und
                Wuensche, sondern auch den aktuellen Verlauf deiner Schwangerschaft.
              </p>
              <p className="mt-4 text-text-secondary">
                Ob Anfaengerin oder erfahrene Sportlerin — unser
                Schwangerschaftscoaching ist fuer jede Frau geeignet. Gemeinsam
                schaffen wir eine Balance zwischen Aktivitaet und Entspannung. Dein
                Wohlbefinden und das deines Babys stehen an erster Stelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals / Ziele */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Deine Ziele
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
              Egal welches Ziel — wir bringen dich hin.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {goals.map((g) => (
              <div
                key={g.title}
                className="rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-light">
                  <g.icon className="h-5 w-5 text-orange" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-text">{g.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {g.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
              Fuer wen ist Personal Training?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              Ob du <strong>abnehmen</strong> moechtest,{" "}
              <strong>Muskeln aufbauen</strong> willst, dich endlich wieder{" "}
              <strong>schmerzfrei bewegen</strong> moechtest,{" "}
              <strong>sportartspezifisch trainieren</strong> willst oder{" "}
              <strong>gesund durch die Schwangerschaft</strong> kommen moechtest — bei
              Alpha Sports bist du richtig. Unser Personal Training in St. Gallen ist
              fuer alle, die mehr wollen als ein normales Fitnessstudio.
            </p>
            <p className="mt-4 text-text-secondary">
              Vereinbare jetzt ein kostenloses Beratungsgespraech, in dem wir eine
              Strategie zur Erreichung deiner Ziele ausarbeiten.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Starte mit einem kostenlosen Beratungsgespraech."
        description="30 Minuten, unverbindlich. Wir lernen dich kennen, analysieren deine Ziele und zeigen dir, wie wir dich auf dem schnellsten Weg zu deiner Bestform begleiten koennen."
      />
    </>
  );
}
