import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PASSWORD = 'empire2026';

// Routes that DON'T require authentication
const publicRoutes = [
  '/mapa-invisivel',
];

// Static assets and Next.js internals that don't require auth
const publicPatterns = [
  '/_next',
  '/images',
  '/favicon',
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.svg',
  '.ico',
  '.css',
  '.js',
  '.json',
  '.woff',
  '.woff2',
];

function isPublicRoute(pathname: string): boolean {
  // Check exact public routes
  if (publicRoutes.some(route => pathname === route || pathname.startsWith(route + '/'))) {
    return true;
  }

  // Check public patterns (static assets)
  if (publicPatterns.some(pattern => pathname.includes(pattern))) {
    return true;
  }

  return false;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  if (isPublicRoute(pathname)) {
    return NextResponse.next();
  }

  // Check for basic auth header
  const authHeader = request.headers.get('authorization');

  if (authHeader) {
    // Verify Basic Auth
    const authValue = authHeader.split(' ')[1];
    if (authValue) {
      const [user, pass] = atob(authValue).split(':');
      if (pass === PASSWORD) {
        // Auth successful - set cookie for future requests
        const response = NextResponse.next();
        response.cookies.set('empire-auth', 'authenticated', {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 60 * 60 * 24 * 7, // 1 week
          path: '/',
        });
        return response;
      }
    }
  }

  // Check for auth cookie
  const authCookie = request.cookies.get('empire-auth');
  if (authCookie?.value === 'authenticated') {
    return NextResponse.next();
  }

  // Return 401 with Basic Auth prompt
  return new NextResponse('Acesso Restrito', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Retiro Anti-Carnaval - Documentação Confidencial"',
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
