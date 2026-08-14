import type { NextRequest } from 'next/server'
import { DEFAULT_LOCALE, LOCALES } from './lib/constants/LOCALIZATIONS'

export const locales = LOCALES
export const defaultLocale = DEFAULT_LOCALE

// function getLocale(request: NextRequest) {
//   const locale = request.nextUrl.pathname
//     .split("/")
//     .filter((route: string) => !!route)?.[0];
//   const currentLocale = locales.find((item: string) => item === locale);

//   return currentLocale;
// }

export function middleware(request: NextRequest) {
  // const url = request.nextUrl
  // const { pathname } = url
  // const hasDownload = url.searchParams.has('download')
  // /**
  //  * Match resource patterns
  //  */
  // const imageMatch = pathname.match(/^\/resource\/image\/([^/]+)\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)$/)
  // const blobMatch = pathname.match(/^\/resource\/blob\/([^/]+)\/([^/]+)\/(.+)$/)
  // if (imageMatch) {
  //   const [_, id, crop, width, folder, file] = imageMatch
  //   const rewriteUrl = getAkamayUrl(
  //     `/caas/v1/media/${id}/data/${folder}/${crop}/${width}/${file}`,
  //     false
  //   )
  //   const response = NextResponse.rewrite(rewriteUrl)
  //   if (hasDownload) response.headers.set('x-download', '1')
  //   return response
  // }
  // if (blobMatch) {
  //   const [_, id, folder, file] = blobMatch
  //   const rewriteUrl = getAkamayUrl(`/caas/v1/media/${id}/data/${folder}/${file}`, false)
  //   const response = NextResponse.rewrite(rewriteUrl)
  //   if (hasDownload) response.headers.set('x-download', '1')
  //   return response
  // }
  // const pathnameHasLocale = locales.some(
  //   (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  // );
  /**
   * Redirect if default locale
   */
  // if (getLocale(request) === defaultLocale) {
  //   return NextResponse.redirect(request.nextUrl.origin);
  // }
  /**
   * Rewrite locales
   */
  // switch (getLocale(request)) {
  //   case defaultLocale:
  //     if (getLocale(request) === defaultLocale) {
  //       const url = `${request.nextUrl.origin}/404`;
  //       return NextResponse.rewrite(new URL(url), request.url as any);
  //     }
  // }
  /**
   * If there is no locale
   * use master as default locale
   * without adding it to the url path
   */
  // if (pathnameHasLocale) return;
  // if (!pathnameHasLocale) {
  //   const url = `${request.nextUrl.origin}/${defaultLocale}${pathname}`;
  //   return NextResponse.rewrite(new URL(url), request.url as any);
  // }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|gaScript.js|gaScript2.js|sitemap.xml|en/sitemap.xml|not-found).*)',
  ],
}
