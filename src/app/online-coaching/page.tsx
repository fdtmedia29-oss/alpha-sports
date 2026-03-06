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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Online Coaching",
  description:
    "12-Wochen Online Coaching Programm von Alpha Sports. Individueller Trainings- & Ernährungsplan, persönliche Betreuung via App. Von überall trainieren.",
};

const pillars = [
  {
    icon: BarChart3,
    title: "Training",
    text: "Individueller Trainingsplan, regelmässige Anpassungen basierend auf deinem Fortschritt, Video-Calls mit deinem Coach.",
  },
  {
    icon: Utensils,
    title: "Ernährung",
    text: "Alltagstaugliche Ernährungsberatung mit strukturiertem Makronährstoff-Plan. Keine restriktiven Diäten.",
  },
  {
    icon: Moon,
    title: "Lifestyle",
    text: "Schlafdauer und -qualität verbessern, Stresslevel reduzieren, Energie steigern, Routinen aufbauen.",
  },
  {
    icon: Video,
    title: "1:1 Support",
    text: "Video-Calls mit deinem Coach, In-App Chat für schnelle Fragen, wöchentliche Daten-Reviews.",
  },
];

const forYou = [
  "Du hast ein Abo, aber keinen Plan",
  "Du trainierst, siehst aber keine Ergebnisse",
  "Du willst von zu Hause oder unterwegs trainieren",
  "Du brauchst klare Ziele und ehrliches Feedback",
  "Job und Familie lassen wenig Zeit fürs Studio",
  "Du willst zeiteffiziente Workouts",
];

export default function OnlineCoachingPage() {
  return (
    <>
      <PageHero
        badge="Online Coaching"
        title="Dein Coach. Überall dabei."
        description="12-Wochen Programme mit persönlicher Betreuung via App — Training, Ernährung und Lifestyle. Von überall."
      />

      {/* 4 Pillars */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Das Programm
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-5xl">
              Ganzheitlich. Nicht nur Training.
            </h2>
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
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
                So läuft es ab
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
                12 Wochen, die alles verändern.
              </h2>
              <div className="mt-8 space-y-6">
                {[
                  {
                    step: "01",
                    text: "Kostenloses Beratungsgespräch — Ziele, Alltag, Erwartungen klären",
                  },
                  {
                    step: "02",
                    text: "Individueller Plan — Training, Ernährung, Lifestyle auf dich abgestimmt",
                  },
                  {
                    step: "03",
                    text: "Wöchentliche Check-ins — Fortschritt messen, Plan anpassen",
                  },
                  {
                    step: "04",
                    text: "Ergebnisse feiern — sichtbare Veränderung in 12 Wochen",
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
                Online Coaching ist für dich, wenn...
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
            Progress-Fotos, Körpermasse, Gewicht, Chat mit deinem Coach — alles
            an einem Ort. Einfach, übersichtlich, motivierend.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              "Progress-Fotos",
              "Körpermasse",
              "Gewichtstracking",
              "Chat mit Coach",
              "Trainingsplan",
              "Ernährungsplan",
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
        title="Bereit für deine Transformation?"
        description="Starte mit einem kostenlosen Beratungsgespräch. Wir zeigen dir, welches Programm am besten zu dir passt."
      />
    </>
  );
}
