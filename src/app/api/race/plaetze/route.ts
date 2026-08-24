import { NextResponse } from "next/server";
import { belegung, anmeldungGeschlossen, ANMELDESCHLUSS } from "@/lib/race";

export const dynamic = "force-dynamic";
export const revalidate = 0;

/** Freie Startplätze pro Kategorie — die Seite fragt das beim Laden ab. */
export async function GET() {
  try {
    const kategorien = await belegung();
    return NextResponse.json(
      {
        ok: true,
        geschlossen: anmeldungGeschlossen(),
        anmeldeschluss: ANMELDESCHLUSS.toISOString(),
        kategorien,
        freiGesamt: kategorien.reduce((s, k) => s + k.frei, 0),
        plaetzeGesamt: kategorien.reduce((s, k) => s + k.plaetze, 0),
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (err) {
    console.error("[race] Belegung konnte nicht gelesen werden:", err);
    // Kein harter Fehler: die Seite zeigt dann einfach die statischen Zahlen.
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
