import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQItems, { type FAQItem } from "@/components/sections/FAQItems";

export default function PageFAQ({
  items,
  title = "Häufige Fragen.",
  bg = "white",
  idPrefix = "page-faq",
}: {
  items: readonly FAQItem[];
  title?: string;
  bg?: "white" | "alt";
  idPrefix?: string;
}) {
  return (
    <section className={`section-padding ${bg === "alt" ? "bg-bg-alt" : "bg-white"}`}>
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
            {title}
          </h2>
        </div>
        <FAQItems items={items} idPrefix={idPrefix} />
        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="group inline-flex items-center gap-2 text-base font-semibold text-orange transition-colors hover:text-orange/80"
          >
            Alle Fragen ansehen
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
