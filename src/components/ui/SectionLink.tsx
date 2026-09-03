"use client";

import type { MouseEvent, ReactNode } from "react";

/**
 * Link auf einen Abschnitt derselben Seite (#anker).
 *
 * WARUM ES DAS GIBT (03.09.2026, gemeldet von Luigi):
 * Mit `next/link` funktionierte so ein Anker-Link nur EINMAL. Beim ersten Klick
 * setzt Next den Hash, beim zweiten Klick ist der Hash schon derselbe — dann
 * gibt es keine Navigation mehr und damit auch keinen Sprung. Der Besucher
 * klickt und es passiert nichts.
 *
 * Hier scrollen wir selbst und schreiben den Hash nur nach. Damit greift der
 * Button jedes Mal, egal wie oft und egal wo auf der Seite man gerade steht.
 * Der Abstand zur fixen Navigation kommt aus `scroll-mt-*` am Zielabschnitt,
 * das respektiert `scrollIntoView` von selbst.
 */
export default function SectionLink({
  href,
  className,
  children,
  ariaLabel,
}: {
  /** Anker auf derselben Seite, z. B. "#buchen". */
  href: `#${string}`;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  function beiKlick(e: MouseEvent<HTMLAnchorElement>) {
    // Klicks mit Modifier (neuer Tab/Fenster) dem Browser überlassen
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

    const ziel = document.getElementById(href.slice(1));
    if (!ziel) return; // Anker fehlt: Normalverhalten des Browsers greifen lassen

    e.preventDefault();

    const sanft = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    ziel.scrollIntoView({ behavior: sanft ? "smooth" : "auto", block: "start" });

    // Hash nachziehen, aber ohne History-Eintrag — sonst braucht der Zurück-Knopf
    // pro Klick einen Schritt.
    window.history.replaceState(null, "", href);
  }

  return (
    <a href={href} onClick={beiKlick} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
