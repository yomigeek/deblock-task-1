/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // The locales supported in the application
    locales: ["default", "en", "en-GB", "fr-FR"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "default",
    localeDetection: false,
  },
};

module.exports = nextConfig;
