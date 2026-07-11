import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/kostenloses-beratungsgespraech/buchen" },
};

export default function BuchenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
