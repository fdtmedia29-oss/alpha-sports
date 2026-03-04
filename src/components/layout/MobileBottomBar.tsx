"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/content";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-3 border-t border-border bg-white/95 px-4 py-3 backdrop-blur-xl lg:hidden">
      <a
        href={`tel:${siteConfig.phone}`}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-dark hover:bg-bg-alt"
        aria-label="Anrufen"
      >
        <Phone className="h-5 w-5" />
      </a>
      <Link
        href={siteConfig.bookingUrl}
        className="flex h-12 flex-1 items-center justify-center rounded-full bg-dark text-sm font-semibold text-white transition-colors hover:bg-dark-surface"
      >
        Kostenlos beraten lassen
      </Link>
    </div>
  );
}
