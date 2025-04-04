import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getUser } from "./actions/actions"

// This middleware ensures that the admin panel is completely separate from the main website
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const session = await getUser() 

  // If accessing admin routes, ensure they use the admin layout
  if (pathname.startsWith("/admin")) {

    if(!session) {
      const url = request.nextUrl.clone()
      url.pathname = "/"
      return NextResponse.redirect(url)
    }

    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}

