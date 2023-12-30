import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "music-pattern": "url('/images/icon-music.svg')",
        "hero-pattern": "url('/images/illustration-hero.svg')",
        "mobile-pattern": "url('/images/pattern-background-mobile.svg')",
        "desktop-pattern": "url('/images/pattern-background-desktop.svg')",
      },
      boxShadow: {
        button: "0px 20px 20px 0px rgba(56, 42, 225, 0.19)",
        card: "0px 40px 40px -20px rgba(13, 48, 189, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
