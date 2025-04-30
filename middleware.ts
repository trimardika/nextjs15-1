import { NextResponse, type NextRequest } from "next/server";
import { utils } from "./app/lib/var/globalVar";
// import { decodeJWT } from "./app/lib/fn/globalFn";

export function middleware(request: NextRequest) {

  const { pathname } = request.nextUrl;
  const theCookie = request.cookies.get(utils.cookieName.login);

  if ((pathname.length === 1) && pathname.match("/") && (theCookie?.value)) {
    try {
      const decodedCookie = JSON.parse(atob(theCookie?.value.split('.')[1]));
      console.log('kuki:', JSON.stringify(decodedCookie.syswebappsl));
    } catch (error) {
      console.log('kuki err catch');
    }

    // return NextResponse.redirect(new URL("/dashboard/sub1", request.nextUrl));
  }

  if (pathname.startsWith("/dashboard/sub1") && (!theCookie?.value)) {
    console.log('ini middleware', pathname)

    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
}