import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alpha Sports — Personal Training Studio St. Gallen",
  description:
    "Individuelles Personal Training, Ernährungsberatung und Gruppenkurse im privaten Studio in St. Gallen. Krankenkassen anerkannt.",
  openGraph: {
    title: "Alpha Sports — Personal Training Studio St. Gallen",
    description:
      "Individuelles Personal Training, Ernährungsberatung und Gruppenkurse im privaten Studio in St. Gallen.",
    type: "website",
    locale: "de_CH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} bg-white text-text antialiased`}>
        <Nav />
        <main className="min-h-screen bg-white pt-20 pb-20 lg:pb-0">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
