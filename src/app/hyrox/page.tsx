import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { Zap, Target, Users, Trophy, Dumbbell, Heart, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "HYROX Training",
  description:
    "HYROX Training und Wettkampfvorbereitung bei Alpha Sports St. Gallen. HYROX365 zertifizierte Trainer. Funktionelle Kraft und Ausdauer.",
};

export default function HyroxPage() {
  return (
    <>
      <PageHero
        badge="HYROX"
        title="Ein Ziel. Eine Challenge. Ein Team, das dich pusht!"
        description="HYROX ist mehr als nur ein Workout — es ist die perfekte Kombination aus Kraft, Ausdauer und mentaler Staerke."
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Was ist HYROX?
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-5xl">
              Der Fitness-Wettkampf fuer alle.
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              HYROX ist mehr als nur ein Workout — es ist die perfekte Kombination
              aus Kraft, Ausdauer und mentaler Staerke. Dieses einzigartige
              Wettkampfformat fordert dich mit 8 x 1 km Laufen und 8 intensiven
              Workouts heraus.
            </p>
            <p className="mt-4 text-lg text-text-secondary">
              Als offizieller HYROX-Partner bieten wir dir die perfekte Vorbereitung
              auf dieses einzigartige Event. Mit professioneller Betreuung und einer
              motivierenden Community helfen wir dir, dein volles Potenzial zu
              entfalten und deine Bestleistung zu erreichen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Zap,
                title: "Explosives Workout",
                text: "HYROX fordert deinen gesamten Koerper — 8 x 1 km Laufen kombiniert mit 8 funktionellen Workouts fuer die ultimative Trainingserfahrung.",
              },
              {
                icon: Target,
                title: "Fight your limits",
                text: "Geh an deine Grenzen und darueber hinaus. Mentale Staerke aufbauen, Ausdauer pushen und deine persoenliche Bestleistung erreichen.",
              },
              {
                icon: Trophy,
                title: "Wettkampf Feeling",
                text: "Von der Technik bis zur Rennstrategie — wir bereiten dich komplett auf den Race Day vor. Strukturierte Wettkampfvorbereitung fuer alle Level.",
              },
              {
                icon: Users,
                title: "Team Spirit",
                text: "Lass dich von Gleichgesinnten pushen und ueberschreite deine Grenzen. Motivierende Community und gegenseitige Unterstuetzung.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-light">
                  <item.icon className="h-5 w-5 text-orange" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-text">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you train */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange">
                Was du trainierst
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
                Ganzkoerper-Athletik auf neuem Level.
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                HYROX fordert deinen gesamten Koerper. Unser Training kombiniert
                funktionelle Kraft mit Ausdauer fuer die ultimative
                Trainingserfahrung — effektiv, fordernd und motivierend.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Kraft, Ausdauer & funktionelle Performance",
                  "Ganzkoerper-athletisches Training",
                  "Strukturierte Wettkampfvorbereitung",
                  "Muskelaufbau & Koerperkomposition",
                  "Mentale Staerke aufbauen",
                  "An deine Grenzen gehen — und darueber hinaus",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-light">
                      <Check className="h-3.5 w-3.5 text-orange" />
                    </div>
                    <span className="text-sm text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="rounded-2xl border border-border bg-white p-8">
                <h3 className="text-lg font-bold text-text">HYROX Gruppenkurs</h3>
                <p className="mt-3 text-sm text-text-secondary">
                  Trainiere in der motivierenden Gruppenatmosphaere mit
                  Gleichgesinnten. Fuer Anfaenger und Fortgeschrittene — egal ob du
                  dich auf ein HYROX-Race vorbereitest oder eine neue
                  Fitness-Herausforderung suchst.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <Dumbbell className="h-4 w-4 text-orange" />
                    Funktionelle Kraft + Ausdauer
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <Users className="h-4 w-4 text-orange" />
                    Kleine Gruppe, max. 8 Teilnehmer
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <Heart className="h-4 w-4 text-orange" />
                    Probetraining kostenlos
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-border bg-white p-8">
                <h3 className="text-lg font-bold text-text">HYROX 1:1 Coaching</h3>
                <p className="mt-3 text-sm text-text-secondary">
                  Maximale Performance mit individuellem Training. Rennstrategie,
                  Technik-Optimierung und gezielter Aufbau — fuer deine Bestzeit am
                  Race Day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-text">
            Deine HYROX-Trainer
          </h2>
          <p className="mt-4 text-text-secondary">
            <strong>Luigi Lieberherr</strong> und <strong>Nicole Walser</strong> sind
            beide HYROX365 Foundation zertifiziert. Nicole ist aktive HYROX-Athletin
            mit CrossFit-, Kletter- und Bouldern-Erfahrung. Luigi bringt 10+ Jahre
            Fitness-Erfahrung und Kampfsport-Hintergrund mit.
          </p>
        </div>
      </section>

      <CTABanner
        title="Bereit fuer HYROX?"
        description="Egal ob dein erstes Race oder deine neue Bestzeit — wir bringen dich hin. Starte mit einem kostenlosen Beratungsgespraech."
      />
    </>
  );
}
