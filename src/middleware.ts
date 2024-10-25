import {EnumAppKeys} from "@/enums";

import CookiesHelper from "@/helpers/CookiesHelper";

import {NextFetchEvent, NextMiddleware, NextRequest, NextResponse} from "next/server";

function middleware() {
  return NextResponse.next();
}

//  This is a middleware function in Next.js that checks if a user is authenticated and redirects them accordingly.
const withAuthMiddleware = (next: NextMiddleware): NextMiddleware => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    // get token
    const isAuthenticated = CookiesHelper.hasCookie(EnumAppKeys.USER_DATA, {req: request});

    const inAuthPage = request.nextUrl.pathname.includes("auth");

    if (isAuthenticated && inAuthPage) {
      return NextResponse.redirect(new URL("/", request.url));
    } else if (!isAuthenticated && !inAuthPage) {
      return NextResponse.redirect(new URL("/auth", request.url));
    }

    return next(request, _next);
  };
};

export default withAuthMiddleware(middleware);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public/*).*)"],
};
