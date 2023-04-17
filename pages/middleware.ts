import { NextRequest, NextResponse } from "next/server";

// Regex to check whether something has an extension, e.g. .jpg
const PUBLIC_FILE = /\.(.*)$/;

// Next JS Middleware
export const middleware = async (request: NextRequest) => {
  // Get the information we need from the request object
  const { nextUrl } = request;

  // Cloned url to work with
  const url = nextUrl.clone();

  try {
    const fetchIP = await fetch("https://api.country.is");
    const fetchIPResponseData = await fetchIP.json();
    const { country } = fetchIPResponseData || "others";

    if (
      nextUrl.pathname.startsWith("/_next") ||
      nextUrl.pathname.includes("/api/") ||
      PUBLIC_FILE.test(nextUrl.pathname)
    ) {
      return;
    }

    // Early return if we are on a locale other than default
    if (nextUrl.locale !== "default") {
      return undefined;
    }

    // Early return if there is a cookie present and on default locale
    // if (cookies.NEXT_LOCALE && nextUrl.locale === "default") {
    //   url.pathname = `/${cookies.NEXT_LOCALE}${nextUrl.pathname}`;
    //   return NextResponse.redirect(url);
    // }

    // We now know:
    // No cookie that we need to deal with
    // User has to be on default locale

    // Redirect if France
    if (country === "FR") {
      url.pathname = `/fr-FR${nextUrl.pathname}`;
      return NextResponse.redirect(url);
    }

    // Redirect if Great Britain
    if (country === "GB") {
      url.pathname = `/en-GB${nextUrl.pathname}`;
      return NextResponse.redirect(url);
    }

    // Handle the default locale fallback to english
    if (nextUrl.locale === "default") {
      url.pathname = `/en${nextUrl.pathname}`;
      return NextResponse.redirect(url);
    }

    // If everything else falls through continue on with response as normal
    return;
  } catch (error) {
    console.log(error);
  }
};
