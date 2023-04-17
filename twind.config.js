import { defineConfig } from "@twind/core";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTailwind from "@twind/preset-tailwind";

export const screens = {
  "small-mobile": "320px",
  mobile: "375px",
  "max-mobile": "428px",
  tablet: "768px",
  "small-desktop": "992px",
};

const config = defineConfig({
  presets: [presetAutoprefix(), presetTailwind()],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
  ],
  hash: false,
  theme: {
    extend: {
      screens: screens,
      boxShadow: {
        "card-box": "0px 2px 4px rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        "primary-default": ['"DM Sans"', "sans-serif"],
      },
    },
  },
  preflight: {
    body: {
      "@apply": "bg-[#E8F1FE] font-primary-default",
    },
  },
});
export { config };
