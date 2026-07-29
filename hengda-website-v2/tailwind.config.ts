import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // "navy" token kept for structural continuity across components,
        // now mapped to a charcoal/graphite scale to match the reference site.
        navy: {
          950: "#1A1D20",
          900: "#26292D",
          800: "#33373C",
          700: "#42474D",
          600: "#565C63",
        },
        steel: {
          100: "#F1F2F3",
          200: "#E1E3E5",
          300: "#C6CACE",
          400: "#9CA2A8",
          500: "#71787E",
          600: "#565C63",
          700: "#42474D",
        },
        // "signal" token now maps to a blue accent matching the H&D logo ink color.
        signal: {
          400: "#3B6FD4",
          500: "#245BC7",
          600: "#1B47A0",
        },
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
        "steel-sheen":
          "linear-gradient(135deg, #26292D 0%, #3B4046 45%, #1A1D20 100%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "spin-slow": "spin-slow 12s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
