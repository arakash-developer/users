
import { NextResponse } from "next/server";

export function middleware(req) {
  let islogin = false;
  if (islogin) {
    return NextResponse.next();
  } else {
    const url = req.nextUrl.clone();
    if (url.pathname === "/" || url.pathname === "/register") {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: "/dashboard",
};

