import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { Zap, Target, Users, Trophy, Flame, Brain, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "HYROX Training",
  description:
    "HYROX Training und Wettkampfvorbereitung bei Alpha Sports St. Gallen. Offizieller HYROX-Partner. HYROX365 zertifizierte Trainer. Von Anfänger bis Wettkampf.",
};

export default function HyroxPage() {
  return (
    <>
      <PageHero
        badge="HYROX"
        title="Ein Ziel. Eine Challenge. Ein Team, das dich pusht!"
        description="HYROX ist mehr als nur ein Workout — es ist die perfekte Kombination aus Kraft, Ausdauer und mentaler Stärke."
      />

      {/* What is HYROX */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-text-secondary">
              HYROX ist mehr als nur ein Workout – es ist die perfekte
              Kombination aus Kraft, Ausdauer und mentaler Stärke. Dieses
              einzigartige Wettkampfformat fordert dich mit 8 x 1 km Laufen und
              8 intensiven Workouts heraus. Egal ob Einsteiger oder Profi, HYROX
              bringt dich an deine Grenzen und darüber hinaus.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Als offizieller HYROX-Partner bieten wir dir die perfekte
              Vorbereitung auf dieses einzigartige Event. Mit professioneller
              Betreuung und einer motivierenden Community helfen wir dir, dein
              volles Potenzial zu entfalten und deine Bestleistung zu erreichen.
            </p>
            <p className="mt-4 text-lg font-semibold text-text">
              Bist du bereit, dich der Herausforderung zu stellen?
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Was ist HYROX?
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-5xl">
              Der Fitness-Wettkampf für alle.
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              HYROX kombiniert 8 x 1 km Laufen mit 8 funktionellen Workouts —
              Sled Push, SkiErg, Burpees, Rowing und mehr. Egal ob Anfänger oder
              Profi, HYROX ist für alle zugänglich und misst sich an deiner
              eigenen Zeit.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Flame,
                title: "Explosives Workout",
                text: "8 intensive Workouts kombiniert mit 8 km Laufen — ein Ganzkörper-Challenge, die alles fordert.",
              },
              {
                icon: Brain,
                title: "Fight Your Limits",
                text: "HYROX testet nicht nur deinen Körper, sondern auch deine mentale Stärke. Lerne, über deine Grenzen hinauszugehen.",
              },
              {
                icon: Trophy,
                title: "Wettkampf Feeling",
                text: "Die einzigartige Wettkampf-Atmosphäre pusht dich zu Höchstleistungen. Messe dich mit dir selbst und anderen.",
              },
              {
                icon: Users,
                title: "Team Spirit",
                text: "Trainiere in einer motivierenden Community, die dich unterstützt und gemeinsam mit dir wächst.",
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

      {/* Training Approach */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Unser Training
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-5xl">
              Professionelle HYROX-Vorbereitung.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: "Gezieltes Training",
                text: "Spezifische Vorbereitung auf alle 8 HYROX-Stationen plus Laufeinheiten.",
              },
              {
                icon: Zap,
                title: "HYROX365 zertifiziert",
                text: "Unsere Trainer sind HYROX365 Foundation zertifiziert und kennen jeden Aspekt des Wettkampfs.",
              },
              {
                icon: Users,
                title: "Gruppen & 1:1",
                text: "Trainiere in der Gruppe für Motivation oder 1:1 für maximale Performance.",
              },
              {
                icon: Heart,
                title: "Race Day Ready",
                text: "Von der Technik bis zur Rennstrategie — wir bereiten dich komplett vor.",
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

      {/* CTA */}
      <CTABanner
        title="Bereit für HYROX?"
        description="Egal ob dein erstes Race oder deine neue Bestzeit — wir bringen dich hin. Starte mit einem kostenlosen Beratungsgespräch."
      />
    </>
  );
}
