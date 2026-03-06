import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { Check, Leaf, BarChart3, Utensils, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Ernährungsberatung",
  description:
    "Professionelle Ernährungsberatung in St. Gallen. Massgeschneiderte Ernährungspläne für Abnehmen, Muskelaufbau und Wohlbefinden. Qualitop zertifiziert.",
};

const features = [
  {
    icon: Utensils,
    title: "Alltagstauglich",
    text: "Keine Crash-Diäten. Ernährungspläne, die in deinen Alltag passen und langfristig funktionieren.",
  },
  {
    icon: BarChart3,
    title: "Datenbasiert",
    text: "Basierend auf deiner InBody-Analyse und Stoffwechseldaten — keine Ratespiele.",
  },
  {
    icon: Leaf,
    title: "Nachhaltig",
    text: "Lerne, wie Ernährung funktioniert. Wir geben dir das Wissen, damit du langfristig selbstständig bleibst.",
  },
  {
    icon: Heart,
    title: "Wohlfühlen",
    text: "Mehr Energie, besserer Schlaf, weniger Stress — gute Ernährung verändert alles.",
  },
];

export default function ErnaehrungsberatungPage() {
  return (
    <>
      <PageHero
        badge="Ernährungsberatung"
        title="Ernährung, die zu dir passt."
        description="Dein Schlüssel zu nachhaltiger Veränderung. Ohne Verzicht, ohne Diät-Mythen — mit einem klaren Plan."
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Unser Ansatz
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-5xl">
              Kein Verzicht. Nur Strategie.
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Körperfett reduzieren, Muskeln aufbauen, dich wohlfühlen — alles
              beginnt mit der richtigen Ernährung. Unsere Beratung ist individuell,
              praxisnah und wissenschaftlich fundiert.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
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

      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
              Was beinhaltet die Beratung?
            </h2>
            <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
              {[
                "Persönliches Erstgespräch",
                "Analyse deiner aktuellen Ernährung",
                "Individueller Ernährungsplan",
                "Makronährstoff-Berechnung",
                "Einkaufslisten & Rezepte",
                "Regelmässige Follow-ups",
                "Anpassung bei Veränderungen",
                "Kombination mit Training möglich",
              ].map((item) => (
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

      <CTABanner
        title="Bereit für den Wandel?"
        description="Vereinbare ein kostenloses Beratungsgespräch und erfahre, wie die richtige Ernährung dein Leben verändern kann."
      />
    </>
  );
}
