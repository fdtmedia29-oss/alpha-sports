import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import PhotoCarousel from "@/components/ui/PhotoCarousel";
import { Check, Leaf, BarChart3, Utensils, Heart, Star, Smartphone, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Ernährungsberatung",
  description:
    "Professionelle Ernährungsberatung in St. Gallen. Massgeschneiderte Ernährungsplaene für Abnehmen, Muskelaufbau und Wohlbefinden. Qualitop zertifiziert.",
};

const keyBenefits = [
  {
    icon: Heart,
    title: "Gesund abnehmen & wohlfühlen",
    text: "Nachhaltige Ernährungsstrategien, die in deinen Alltag passen. Kein Verzicht, keine Crash-Diäten — sondern ein klarer Plan für dein Wohlfühlkörper.",
  },
  {
    icon: Utensils,
    title: "Messen statt raten",
    text: "Wir erstellen dir eine individuelle Ernährungsstrategie basierend auf deinem Grundumsatz, deiner Körperzusammensetzung und deinen Leistungsparametern — um zu garantieren, dass wir dich auf schnellstem Weg zu deinem Ziel begleiten.",
  },
  {
    icon: Zap,
    title: "Stoffwechsel-Optimierung",
    text: "Mit unserer Stoffwechselanalyse optimieren wir deine Ernährung für maximale Energie und Effizienz.",
  },
  {
    icon: Leaf,
    title: "Mehr Energie",
    text: "Neues Körperbewusstsein, mehr Energie, besserer Schlaf, weniger Stress — gute Ernährung verändert alles. Erreiche deine körperliche Bestform.",
  },
];

export default function ErnährungsberatungPage() {
  return (
    <>
      <PageHero
        badge="Ernährungsberatung"
        title="Dein Schlüssel zur nachhaltigen Veränderung."
        description="Entdecke, wie eine gezielte Ernährungsstrategie dein Leben verbessert."
        ctaText="Beratung buchen"
        ctaHref="/kostenloses-beratungsgespraech"
      />

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-text-secondary">
              Entdecke, wie eine gezielte Ernährungsstrategie dein Leben
              verbessert. Mit unserer individuellen Beratung optimierst du deinen
              Stoffwechsel, erreichst deine Fitnessziele und findest deine perfekte
              Balance für Gesundheit und dein Wohlbefinden. Egal, ob Fettabbau,
              Muskelaufbau oder einfach mehr Energie — wir begleiten dich Schritt
              für Schritt.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Unser Ansatz
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-5xl">
              Was dich erwartet.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {keyBenefits.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-light">
                  <f.icon className="h-5 w-5 text-orange" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-text">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {f.text}
                </p>
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
              Ernährungsberatung — flexibel buchbar.
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {/* Einzelsession */}
            <div className="rounded-2xl border border-border bg-white p-8">
              <h3 className="text-xl font-bold text-text">Einzelsession</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-sm text-muted">CHF</span>
                <span className="text-3xl font-black text-text">150</span>
                <span className="text-sm text-muted">/Stunde</span>
              </div>
              <p className="mt-4 text-sm text-text-secondary">
                Erstgespräch, Analyse und individuelle Beratung in einer Session.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Persönliches Erstgespräch",
                  "Analyse deiner aktuellen Ernährung",
                  "Individuelle Empfehlungen",
                  "Für alle Altersgruppen geeignet",
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

            {/* Shape Light */}
            <div className="rounded-2xl border border-border bg-white p-8">
              <h3 className="text-xl font-bold text-text">Alpha Sports Shape Light</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-sm text-muted">CHF</span>
                <span className="text-3xl font-black text-text">592.40</span>
              </div>
              <p className="mt-4 text-sm text-text-secondary">
                Das umfassende Paket für nachhaltige Ernährungsumstellung.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "2h Ernährungsberatung",
                  "1x Leistungsanalyse",
                  "1x Stoffwechsel- und Stressanalyse",
                  "1x InBody Körperanalyse",
                  "Ernährungsdossier",
                  "Trainingsempfehlung",
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

            {/* Shape Plus */}
            <div className="relative rounded-2xl border border-orange bg-orange-light/30 p-8">
              <div className="absolute -top-3 right-4 flex items-center gap-1 rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white">
                <Star className="h-3 w-3" />
                Empfohlen
              </div>
              <h3 className="text-xl font-bold text-text">Alpha Sports Shape Plus</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-sm text-muted">CHF</span>
                <span className="text-3xl font-black text-text">389.50</span>
                <span className="text-sm text-muted">/Monat</span>
              </div>
              <p className="mt-4 text-sm text-text-secondary">
                Das Premium-Paket mit laufender Betreuung und Erfolgskontrolle.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "4x InBody Analyse",
                  "4x Erfolgsgespräch à 15 Min.",
                  "1x Stoffwechsel- und Stressanalyse",
                  "4 Körpervermessungen + Vorher-Nachher-Fotos",
                  "Ernährungsberatung inkl. Dossier",
                  "3 Ernährungspläne",
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
        </div>
      </section>

      {/* App tracking */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Smartphone className="h-12 w-12 text-orange" />
          </div>
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-text md:text-3xl">
            Ergebnisse direkt in der App.
          </h2>
          <p className="mt-4 text-text-secondary">
            Die Alpha Sports Tracking-App liefert dir Rezepte, Ernährungspläne und Trainingsempfehlungen, welche individuell auf dich angepasst sind.
          </p>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <PhotoCarousel
            title="Ernährungsberatung"
            images={[
              "/images/ernaehrung/food-1898194-1280.jpg",
              "/images/ernaehrung/food-3654199-1280.jpg",
              "/images/ernaehrung/design-ohne-titel.png",
            ]}
          />
        </div>
      </section>

      <CTABanner
        title="Bereit für den Wandel?"
        description="Vereinbare jetzt ein kostenloses Beratungsgespräch und erfahre, wie die richtige Ernährung dein Leben verändert."
      />
    </>
  );
}
