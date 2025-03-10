import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const StoreCookie = await cookies();
  const token = StoreCookie.get("token");

  if (!token) return NextResponse.redirect(new URL("/login", request.url));

  let url = "";

  await fetch("http://localhost:8000/user/get_panel_url/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token.value}`,
    },
  })
    .then((res) => {
      if (res.ok) return res.json();

      return null;
    })
    .then((data) => {
      if (data) {
        url = data.url;
      }
    });

  if (url && url === request.nextUrl.pathname) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/user-panel/:path*"],
};
