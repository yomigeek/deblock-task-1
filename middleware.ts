import { NextRequest, NextResponse } from "next/server";

// Regex to check whether string something has an extension, e.g. .png
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
    const { country } = fetchIPResponseData || "US";

    if (
      nextUrl.pathname.startsWith("/_next") ||
      nextUrl.pathname.includes("/api/") ||
      nextUrl.pathname.startsWith("/static") ||
      nextUrl.pathname.startsWith("/public") ||
      PUBLIC_FILE.test(nextUrl.pathname)
    ) {
      return;
    }

    // return if we are on a locale other than default
    if (nextUrl.locale !== "default") {
      return;
    }

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

export const config = {
  matcher: ["/"],
};