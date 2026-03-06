import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { Check, Star } from "lucide-react";
import { pricing } from "@/lib/content";

export const metadata: Metadata = {
  title: "Preise",
  description:
    "Preise für Personal Training, Online Coaching, Gruppenkurse, Analysen und Ernährungsberatung bei Alpha Sports St. Gallen. Transparent und fair.",
};

export default function PreisePage() {
  return (
    <>
      <PageHero
        badge="Preise"
        title="Transparent. Fair. Flexibel."
        description="Alle Preise auf einen Blick. Keine versteckten Kosten. Beratungsgespräch immer kostenlos."
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-16">
            {pricing.map((category) => (
              <div key={category.title}>
                <h2 className="mb-8 text-2xl font-bold text-text">
                  {category.title}
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className={`relative rounded-2xl border p-6 transition-all hover:shadow-lg ${
                        item.popular
                          ? "border-orange bg-orange-light/30"
                          : "border-border bg-white"
                      }`}
                    >
                      {item.popular && (
                        <div className="absolute -top-3 right-4 flex items-center gap-1 rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white">
                          <Star className="h-3 w-3" />
                          Beliebt
                        </div>
                      )}
                      <h3 className="text-lg font-bold text-text">
                        {item.name}
                      </h3>
                      <div className="mt-2 flex items-baseline gap-1">
                        {item.price === "Kostenlos" ? (
                          <span className="text-2xl font-black text-orange">
                            Kostenlos
                          </span>
                        ) : (
                          <>
                            <span className="text-sm text-muted">CHF</span>
                            <span className="text-3xl font-black text-text">
                              {item.price}
                            </span>
                            {item.unit && (
                              <span className="text-sm text-muted">
                                {item.unit}
                              </span>
                            )}
                          </>
                        )}
                      </div>
                      {item.note && (
                        <p className="mt-2 text-sm text-muted">{item.note}</p>
                      )}
                      {item.includes && (
                        <ul className="mt-4 space-y-2 border-t border-border pt-4">
                          {item.includes.map((inc) => (
                            <li
                              key={inc}
                              className="flex items-center gap-2 text-sm text-text-secondary"
                            >
                              <Check className="h-3.5 w-3.5 text-orange" />
                              {inc}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-text">
            Krankenkassen anerkannt
          </h2>
          <p className="mt-4 text-text-secondary">
            Alpha Sports ist Qualitop, EMR und SwissActive zertifiziert. Je nach
            Zusatzversicherung kann ein Teil der Kosten für Personal Training und
            Gruppenkurse von deiner Krankenkasse übernommen werden.
          </p>
        </div>
      </section>

      <CTABanner
        title="Fragen zu den Preisen?"
        description="Im kostenlosen Beratungsgespräch finden wir das passende Angebot für dich und dein Budget."
      />
    </>
  );
}
