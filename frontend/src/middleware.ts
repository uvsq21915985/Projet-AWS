import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import LocalStorage from './app/hooks/LocalStorage'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    const acces = request.cookies.get('access_token');
    console.log("ACCES TOKEN VALUE  IS NULL ? : " , acces==null);
    if (!acces)
      return NextResponse.redirect(new URL('/auth/login', request.url))
else return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [ '/joinRoom','/room:path*','/videoConference','/createVideoConference','/userPage','/dashboard/:path*',]
}
