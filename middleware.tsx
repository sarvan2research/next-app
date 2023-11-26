// Default next auth implementation
export { default } from "next-auth/middleware";

//import { middleware } from "next-auth/middleware";
// export default middleware

// // middleware is casesensitive file used to redirect  or control page access request based on certain params
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }

export const config = {
  // * zero or more
  // + one one or more
  // ? zero or one
  matcher: ["/users/:id*"],
};
