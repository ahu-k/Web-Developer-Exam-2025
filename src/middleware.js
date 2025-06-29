import { NextResponse } from "next/server"

export function middleware(request) {
	if (!request.cookies.has("trainer_token") || !request.cookies.has("trainer_uid") ) {
		return NextResponse.redirect(new URL("/login", request.url))
	}
}

export const config = {
	matcher: "/schedule/:path*"
}