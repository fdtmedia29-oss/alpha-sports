// Lightweight per-IP rate limiter for the public /api/chat endpoint.
//
// This is a best-effort, in-memory limiter: on serverless it only bounds
// traffic within a single warm instance. Combined with the hard input caps and
// the capped max_output_tokens in the route, it keeps abuse cost low for a
// low-traffic client site. Upgrade path for real enforcement: Vercel KV /
// Upstash Ratelimit (swap this module, keep the same signature).

type Hit = { count: number; resetAt: number };

const WINDOW_MS = 5 * 60_000; // 5 minutes
const MAX_HITS = 30; // requests per IP per window

const buckets = new Map<string, Hit>();

export function rateLimit(ip: string): { ok: boolean; retryAfter: number } {
  const now = Date.now();
  const hit = buckets.get(ip);

  if (!hit || now > hit.resetAt) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, retryAfter: 0 };
  }

  hit.count += 1;
  if (hit.count > MAX_HITS) {
    return { ok: false, retryAfter: Math.ceil((hit.resetAt - now) / 1000) };
  }
  return { ok: true, retryAfter: 0 };
}

// Occasionally evict stale buckets so the map can't grow unbounded.
export function sweep(): void {
  const now = Date.now();
  for (const [ip, hit] of buckets) {
    if (now > hit.resetAt) buckets.delete(ip);
  }
}
