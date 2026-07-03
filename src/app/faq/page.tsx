import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { faqSections } from "@/lib/content";

export const metadata: Metadata = {
  title: "Häufige Fragen (FAQ)",
  description:
    "Antworten auf die häufigsten Fragen zu Personal Training, Preisen, Ablauf, Gruppenkursen und Ernährungsberatung bei Alpha Sports in St. Gallen.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSections.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        compact
        centered
        badge="FAQ"
        title="Häufige Fragen"
        description="Die wichtigsten Antworten rund um Personal Training, Preise, Ablauf und Kurse bei Alpha Sports."
        ctaText="Beratung buchen"
        ctaHref="/kostenloses-beratungsgespraech"
        backgroundImage="/images/studio/studio-1.jpg"
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl">
          <FAQAccordion sections={faqSections} />
        </div>
      </section>

      <CTABanner
        title="Deine Frage ist nicht dabei?"
        description="Stell sie uns direkt im kostenlosen Beratungsgespräch oder per WhatsApp. Wir helfen dir gerne weiter."
      />
    </>
  );
}
