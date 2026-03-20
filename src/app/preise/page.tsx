import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import PricingTabs from "@/components/sections/PricingTabs";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Preise",
  description:
    "Preise für Personal Training, Online Coaching, Gruppenkurse, Trainingspakete, Analysen, Ernährungsberatung und mehr bei Alpha Sports St. Gallen. Transparent und fair. Krankenkassen anerkannt.",
};

export default function PreisePage() {
  return (
    <>
      <PageHero
        badge="Preise"
        title="Investiere in dich selbst."
        description="Beratungsgespräch immer kostenlos. Stempelkarten 12 Monate gültig."
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-4xl">
          <PricingTabs />
        </div>
      </section>

      {/* Notes */}
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
                Alpha Sports ist Qualitop zertifiziert. Je nach
                Zusatzversicherung kann ein Teil der Kosten für Personal Training und
                Gruppenkurse von deiner Krankenkasse übernommen werden.
              </p>
              <p className="mt-2 text-sm text-muted">
                Informiere dich auf qualitop.ch über mögliche finanzielle
                Unterstützung.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-8">
              <h2 className="text-xl font-bold text-text">
                Hinweise zu den Preisen
              </h2>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  Stempelkarten sind 12 Monate gültig
                </li>
                <li className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  Alle 1:1 Sessions inkl. 1 Proteinshake, 1 Sportgetränk und Handtuchservice
                </li>
                <li className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  Analysen als Add-On zu anderen Leistungen günstiger buchbar
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Fragen zu den Preisen?"
        description="Im kostenlosen Beratungsgespräch finden wir das passende Angebot für dich und dein Budget."
      />
    </>
  );
}
