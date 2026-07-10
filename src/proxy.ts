import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Proxy — runs on every request at Vercel's edge network.
 * (Previously called "middleware" — renamed to "proxy" in Next.js 16)
 *
 * Detects the visitor's country via `request.geo.country` (provided
 * automatically by Vercel, no configuration needed) and stores it
 * in a lightweight cookie so client components can read it without
 * any extra API call.
 *
 * Country codes are ISO 3166-1 alpha-2 (e.g. "AE", "IN", "US").
 * Falls back to "IN" (India) when geo is unavailable (local dev).
 */
export function proxy(request: NextRequest) {
  // In Next.js 16+, geo data is provided via Vercel request headers
  // (request.geo was removed). Falls back to 'IN' locally.
  const country = request.headers.get('x-vercel-ip-country') ?? 'IN';

  const response = NextResponse.next();

  response.cookies.set('x-country', country, {
    path: '/',
    maxAge: 3600,       // 1 hour cache — re-evaluated on next visit
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });

  return response;
}

export const config = {
  // Run on all routes except Next.js internals and static assets
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
