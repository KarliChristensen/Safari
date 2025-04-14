import { NextResponse } from "next/server";

const isBlocked = process.env.NEXT_PUBLIC_SITE_BLOCKED === "true";

export function middleware(request) {
  if (isBlocked) {
    const { pathname } = request.nextUrl;

    if (
      !pathname.startsWith("/_next/static/") &&
      !pathname.startsWith("/_next/image") &&
      !pathname.startsWith("/img/")
    ) {
      if (pathname !== "/") {
        console.log("Redirecting to / from:", pathname);
        return NextResponse.redirect(new URL("/", request.url));
      }
    }
  }

  return NextResponse.next();
}