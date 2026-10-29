import { NextRequest, NextResponse } from "next/server";

const COOKIE = "ara_concept_access";

export function middleware(req: NextRequest) {
  const key = process.env.ACCESS_KEY;
  const { pathname, searchParams } = req.nextUrl;

  // The gate itself must stay reachable.
  if (pathname === "/zugang") return NextResponse.next();

  // No key configured → everything is locked.
  if (!key) return NextResponse.rewrite(new URL("/zugang", req.url));

  // Invitation link: /?key=… → set cookie, drop the key from the URL.
  const supplied = searchParams.get("key");
  if (supplied && supplied === key) {
    const clean = req.nextUrl.clone();
    clean.searchParams.delete("key");
    const res = NextResponse.redirect(clean);
    res.cookies.set(COOKIE, key, {
      httpOnly: true,
      sameSite: "lax",
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
    return res;
  }

  if (req.cookies.get(COOKIE)?.value === key) return NextResponse.next();

  return NextResponse.rewrite(new URL("/zugang", req.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|api/img|fonts|logo|robots.txt|favicon.ico).*)"],
};
