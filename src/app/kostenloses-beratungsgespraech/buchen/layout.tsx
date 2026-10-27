import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/kostenloses-beratungsgespraech/buchen" },
  openGraph: pageOpenGraph("/kostenloses-beratungsgespraech/buchen"),
  title: "Beratungsgespräch buchen",
  description:
    "Wähle einen Termin für dein kostenloses Beratungsgespräch bei Alpha Sports St. Gallen. 45 Minuten, kostenlos: Wir lernen uns kennen, klären dein Ziel und zeigen dir den schnellsten Weg dorthin.",
};

export default function BuchenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
