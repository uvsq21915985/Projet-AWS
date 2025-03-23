import { validateJWT } from '@/services/auth'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// to handle redirection of user when not authentificated
export async function middleware(request: NextRequest) {

    const validate = await validateJWT();
    if (!validate.ok ){ return NextResponse.redirect(new URL('/auth/login', request.url))}
  else{ return NextResponse.next();}
}
 
export const config = {
    matcher: [
      "/dashboard/:path*",
      "/about/",
      "/team/",
      "/userPage/",
      "/createVideoConference/",
      "/videoConference/",
      "/room/:path",
    ],
  };