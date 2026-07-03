import FAQItems, { type FAQItem } from "@/components/sections/FAQItems";

interface FAQSection {
  category: string;
  items: FAQItem[];
}

export default function FAQAccordion({ sections }: { sections: readonly FAQSection[] }) {
  return (
    <div className="space-y-14">
      {sections.map((section) => (
        <div key={section.category}>
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-text md:text-3xl">
            {section.category}
          </h2>
          <FAQItems items={section.items} idPrefix={section.category} />
        </div>
      ))}
    </div>
  );
}
