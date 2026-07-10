import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // 1. Check for manual override via query string (great for local testing without CLI)
  // Example usage: localhost:3000/?country=AE
  const urlCountry = request.nextUrl.searchParams.get('country');

  // 2. Check Next.js official geo object, then fallback to various hosting provider headers
  const headerCountry = 
    request.geo?.country ||
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    request.headers.get('cloudfront-viewer-country');

  // 3. Fallback to default
  const country = urlCountry || headerCountry || 'IN';

  console.log(`[PROXY] Request to ${request.nextUrl.pathname}`);
  console.log(`[PROXY] Detected country: ${country} (url: ${urlCountry}, header: ${headerCountry})`);

  const response = NextResponse.next();

  response.cookies.set('x-country', country, {
    path: '/',
    maxAge: 3600,       // 1 hour cache
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    httpOnly: false,    // MUST be false for client-side JS to read it!
  });

  return response;
}

export const config = {
  // Run on all routes except Next.js internals and static assets
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
