export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Skip for static files, images, and Vercel paths
  if (
    pathname.startsWith('/_vercel') ||
    pathname.includes('/_next/') ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|webp)$/)
  ) {
    return;
  }

  // Convert the pathname to lowercase if it contains uppercase letters
  if (pathname !== pathname.toLowerCase()) {
    return Response.redirect(
      new URL(pathname.toLowerCase(), request.url)
    )
  }
};

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|_vercel|favicon.ico|public/|assets/|images/).*)'
  ]
};
