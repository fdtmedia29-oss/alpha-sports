import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

import WhatsAppButton from "@/components/layout/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alpha Sports — Personal Training Studio St. Gallen",
    template: "%s | Alpha Sports St. Gallen",
  },
  description:
    "Individuelles Personal Training, Ernährungsberatung und Gruppenkurse im privaten Studio in St. Gallen. Krankenkassen anerkannt. Jetzt kostenloses Beratungsgespräch buchen.",
  keywords: [
    "Personal Training St. Gallen",
    "Personal Trainer St. Gallen",
    "Personal Training Studio St. Gallen",
    "Fitness Studio St. Gallen",
    "Privates Fitness Studio St. Gallen",
    "Ernährungsberatung St. Gallen",
    "Gruppenkurse St. Gallen",
    "HYROX Training St. Gallen",
    "InBody Analyse St. Gallen",
    "Körperanalyse St. Gallen",
    "Online Coaching Schweiz",
    "Abnehmen St. Gallen",
    "Muskelaufbau St. Gallen",
    "Wohlfühlen",
    "Bauchfett reduzieren",
    "Functional Training St. Gallen",
    "Individuelles Training St. Gallen",
    "Fitness Coach St. Gallen",
    "Krankenkassen anerkannt Training",
  ],
  openGraph: {
    title: "Alpha Sports — Personal Training Studio St. Gallen",
    description:
      "Individuelles Personal Training, Ernährungsberatung und Gruppenkurse im privaten Studio in St. Gallen. Krankenkassen anerkannt.",
    type: "website",
    locale: "de_CH",
    siteName: "Alpha Sports",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://alpha-sports.ch",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["GymOrFitnessCenter", "HealthClub"],
              name: "Alpha Sports Personal Training",
              description:
                "Individuelles Personal Training, Ernährungsberatung und Gruppenkurse im privaten Studio in St. Gallen. Krankenkassen anerkannt.",
              url: "https://alpha-sports.ch",
              telephone: "+41763903679",
              email: "info@alpha-sports.ch",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Unterer Graben 21",
                addressLocality: "St. Gallen",
                addressRegion: "SG",
                postalCode: "9000",
                addressCountry: "CH",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 47.427676,
                longitude: 9.374643,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "68",
                bestRating: "5",
              },
              priceRange: "CHF 30 - CHF 1760",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Dienstleistungen",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Personal Training",
                      description: "1:1 Personal Training im privaten Studio in St. Gallen",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Online Coaching",
                      description: "12-Wochen Online Coaching Programme mit persönlicher Betreuung",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Ernährungsberatung",
                      description: "Individuelle Ernährungsberatung in St. Gallen",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Gruppenkurse",
                      description: "Bootcamp, HIIT Boxing, Yoga, Pilates und mehr",
                    },
                  },
                ],
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "06:00",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday", "Sunday"],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
              sameAs: [
                "https://instagram.com/alpha_sports_studio",
                "https://facebook.com/Alpha-Sports-Studio",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} bg-white text-text antialiased`}>
        <Nav />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
