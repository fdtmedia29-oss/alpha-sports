import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { trainers } from "@/lib/content";
import { Check, Shield, Users, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Ueber uns",
  description:
    "Lerne das Alpha Sports Team kennen. Zertifizierte Personal Trainer, Physiotherapeutin und Fitness-Experten in St. Gallen. Koerpertransformation und funktionelle Performance. Qualitop, EMR und SwissActive zertifiziert.",
};

const whatClientsValue = [
  "Privatsphaere und persoenliche Atmosphaere",
  "Schnelle und sichtbare Ergebnisse",
  "Nachhaltige Fortschritte ohne restriktive Diaeten",
  "Kompetentes und motivierendes Coaching",
  "Flexibilitaet bei der Terminplanung",
  "Motivierendes Umfeld",
  "Genuegend Parkplaetze",
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        badge="Ueber uns"
        title="Die Menschen hinter Alpha Sports."
        description="Zertifizierte Experten mit Leidenschaft, die dich auf dem schnellsten Weg zu deiner Bestform begleiten — egal wo du startest."
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
                Koerpertransformation & funktionelle Performance.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                Bei Alpha Sports geht es um mehr als Fitness. Unser Team
                spezialisiert sich auf Koerpertransformation und funktionelle
                Performance — damit du dich staerker und leistungsfaehiger im Alltag
                fuehlst. Wir kombinieren Training, Ernaehrung und Mindset fuer
                Selbstvertrauen und koerperliche Widerstandsfaehigkeit.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                In unserem privaten Studio in St. Gallen trainierst du in
                familiaerer Atmosphaere — mit voller Aufmerksamkeit und modernster
                Diagnostik. Kein anonymes Fitnessstudio, sondern dein persoenlicher
                Trainingsort. Wir begleiten dich auf dem schnellsten Weg zu deiner
                Bestform — mit Privatsphaere, Expertise und Effizienz.
              </p>
              <p className="mt-4 text-text-secondary">
                Alle Fitness-Levels sind willkommen. Wir legen Wert darauf, dass du
                dich in unserem privaten Studio wohlfuehlst.
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

      {/* What clients value */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange">
                Das schaetzen unsere Kunden
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
                Warum Alpha Sports?
              </h2>
            </div>
            <div className="space-y-4">
              {whatClientsValue.map((item) => (
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

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
              Unser Team
            </h2>
            <p className="mt-4 text-text-secondary">
              Erfahrene, zertifizierte Fitnessprofis, die dich sicher und effektiv
              durch das Training fuehren.
            </p>
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
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Individuell",
                text: "Kein Standardprogramm. Jeder Plan ist auf dich zugeschnitten — basierend auf Daten, nicht Vermutungen. Deine Ziele und deine persoenliche Ausgangslage stehen im Zentrum.",
              },
              {
                icon: Eye,
                title: "Privat",
                text: "Max. 2 Personen gleichzeitig im Studio. Volle Aufmerksamkeit, keine Wartezeiten, kein Stress. Familiaere Atmosphaere mit genuegend Parkplaetzen.",
              },
              {
                icon: Shield,
                title: "Anerkannt",
                text: "Qualitop, EMR und SwissActive zertifiziert. Professionelle Standards und Krankenkassen-Anerkennung. Ein Teil der Kosten kann uebernommen werden.",
              },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-light">
                  <v.icon className="h-5 w-5 text-orange" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-text">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-text">Unsere Standorte</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border p-6">
                <h3 className="font-bold text-text">Studio 1</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  Unterer Graben 21, 9000 St. Gallen
                </p>
              </div>
              <div className="rounded-2xl border border-border p-6">
                <h3 className="font-bold text-text">Studio 2</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  Rorschacher Str. 59, 9000 St. Gallen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Lerne uns persoenlich kennen."
        description="Komm vorbei fuer ein kostenloses Beratungsgespraech und lerne unser Studio und Team kennen."
      />
    </>
  );
}
