import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Erfolgsgeschichten",
  description:
    "Erfolgsgeschichten und Testimonials von Alpha Sports Kunden. Abnehmen, Muskelaufbau, Schmerzfreiheit — echte Ergebnisse von echten Menschen.",
};

export default function ErfolgsgeschichtenPage() {
  return (
    <>
      <PageHero
        badge="Erfolgsgeschichten"
        title="Echte Ergebnisse. Echte Menschen."
        description="Was unsere Kunden über ihre Transformation bei Alpha Sports sagen."
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-lg"
              >
                <Quote className="absolute right-6 top-6 h-8 w-8 text-surface" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mt-6 text-base leading-relaxed text-text-secondary">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-6">
                  <div className="font-semibold text-text">{t.name}</div>
                  <div className="mt-1 text-sm font-medium text-orange">
                    {t.result}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-bg-alt p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold text-text">
              5.0 auf Google — 68 Bewertungen
            </h2>
            <p className="mt-4 text-text-secondary">
              Unsere Kunden bewerten uns mit 5.0 von 5 Sternen.
              Überzeuge dich selbst auf Google Maps.
            </p>
            <a
              href="https://www.google.com/maps/place/Alpha+Sports"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-dark px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-dark-surface"
            >
              Google Bewertungen lesen
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        title="Werde die nächste Erfolgsgeschichte."
        description="Starte jetzt mit einem kostenlosen Beratungsgespräch und schreibe deine eigene Story."
      />
    </>
  );
}
