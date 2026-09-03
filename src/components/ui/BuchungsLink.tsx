import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Link auf eine Buchung.
 *
 * Zeigt er nach aussen (nutrilize), öffnet er einen neuen Tab. Zeigt er auf
 * eine eigene Seite, bleibt es eine normale Next-Navigation. Dadurch reicht es,
 * in `lib/booking.ts` die URL zu tauschen — an den Buttons selbst muss dann
 * nichts mehr angefasst werden.
 */
export default function BuchungsLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
