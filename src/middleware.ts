import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check multiple auth methods for development
  const isAuthenticated = 
    request.cookies.get('isAuthenticated')?.value === 'true' || 
    request.headers.get('authorization') === 'true' ||
    request.cookies.get('next-auth.session-token') !== undefined;

  // Always allow access to admin in development
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }

  // If accessing admin page and not authenticated, redirect to login
  if (request.nextUrl.pathname.startsWith('/admin') && !isAuthenticated) {
    return NextResponse.redirect(new URL('/account', request.url));
  }

  // If already authenticated and trying to access login page, redirect to admin
  if (request.nextUrl.pathname === '/account' && isAuthenticated) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/account'],
};
