import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { trainers } from "@/lib/content";
import { Check, Shield, Users, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Über uns — Das Team hinter Alpha Sports",
  description:
    "Lerne das Alpha Sports Team kennen. Zertifizierte Personal Trainer, Physiotherapeutin und Fitness-Experten in St. Gallen. Qualitop zertifiziert.",
};

const whatClientsValue = [
  "Wohlfühlen dank Privatsphäre (Eigenes Studio)",
  "Für jedes Fitness Level die perfekte Strategie",
  "Schnell sichtbare Ergebnisse",
  "Nachhaltige Erfolge ohne Diäten",
  "Kompetente & individuelle Betreuung",
  "Flexibilität",
  "Motivationsfördernde Umgebung & Coaches",
  "Genügend Parkplätze in unmittelbarer Nähe",
];

export default function ÜberUnsPage() {
  return (
    <>
      <PageHero
        badge="Über uns"
        title="Die Menschen hinter Alpha Sports."
        description="Zertifizierte Experten mit Leidenschaft, die dich auf dem schnellsten Weg zu deiner Bestform begleiten — egal wo du startest."
        ctaText="Kostenloses Beratungsgespräch"
        ctaHref="/kostenloses-beratungsgespraech"
        backgroundImage="/images/studio/studio-9.jpg"
      />

      {/* Philosophy */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange">
                Unsere Philosophie
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
                Körpertransformation & funktionelle Leistungsfähigkeit.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                Egal wo du beginnst, jeder ist bei uns willkommen. In unserem
                privaten Studio achten wir darauf, dass du dich rundum wohlfühlst
                und deinem Fokus für dein Ziel nichts im Weg steht.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                Bei Alpha Sports steht deine persönliche Entwicklung im
                Mittelpunkt. In unserem zentral gelegenen Studio in St. Gallen
                schaffen wir Raum für effizientes, zielgerichtetes Training — mit
                Privatsphäre, Expertise und einer klaren Mission: Dich auf
                schnellstem Weg zu deiner Bestform zu begleiten!
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                Wir sind ein Team aus Experten mit langjähriger Erfahrung im
                Bereich Training, Ernährung und Mindset, welches auf
                Körpertransformation & funktionelle Leistungsfähigkeit
                spezialisiert ist.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/trainers/team-foto-neu.jpg"
                alt="Alpha Sports Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Warum Alpha Sports */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange">
                Das schätzen unsere Kunden
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
                Warum Alpha Sports?
              </h2>
              <p className="mt-6 leading-relaxed text-text-secondary">
                Unser Fokus liegt darin, Menschen dabei zu helfen, sich in ihrem
                Körper wieder wohl zu fühlen und ihnen dadurch zu mehr
                Selbstvertrauen, innerer Stärke und körperlicher
                Widerstandsfähigkeit zu verhelfen.
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                Unsere individuelle Betreuung, kombiniert mit unserer bewährten
                Coaching-Strategie, sorgt dafür, dass du nicht nur besser aussiehst,
                sondern dich auch im Alltag leistungsfähiger, belastbarer und
                sicherer fühlst.
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                Denn wer sich stark fühlt, begegnet Herausforderungen mit
                Leichtigkeit. Wir begleiten dich Schritt für Schritt — effizient,
                persönlich und mit echter Leidenschaft — auf deinem Weg zu mehr
                Energie, Klarheit und Selbstbewusstsein.
              </p>
              <p className="mt-6 text-lg font-bold text-text">
                Alpha Sports — weil deine Bestform kein Zufall ist!
              </p>
            </div>
            <div className="space-y-4 lg:pt-16">
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
              durch das Training führen.
            </p>
          </div>

          <div className="flex gap-4 overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:pb-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {trainers.map((trainer) => (
              <div
                key={trainer.name}
                className="w-[72vw] min-w-[72vw] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-white lg:w-full lg:min-w-0"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 lg:p-6">
                  <h3 className="text-lg font-bold text-text">
                    {trainer.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-orange">
                    {trainer.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {trainer.bio}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5 lg:mt-4">
                    {trainer.credentials.map((cred) => (
                      <span
                        key={cred}
                        className="rounded-full bg-orange-light px-2.5 py-1 text-[11px] font-medium text-orange"
                      >
                        {cred}
                      </span>
                    ))}
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
                text: "Kein Standardprogramm. Jeder Plan ist auf dich zugeschnitten — basierend auf Daten, nicht Vermutungen. Deine Ziele und deine persönliche Ausgangslage stehen im Zentrum.",
              },
              {
                icon: Eye,
                title: "Privat",
                text: "Volle Aufmerksamkeit, keine Wartezeiten, kein Stress. Familiäre Atmosphäre mit genügend Parkplätzen.",
              },
              {
                icon: Shield,
                title: "Anerkannt",
                text: "Qualitop zertifiziert. Professionelle Standards und Krankenkassen-Anerkennung. Ein Teil der Kosten kann übernommen werden.",
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

      <CTABanner
        title="Lerne uns persönlich kennen."
        description="Komm vorbei für ein kostenloses Beratungsgespräch und lerne unser Studio und Team kennen."
      />
    </>
  );
}
