import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { Check, Star, Shield } from "lucide-react";
import { pricing } from "@/lib/content";

export const metadata: Metadata = {
  title: "Preise",
  description:
    "Preise fuer Personal Training, Online Coaching, Gruppenkurse, Analysen, Ernaehrungsberatung und Add-On Pakete bei Alpha Sports St. Gallen. Transparent und fair. Krankenkassen anerkannt.",
};

export default function PreisePage() {
  return (
    <>
      <PageHero
        badge="Preise"
        title="Transparent. Fair. Flexibel."
        description="Alle Preise auf einen Blick. Keine versteckten Kosten. Beratungsgespraech immer kostenlos. Stempelkarten 12 Monate gueltig."
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
                        ) : item.price === "Auf Anfrage" ? (
                          <span className="text-xl font-black text-orange">
                            Auf Anfrage
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

      {/* Discounted trainers note */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-8">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-orange" />
                <h2 className="text-xl font-bold text-text">
                  Krankenkassen anerkannt
                </h2>
              </div>
              <p className="mt-4 text-text-secondary">
                Alpha Sports ist Qualitop, EMR und SwissActive zertifiziert. Je nach
                Zusatzversicherung kann ein Teil der Kosten fuer Personal Training und
                Gruppenkurse von deiner Krankenkasse uebernommen werden.
              </p>
              <p className="mt-2 text-sm text-muted">
                Informiere dich auf qualitop.ch ueber moegliche finanzielle
                Unterstuetzung.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-8">
              <h2 className="text-xl font-bold text-text">
                Hinweise zu den Preisen
              </h2>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  Stempelkarten sind 12 Monate gueltig
                </li>
                <li className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  Alle 1:1 Sessions inkl. Protein Shake, Sportgetraenk und Handtuch-Service
                </li>
                <li className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  Verguenstigte Tarife bei Trainern Isabell/David (CHF 10–15 weniger pro Stunde)
                </li>
                <li className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  Analysen als Add-On zu anderen Leistungen guenstiger buchbar
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Fragen zu den Preisen?"
        description="Im kostenlosen Beratungsgespraech finden wir das passende Angebot fuer dich und dein Budget."
      />
    </>
  );
}
