import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken")?.value;
  console.log("Token from middleware:", token);
  console.log(token);

  if (!token) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/vesselAssessment/:path*",
    "//",
    "/assessmentCompare/:path*",
    "/assessmentCategory/:path*",
    "/shipSection/:path*",
    "/interval/:path*",
  ],
};