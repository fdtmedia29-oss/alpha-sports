import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { Zap, Target, Users, Trophy, Dumbbell, Heart, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "HYROX Training",
  description:
    "HYROX Training und Wettkampfvorbereitung bei Alpha Sports St. Gallen. HYROX365 zertifizierte Trainer. Funktionelle Kraft und Ausdauer. Gruppen- und 1:1-Training. Von Anfaenger bis Wettkampf.",
};

export default function HyroxPage() {
  return (
    <>
      <PageHero
        badge="HYROX"
        title="Train. Race. Repeat."
        description="Der weltweit erste Fitness-Wettkampf — funktionelle Kraft und Ausdauer in einer ultimativen Trainingserfahrung. HYROX-spezifisches Training fuer alle Level."
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Was ist HYROX?
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-5xl">
              Der Fitness-Wettkampf fuer alle.
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              HYROX kombiniert 8 km Laufen mit 8 funktionellen Workouts — Sled
              Push, SkiErg, Burpees, Rowing und mehr. Egal ob Anfaenger oder
              Profi, HYROX ist fuer alle zugaenglich und misst sich an deiner
              eigenen Zeit. Effektiv, fordernd und motivierend in einer
              unterstuetzenden Community.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: "Gezieltes Training",
                text: "Spezifische Vorbereitung auf alle 8 HYROX-Stationen plus Laufeinheiten. Funktionelle Kraft mit Ausdauer kombiniert.",
              },
              {
                icon: Zap,
                title: "HYROX365 zertifiziert",
                text: "Unsere Trainer sind HYROX365 Foundation zertifiziert und kennen jeden Aspekt des Wettkampfs — Luigi und Nicole fuehren dich sicher zum Race Day.",
              },
              {
                icon: Users,
                title: "Gruppen & 1:1",
                text: "Trainiere im HYROX-Gruppenkurs fuer Motivation oder 1:1 fuer maximale Performance und individuelle Rennstrategie.",
              },
              {
                icon: Trophy,
                title: "Race Day Ready",
                text: "Von der Technik bis zur Rennstrategie — wir bereiten dich komplett vor. Lass dich von Gleichgesinnten pushen und ueberschreite deine Grenzen.",
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
