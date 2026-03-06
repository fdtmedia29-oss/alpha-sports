import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
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
    "Fitness Studio St. Gallen",
    "Ernährungsberatung St. Gallen",
    "Gruppenkurse St. Gallen",
    "HYROX Training",
    "InBody Analyse",
    "Online Coaching Schweiz",
    "Abnehmen St. Gallen",
    "Muskelaufbau",
    "Wohlfühlen",
    "Bauchfett reduzieren",
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
              "@type": "GymOrFitnessCenter",
              name: "Alpha Sports",
              description:
                "Individuelles Personal Training, Ernährungsberatung und Gruppenkurse im privaten Studio in St. Gallen.",
              url: "https://alpha-sports.ch",
              telephone: "+41763903679",
              email: "info@alpha-sports.ch",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Unterer Graben 21",
                addressLocality: "St. Gallen",
                postalCode: "9000",
                addressCountry: "CH",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 47.4245,
                longitude: 9.3767,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "80",
              },
              priceRange: "CHF 30 - CHF 1760",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "06:00",
                closes: "21:00",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} bg-white text-text antialiased`}>
        <Nav />
        <main className="min-h-screen bg-white pt-20 pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
        <WhatsAppButton />
      </body>
    </html>
  );
}
