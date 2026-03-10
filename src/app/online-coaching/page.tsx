import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import {
  Check,
  Video,
  Smartphone,
  BarChart3,
  Utensils,
  Moon,
  Zap,
  Clock,
  MapPin,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Online Coaching",
  description:
    "12-Wochen Online Coaching Programm von Alpha Sports. Individueller Trainings- & Ernährungsplan, persönliche Betreuung via App. Alpha Sports Shape & Shape Pro. Von überall trainieren.",
};

const problemPoints = [
  "Du hast ein Abo im Fitnessstudio, aber keinen richtigen Plan",
  "Du balancierst Job und Familie mit wenig Zeit",
  "Du trainierst regelmässig, ohne sichtbare Fortschritte",
  "Du willst von zu Hause oder unterwegs trainieren",
  "Du brauchst klare Ziele und ehrliches Feedback",
  "Du brauchst externe Motivation",
  "Du willst zeiteffizientes Training",
];

const sixFeatures = [
  { icon: MapPin, text: "Flexibles Training von überall" },
  { icon: Clock, text: "Maximale Zeiteffizienz" },
  { icon: Utensils, text: "Individuelle Ernährung inklusive" },
  { icon: BarChart3, text: "Progress-Tracking" },
  { icon: Video, text: "App & Video Coaching" },
  { icon: Zap, text: "Premium Coaching" },
];

export default function OnlineCoachingPage() {
  return (
    <>
      <PageHero
        badge="Online Coaching"
        title="In 12 Wochen zu deiner Bestform."
        description="12-Wochen intensives 1:1 Online Coaching mit persönlicher Betreuung via App — Training, Ernährung und Lifestyle. Von überall."
      />

      {/* Problem section */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange">
                Kennst du das?
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
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

      {/* Packages */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Pakete
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
              Wähle dein Programm.
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {/* Shape */}
            <div className="rounded-2xl border border-border bg-white p-8">
              <h3 className="text-xl font-bold text-text">Alpha Sports Shape</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-sm text-muted">CHF</span>
                <span className="text-3xl font-black text-text">420</span>
                <span className="text-sm text-muted">/Monat</span>
              </div>
              <p className="mt-4 text-sm text-text-secondary">
                12 Wochen intensives Coaching mit allem, was du brauchst.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Individueller Trainingsplan",
                  "Ernährungsplan",
                  "Lifestyle-Optimierung",
                  "Coaching-App Zugang",
                  "Wöchentliche Anpassungen",
                  "3 Monate Premium Support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <Check className="h-3.5 w-3.5 text-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Shape Pro */}
            <div className="relative rounded-2xl border border-orange bg-orange-light/30 p-8">
              <div className="absolute -top-3 right-4 flex items-center gap-1 rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white">
                <Star className="h-3 w-3" />
                Beliebt
              </div>
              <h3 className="text-xl font-bold text-text">
                Alpha Sports Shape Pro
              </h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-sm text-muted">CHF</span>
                <span className="text-3xl font-black text-text">620</span>
                <span className="text-sm text-muted">/Monat</span>
              </div>
              <p className="mt-4 text-sm text-text-secondary">
                Das Premium-Paket mit erweiterten Analysen und persönlichem
                Training vor Ort.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Alles aus Shape",
                  "Stoffwechsel- & Leistungsanalyse",
                  "InBody Körperanalyse",
                  "FMS-Test (Functional Movement Screen)",
                  "Personal Training Session vor Ort",
                  "Priority Support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <Check className="h-3.5 w-3.5 text-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-muted">
            So erreichst du schnell und nachhaltig — sichtbare Ergebnisse.
          </p>
        </div>
      </section>

      {/* Progress tracking */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Smartphone className="h-12 w-12 text-orange" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-text md:text-4xl">
            Alles in einer App.
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Progress-Fotos, Körpermasse (Taille, Hüfte, Brust, Arme, Beine),
            Gewicht, Chat mit deinem Coach — alles an einem Ort. Einfach,
            übersichtlich, motivierend. Regelmässige Dokumentation und gemeinsame
            Analyse.
          </p>
        </div>
      </section>

      <CTABanner
        title="Starte jetzt — werde die beste Version deiner selbst."
        description="Kostenloses Beratungsgespräch buchen. Wir zeigen dir, welches Programm am besten zu dir passt."
      />
    </>
  );
}
