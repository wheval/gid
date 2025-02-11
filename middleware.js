export function middleware(request) {
    const { pathname } = request.nextUrl
  
    // Convert the pathname to lowercase if it contains uppercase letters
    if (pathname !== pathname.toLowerCase()) {
      return Response.redirect(
        new URL(pathname.toLowerCase(), request.url)
      )
    }
  };
  
export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico|images/).*)'
};
