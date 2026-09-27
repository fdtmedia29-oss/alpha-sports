"use client";

import { useEffect, useState } from "react";
import { GOOGLE_RATING_FALLBACK, GOOGLE_RATING_FEED, validRating, type GoogleRating } from "@/lib/googleRating";

let request: Promise<GoogleRating | null> | null = null;

export function useGoogleRating(): GoogleRating {
  const [value, setValue] = useState<GoogleRating>(GOOGLE_RATING_FALLBACK);
  useEffect(() => {
    let alive = true;
    request ??= fetch(GOOGLE_RATING_FEED)
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null);
    request.then((d) => {
      if (alive && validRating(d)) setValue({ rating: d.rating, count: d.count });
    });
    return () => {
      alive = false;
    };
  }, []);
  return value;
}

/** Sterne-Schnitt wie „5.0". */
export function GoogleRatingValue() {
  return <>{useGoogleRating().rating.toFixed(1)}</>;
}

/** Anzahl Bewertungen, mit `plus` abgerundet auf Zehner wie „70+". */
export function GoogleReviewCount({ plus = false }: { plus?: boolean }) {
  const { count } = useGoogleRating();
  return <>{plus ? `${Math.floor(count / 10) * 10}+` : count}</>;
}
