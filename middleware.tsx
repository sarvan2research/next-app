import { NextRequest, NextResponse } from "next/server";

// middleware is casesensitive file used to redirect  or control page access request based on certain params
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/new-page", request.url));
}

export const config = {
  // * zero or more
  // + one one or more
  // ? zero or one
  matcher: ["/users/:id*"],
};
