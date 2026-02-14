import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PASSWORD = 'empire2026';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public routes - no auth required
  if (pathname === '/mapa-invisivel' || pathname.startsWith('/mapa-invisivel/')) {
    return NextResponse.next();
  }

  // Check for auth cookie first (faster)
  const authCookie = request.cookies.get('empire-auth');
  if (authCookie?.value === 'authenticated') {
    return NextResponse.next();
  }

  // Check for basic auth header
  const authHeader = request.headers.get('authorization');

  if (authHeader?.startsWith('Basic ')) {
    try {
      const authValue = authHeader.split(' ')[1];
      const decoded = atob(authValue);
      const parts = decoded.split(':');
      const pass = parts[1] || parts[0];

      if (pass === PASSWORD) {
        const response = NextResponse.next();
        response.cookies.set('empire-auth', 'authenticated', {
          httpOnly: true,
          secure: true,
          sameSite: 'lax',
          maxAge: 60 * 60 * 24 * 7,
          path: '/',
        });
        return response;
      }
    } catch (e) {
      // Invalid auth header, continue to prompt
    }
  }

  // Return auth prompt
  return new NextResponse('Acesso Restrito', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Retiro Anti-Carnaval"',
      'Content-Type': 'text/plain',
    },
  });
}

export const config = {
  matcher: [
    // Match all paths except api, _next, static files, and mapa-invisivel
    '/((?!api|_next|.*\\..*|mapa-invisivel).*)',
  ],
};
