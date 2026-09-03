"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

/**
 * Link auf einen Abschnitt — als reiner Anker ("#buchen") oder mit Pfad
 * ("/gruppenkurse#pilates").
 *
 * WARUM ES DAS GIBT (03.09.2026, gemeldet von Luigi):
 * Mit `next/link` greift ein Sprung auf DIESELBE Seite nur EINMAL. Beim ersten
 * Klick setzt Next den Hash, beim zweiten ist der Hash schon derselbe — dann
 * gibt es keine Navigation mehr und damit auch keinen Sprung. Der Besucher
 * klickt und es passiert nichts.
 *
 * Hier scrollen wir in dem Fall selbst und schreiben den Hash nur nach. Zeigt
 * der Link auf eine ANDERE Seite, bleibt es eine ganz normale Next-Navigation.
 * Der Abstand zur fixen Navigation kommt aus `scroll-mt-*` am Zielabschnitt,
 * das respektiert `scrollIntoView` von selbst.
 */
export default function SectionLink({
  href,
  className,
  children,
  onClick,
}: {
  /** "#anker" oder "/pfad#anker". */
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const pfad = usePathname();

  const [ziel, anker] = href.split("#");
  // Gleiche Seite? Entweder reiner Anker, oder der Pfad stimmt mit dem aktuellen überein.
  const gleicheSeite = Boolean(anker) && (ziel === "" || ziel === pfad);

  function beiKlick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.();

    // Klicks mit Modifier (neuer Tab/Fenster) dem Browser überlassen
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

    const el = document.getElementById(anker);
    if (!el) return; // Anker fehlt: Normalverhalten des Browsers greifen lassen

    e.preventDefault();

    const sanft = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: sanft ? "smooth" : "auto", block: "start" });

    // Hash nachziehen, aber ohne History-Eintrag — sonst braucht der Zurück-Knopf
    // pro Klick einen Schritt.
    window.history.replaceState(null, "", `#${anker}`);
  }

  if (!gleicheSeite) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <a href={`#${anker}`} onClick={beiKlick} className={className}>
      {children}
    </a>
  );
}
