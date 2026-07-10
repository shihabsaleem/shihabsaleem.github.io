import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export function proxy(request: NextRequest) {

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
