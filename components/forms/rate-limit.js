import 'server-only';
import { headers } from 'next/headers';

const RATE_WINDOW_MS = 10 * 60 * 1000;

const withinWindow = (times, now) => times.filter((t) => now - t < RATE_WINDOW_MS);

// Per-instance memory: a light brake on abuse, not a hard guarantee. A shared
// store (and bot protection) is the next step if spam becomes a problem.
export function createRateLimiter({ perIp, global }) {
  let recentByIp = new Map();
  let recentGlobal = [];

  return function isRateLimited(ip) {
    const now = Date.now();
    recentByIp = new Map(
      [...recentByIp]
        .map(([key, times]) => [key, withinWindow(times, now)])
        .filter(([, times]) => times.length > 0),
    );
    recentGlobal = withinWindow(recentGlobal, now);
    if (recentGlobal.length >= global) return true;
    const recent = ip ? recentByIp.get(ip) || [] : [];
    if (ip && recent.length >= perIp) return true;
    recentGlobal = [...recentGlobal, now];
    if (ip) recentByIp.set(ip, [...recent, now]);
    return false;
  };
}

// Vercel sets x-real-ip to the connecting client; the first x-forwarded-for
// entry is only a fallback because clients can supply it themselves.
export async function clientIp() {
  const h = await headers();
  return (
    h.get('x-real-ip') ||
    (h.get('x-forwarded-for') || '').split(',')[0].trim() ||
    null
  );
}
