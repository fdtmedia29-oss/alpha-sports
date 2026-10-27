import type { Metadata } from "next";

/* Gemeinsame Open-Graph-Angaben (Vorschau beim Teilen in WhatsApp, Facebook usw.).
   Jede Seite setzt dazu ihre eigene og:url, gleich wie ihre canonical-Adresse.
   Seiten-openGraph ersetzt das aus layout.tsx komplett, darum hier gesammelt. */
export const sharedOpenGraph: NonNullable<Metadata["openGraph"]> = {
  title: "Alpha Sports — Personal Training Studio St. Gallen",
  description:
    "Individuelles Personal Training, Ernährungsberatung und Gruppenkurse im privaten Studio in St. Gallen. Krankenkassen anerkannt.",
  type: "website",
  locale: "de_CH",
  siteName: "Alpha Sports",
  images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Alpha Sports — Personal Training Studio St. Gallen",
    },
  ],
};

export function pageOpenGraph(path: string): Metadata["openGraph"] {
  return { ...sharedOpenGraph, url: path };
}
