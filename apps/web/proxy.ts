import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { loginPath, signUpPath } from './paths'
import { getSessionCookie } from 'better-auth/cookies'

const publicRoutes = [loginPath(), signUpPath()]

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next()
  }

  const sessionCookie = getSessionCookie(request)

  if (!sessionCookie) return NextResponse.redirect(new URL(loginPath(), request.url));

  return NextResponse.next()
}


export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\.png$).*)',
  ],
}