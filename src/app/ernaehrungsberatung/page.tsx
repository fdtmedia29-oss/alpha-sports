import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { Check, Leaf, BarChart3, Utensils, Heart, Star, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Ernaehrungsberatung",
  description:
    "Professionelle Ernaehrungsberatung in St. Gallen. Massgeschneiderte Ernaehrungsplaene fuer Abnehmen, Muskelaufbau und Wohlbefinden. Messbasierte Strategien, individuelle Rezepte, Tracking-App. Qualitop zertifiziert.",
};

const features = [
  {
    icon: Utensils,
    title: "Alltagstauglich",
    text: "Keine Crash-Diaeten. Ernaehrungsplaene, die in deinen Alltag passen und langfristig funktionieren. Schluss mit Diaet-Mythen und Verzicht.",
  },
  {
    icon: BarChart3,
    title: "Messbasiert",
    text: "Basierend auf deinen persoenlichen Messdaten, Grundumsatz und Energiebedarf — keine Ratespiele. Individuelle Makronaehrstoff-Verteilung berechnet.",
  },
  {
    icon: Leaf,
    title: "Nachhaltig",
    text: "Lerne, wie Ernaehrung funktioniert. Wir geben dir das Wissen, Sport- und Alltagsernaehrung langfristig selbststaendig umzusetzen.",
  },
  {
    icon: Heart,
    title: "Mehr Energie & Selbstvertrauen",
    text: "Neues Koerperbewusstsein, mehr Energie, besserer Schlaf, weniger Stress — gute Ernaehrung veraendert alles. Erreiche deine koerperliche Bestform.",
  },
];

const benefits = [
  "Mehr Energie und Selbstvertrauen",
  "Neues Koerperbewusstsein",
  "Sport- und Alltagsernaehrung langfristig umsetzen",
  "Koerperliche Bestform erreichen",
  "Schluss mit Diaeten und Ernaehrungsmythen",
  "Persoenliche Coaching-Unterstuetzung",
];

export default function ErnaehrungsberatungPage() {
  return (
    <>
      <PageHero
        badge="Ernaehrungsberatung"
        title="Dein Schluessel zur nachhaltigen Veraenderung."
        description="Koerperfett reduzieren, Muskeln aufbauen, dich wohlfuehlen — alles beginnt mit der richtigen Ernaehrung. Ohne Verzicht, ohne Diaet-Mythen — mit einem klaren Plan."
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
              Unsere Ernaehrungsberatung hilft dir, Koerperfett zu reduzieren,
              Muskeln effizienter aufzubauen und gesund zu essen — trotz vollem
              Alltag. Messbasierte Strategien statt Schaetzungen, individuell auf
              dich abgestimmt und wissenschaftlich fundiert.
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

      {/* Benefits and what's included */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange">
                Das erreichst du
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
                Mehr als nur Ernaehrungsplaene.
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                Egal wo du gerade stehst — ob du deine Fitnessreise gerade erst
                beginnst oder schon mehrere Ansaetze ausprobiert hast. Wir holen
                dich ab und begleiten dich zum Ziel.
              </p>
              <div className="mt-8 space-y-4">
                {benefits.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-light">
                      <Check className="h-3.5 w-3.5 text-orange" />
                    </div>
                    <span className="text-sm font-medium text-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-lg font-bold text-text">
                Was beinhaltet die Beratung?
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Persoenliche Messdaten-Erfassung",
                  "Grundumsatz & Energiebedarf berechnen",
                  "Individuelle Makronaehrstoff-Verteilung",
                  "Grosse Auswahl individueller Rezepte",
                  "Alpha Sports Tracking-App Zugang",
                  "Trainingsempfehlungen",
                  "Ernaehrungsdossier",
                  "Kombination mit Training moeglich",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-light">
                      <Check className="h-3.5 w-3.5 text-orange" />
                    </div>
                    <span className="text-sm font-medium text-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
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
              Ernaehrungsberatung — flexibel buchbar.
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-8">
              <h3 className="text-xl font-bold text-text">Einzelsession</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-sm text-muted">CHF</span>
                <span className="text-3xl font-black text-text">150</span>
                <span className="text-sm text-muted">/Stunde</span>
              </div>
              <p className="mt-4 text-sm text-text-secondary">
                Erstgespraech, Analyse und individuelle Beratung in einer Session.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Persoenliches Erstgespraech",
                  "Analyse deiner aktuellen Ernaehrung",
                  "Individuelle Empfehlungen",
                  "Fuer alle Altersgruppen geeignet",
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

            <div className="relative rounded-2xl border border-orange bg-orange-light/30 p-8">
              <div className="absolute -top-3 right-4 flex items-center gap-1 rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white">
                <Star className="h-3 w-3" />
                Empfohlen
              </div>
              <h3 className="text-xl font-bold text-text">Shape Light Paket</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-sm text-muted">CHF</span>
                <span className="text-3xl font-black text-text">592.40</span>
              </div>
              <p className="mt-4 text-sm text-text-secondary">
                Das umfassende Paket fuer nachhaltige Ernaehrungsumstellung.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "2 Stunden Beratung",
                  "Koerperanalysen",
                  "Ernaehrungsdossier",
                  "Trainingsempfehlungen",
                  "Individuelle Rezepte",
                  "Tracking-App Zugang",
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
            Die Alpha Sports Tracking-App liefert dir Rezepte mit optimaler
            Makronaehrstoff-Verteilung, einen Ueberblick ueber dein taegliches
            Kalorienbudget und viele weitere nuetzliche Tools und Informationen.
          </p>
        </div>
      </section>

      <CTABanner
        title="Bereit fuer den Wandel?"
        description="Vereinbare ein kostenloses Beratungsgespraech und erfahre, wie die richtige Ernaehrung dein Leben veraendern kann."
      />
    </>
  );
}
