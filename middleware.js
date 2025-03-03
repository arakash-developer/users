import { NextResponse } from "next/server";

export function middleware(req) {
  console.log("Middleware called");

  return NextResponse.next();
}

