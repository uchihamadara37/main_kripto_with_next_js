import { NextResponse } from 'next/server'
 
export function middleware(request) {
  // Mendapatkan path yang sedang diakses
  const path = request.nextUrl.pathname

  // Mendapatkan token dari cookies (jika menggunakan cookie-based auth)
  const isAuthenticated = request.cookies.get('token')

  // Daftar public routes yang tidak perlu authentication
  const publicRoutes = ['/login', '/signup']
  
  // Jika user belum login dan mencoba akses route protected
  if (!isAuthenticated && !publicRoutes.includes(path)) {
    // Redirect ke halaman login
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Jika user sudah login dan mencoba akses login/signup
  if (isAuthenticated && publicRoutes.includes(path)) {
    // Redirect ke dashboard
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
  
  return NextResponse.next()
}
 
// Tentukan route mana saja yang akan diproteksi
export const config = {
  matcher: [
    // Route yang perlu diproteksi
    '/dashboard/:path*',
    '/profile/:path*',
    // Route public
    '/login',
    '/signup'
  ]
}