import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-mode": "#0A0A0A",
        "dark-red": "#FF4C4C",
        "light-red": "#FFAFAF",
        "dark-grey": "#202020",
        "light-grey": "#DFDFDF",
      },
    },
  },
  plugins: [],
};
export default config;
