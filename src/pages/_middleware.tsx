import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(_req: NextRequest, _ev: NextFetchEvent) {
  const ContentSecurityPolicy = `
    default-src 'self' v3.dfweb.no dfweb.no;
    script-src 'self' v3.dfweb.no dfweb.no;
    child-src *.google.com ;
    style-src 'self';
    img-src * blob: data:;
    media-src 'none';
    connect-src api.emailjs.com;
    font-src 'self' fonts.gstatic.com;
  `;

  const response = NextResponse.next();

  response.headers.set("Content-Security-Policy", ContentSecurityPolicy.replace(/\n/g, ""));


  return response;
}
