import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { trainers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lerne das Alpha Sports Team kennen. Zertifizierte Personal Trainer, Physiotherapeutin und Fitness-Experten in St. Gallen. Deine persönliche Entwicklung steht im Zentrum.",
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        badge="Über uns"
        title="Die Menschen hinter Alpha Sports."
        description="Zertifizierte Experten mit Leidenschaft, die dich auf deinem Weg begleiten — egal wo du startest."
      />

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange">
                Unsere Mission
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
                Dein Weg zur Bestform beginnt jetzt.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                Schnell, effektiv & individuell — mit der bewährten Alpha Sports
                Strategie kommst du ohne Umwege zu deiner ästhetischen Bestform.
                Gemeinsam entfalten wir dein volles Potenzial und formen deinen
                Körper — für mehr Stärke, Selbstvertrauen und nachhaltigen
                Erfolg.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                Bei Alpha Sports kombinieren wir persönliche Betreuung mit
                modernster Diagnostik — damit du dich schnell wohlfühlst und
                sichtbar veränderst. In unserem privaten Studio in St. Gallen
                trainierst du in familiärer Atmosphäre — mit voller
                Aufmerksamkeit. Kein anonymes Fitnessstudio, sondern dein
                persönlicher Trainingsort.
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-orange">
                Definiert — Kraftvoll — Selbstbewusst
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/trainers/team.jpg"
                alt="Alpha Sports Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Angebot */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Unser Angebot
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
              Abnehmen war noch nie so zielgerichtet.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Modernste Leistungsdiagnostik",
              "Personal Training in privatem Studio",
              "Persönliche Online-Coachings",
              "Hybrid-Modell (Studio + Online)",
              "Gruppenkurse",
              "Krankenkassen anerkannt (Qualitop, EMR, SwissActive)",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-white p-6 text-center"
              >
                <span className="text-sm font-medium text-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
              Unser Team
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {trainers.map((trainer) => (
              <div
                key={trainer.name}
                className="rounded-2xl border border-border bg-white p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-dark text-2xl font-black text-white">
                    {trainer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text">
                      {trainer.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-orange">
                      {trainer.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {trainer.bio}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {trainer.credentials.map((cred) => (
                        <span
                          key={cred}
                          className="rounded-full bg-bg-alt px-2.5 py-1 text-[11px] text-text-secondary"
                        >
                          {cred}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Unsere Werte
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
              Was uns ausmacht.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Individuell",
                text: "Kein Standardprogramm. Jeder Plan ist auf dich zugeschnitten — basierend auf Daten, nicht Vermutungen.",
              },
              {
                title: "Privat",
                text: "Max. 2 Personen gleichzeitig im Studio. Volle Aufmerksamkeit, keine Wartezeiten, kein Stress.",
              },
              {
                title: "Anerkannt",
                text: "Qualitop, EMR und SwissActive zertifiziert. Professionelle Standards und Krankenkassen-Anerkennung.",
              },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <h3 className="text-xl font-bold text-text">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standorte */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Standorte
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
              Unsere Studios in St. Gallen.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-8 text-center">
              <h3 className="text-lg font-bold text-text">Studio 1</h3>
              <p className="mt-2 text-text-secondary">
                Unterer Graben 21, 9000 St. Gallen
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-8 text-center">
              <h3 className="text-lg font-bold text-text">Studio 2</h3>
              <p className="mt-2 text-text-secondary">
                Rorschacher Str. 59, 9000 St. Gallen
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Lerne uns persönlich kennen."
        description="Komm vorbei für ein kostenloses Beratungsgespräch und lerne unser Studio und Team kennen."
      />
    </>
  );
}
