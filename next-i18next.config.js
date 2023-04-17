// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  i18n: {
    // The locales supported in the application
    locales: ["default", "en", "en-GB", "fr-FR"],
    defaultLocale: "default",
    localeDetection: false,
  },
  // react: { useSuspense: false },
  localePath: path.resolve("./public/locales"),
};
