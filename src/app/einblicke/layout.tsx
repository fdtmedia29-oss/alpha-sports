import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Einblicke ins Studio",
  description:
    "Einblicke in das Alpha Sports Personal Training Studio in St. Gallen. Privat, modern und voll ausgestattet. Video-Testimonials und Studio-Galerie.",
};

export default function EinblickeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
