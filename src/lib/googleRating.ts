// Google-Bewertungen von Alpha Sports: aktueller Stand aus domai-ratings. Den füllt ein täglicher Abruf im AIOS
// (scripts/collect_google_ratings.py). Die Werte hier sind der Rückfall, falls die Datei nicht erreichbar ist.
// Seit 27.09.2026.
export const GOOGLE_RATING_FALLBACK = { rating: 5.0, count: 73 };
export const GOOGLE_RATING_FEED = "https://domai-ratings.vercel.app/alpha-sports.json";

export type GoogleRating = { rating: number; count: number };

export function validRating(d: unknown): d is GoogleRating {
  const r = d as GoogleRating | null;
  return !!r && r.count > 0 && r.rating > 0 && r.rating <= 5;
}

/** Für Server-Komponenten (strukturierte Daten): wird höchstens alle 12 Stunden neu geholt. */
export async function getGoogleRating(): Promise<GoogleRating> {
  try {
    const res = await fetch(GOOGLE_RATING_FEED, { next: { revalidate: 43200 }, signal: AbortSignal.timeout(4000) });
    const data = res.ok ? await res.json() : null;
    return validRating(data) ? { rating: data.rating, count: data.count } : GOOGLE_RATING_FALLBACK;
  } catch {
    return GOOGLE_RATING_FALLBACK;
  }
}
