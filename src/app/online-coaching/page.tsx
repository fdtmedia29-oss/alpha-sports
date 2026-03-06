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
    "12-Wochen Online Coaching Programm von Alpha Sports. Individueller Trainings- & Ernaehrungsplan, persoenliche Betreuung via App. Alpha Sports Shape & Shape Pro. Von ueberall trainieren.",
};

const pillars = [
  {
    icon: BarChart3,
    title: "Training",
    text: "Individueller Trainingsplan, regelmaessige Fortschrittsanalysen und Anpassungen basierend auf deinem Feedback. Du trainierst flexibel — wann und wo du willst.",
  },
  {
    icon: Utensils,
    title: "Ernaehrung",
    text: "Alltagstaugliche Ernaehrungsberatung mit strukturiertem Makronaehrstoff-Plan (Protein, Kohlenhydrate, Fette). Keine restriktiven Diaeten — woechentlicher Daten-Review.",
  },
  {
    icon: Moon,
    title: "Lifestyle",
    text: "Schlafdauer und -qualitaet verbessern, Stresslevel reduzieren, Energie steigern, Tagesstruktur und Routinen aufbauen — fuer ganzheitliche Ergebnisse.",
  },
  {
    icon: Video,
    title: "1:1 Support",
    text: "Video-Calls mit deinem Coach, In-App Chat fuer schnelle Fragen, regelmaessige Dokumentation und gemeinsame Analyse deiner Fortschritte.",
  },
];

const forYou = [
  "Du hast ein Abo, aber keinen Plan",
  "Du trainierst, siehst aber keine Ergebnisse",
  "Du willst von zu Hause oder unterwegs trainieren",
  "Du brauchst klare Ziele und ehrliches Feedback",
  "Job und Familie lassen wenig Zeit fuers Studio",
  "Du willst zeiteffiziente Workouts",
  "Kein Studio in der Naehe oder du bevorzugst Hometraining",
  "Du brauchst Motivation und einen Fahrplan",
];

const sixComponents = [
  { icon: MapPin, text: "Flexibles Training von ueberall" },
  { icon: Clock, text: "Maximale Zeiteffizienz" },
  { icon: Utensils, text: "Individuelle Ernaehrung inklusive" },
  { icon: BarChart3, text: "Progress-Tracking" },
  { icon: Video, text: "Support via App und Video" },
  { icon: Zap, text: "Standortunabhaengiges Coaching" },
];

export default function OnlineCoachingPage() {
  return (
    <>
      <PageHero
        badge="Online Coaching"
        title="Deine Bestform ist nur einen Klick entfernt."
        description="12-Wochen intensives 1:1 Online Coaching mit persoenlicher Betreuung via App — Training, Ernaehrung und Lifestyle. Von ueberall."
      />

      {/* What you get */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Was dich erwartet
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-5xl">
              6 Komponenten fuer deinen Erfolg.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sixComponents.map((c) => (
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

      {/* 4 Pillars */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Das Programm
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-5xl">
              Ganzheitlich. Nicht nur Training.
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Unser Online Coaching verbindet individuelles Training, strukturierte
              Ernaehrung und Lifestyle-Optimierung — alles zugaenglich ueber eine
              Coaching-App.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-light">
                  <p.icon className="h-5 w-5 text-orange" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-text">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
                So laeuft es ab
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
                12 Wochen, die alles veraendern.
              </h2>
              <div className="mt-8 space-y-6">
                {[
                  {
                    step: "01",
                    text: "Kostenloses Beratungsgespraech — Ziele, Alltag, Erwartungen klaeren",
                  },
                  {
                    step: "02",
                    text: "Individueller Plan — Training, Ernaehrung, Lifestyle auf dich abgestimmt",
                  },
                  {
                    step: "03",
                    text: "Woechentliche Check-ins — Fortschritt messen, Daten reviewen, Plan anpassen",
                  },
                  {
                    step: "04",
                    text: "Regelmaessige Dokumentation — Progress-Fotos, Koerpermasse, Gewicht",
                  },
                  {
                    step: "05",
                    text: "Ergebnisse feiern — sichtbare Veraenderung in 12 Wochen",
                  },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <span className="text-2xl font-black text-orange">
                      {s.step}
                    </span>
                    <p className="pt-1 text-text-secondary">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-lg font-bold text-text">
                Online Coaching ist fuer dich, wenn...
              </h3>
              <div className="space-y-4">
                {forYou.map((item) => (
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
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Pakete
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
              Waehle dein Programm.
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
                  "Ernaehrungsplan",
                  "Lifestyle-Optimierung",
                  "Coaching-App Zugang",
                  "Woechentliche Anpassungen",
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
                Das Premium-Paket mit erweiterten Analysen und persoenlichem
                Training vor Ort.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Alles aus Shape",
                  "Stoffwechsel- & Leistungsanalyse",
                  "InBody Koerperanalyse",
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
            Optional: Umwandlung in ein Hybrid-Programm moeglich — kombiniere Online
            Coaching mit Sessions vor Ort im Studio.
          </p>
        </div>
      </section>

      {/* Progress tracking */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Smartphone className="h-12 w-12 text-orange" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-text md:text-4xl">
            Alles in einer App.
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Progress-Fotos, Koerpermasse (Taille, Huefte, Brust, Arme, Beine),
            Gewicht, Chat mit deinem Coach — alles an einem Ort. Einfach,
            uebersichtlich, motivierend. Regelmaessige Dokumentation und gemeinsame
            Analyse.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              "Progress-Fotos",
              "Koerpermasse",
              "Gewichtstracking",
              "Chat mit Coach",
              "Trainingsplan",
              "Ernaehrungsplan",
              "Video-Calls",
              "Daten-Reviews",
            ].map((f) => (
              <span
                key={f}
                className="rounded-full bg-bg-alt px-4 py-2 text-sm font-medium text-text-secondary"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Starte jetzt — werde die beste Version deiner selbst."
        description="Kostenloses Beratungsgespraech buchen. Wir zeigen dir, welches Programm am besten zu dir passt."
      />
    </>
  );
}
