import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { Zap, Target, Users, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "HYROX Training",
  description:
    "HYROX Training und Wettkampfvorbereitung bei Alpha Sports St. Gallen. HYROX365 zertifizierte Trainer. Von Anfänger bis Wettkampf.",
};

export default function HyroxPage() {
  return (
    <>
      <PageHero
        badge="HYROX"
        title="Train. Race. Repeat."
        description="HYROX-spezifisches Training für alle Level. Von der ersten Session bis zum Race Day."
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Was ist HYROX?
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-5xl">
              Der Fitness-Wettkampf für alle.
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              HYROX kombiniert 8 km Laufen mit 8 funktionellen Workouts — Sled
              Push, SkiErg, Burpees, Rowing und mehr. Egal ob Anfänger oder
              Profi, HYROX ist für alle zugänglich und misst sich an deiner
              eigenen Zeit.
            </p>
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
                icon: Trophy,
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

      <CTABanner
        title="Bereit für HYROX?"
        description="Egal ob dein erstes Race oder deine neue Bestzeit — wir bringen dich hin. Starte mit einem kostenlosen Beratungsgespräch."
      />
    </>
  );
}
