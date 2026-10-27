import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/kostenloses-beratungsgespraech" },
  openGraph: pageOpenGraph("/kostenloses-beratungsgespraech"),
  title: "Kostenloses Beratungsgespräch — Alpha Sports",
  description:
    "Buche dein kostenloses Beratungsgespräch bei Alpha Sports St. Gallen. In 45 Minuten analysieren wir deine Ziele und erstellen deinen individuellen Plan.",
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
