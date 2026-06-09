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
        ink: {
          DEFAULT: "#0c0b0a",
          soft: "#16140f",
        },
        cream: {
          DEFAULT: "#f4eee4",
          2: "#faf6f0",
          3: "#efe7da",
        },
        sand: {
          DEFAULT: "#d8ccba",
          hero: "#e7ddcd",
        },
        "shop-bg": "#f7e6d8",
        line: {
          DEFAULT: "rgba(12,11,10,0.14)",
          soft: "rgba(12,11,10,0.08)",
        },
        muted: {
          DEFAULT: "#7e776b",
          2: "#a39a8c",
        },
        hype: {
          green: "#bdecc9",
          "green-ink": "#1f7a3f",
          red: "#e8543b",
          amber: "#f6dca6",
          "amber-ink": "#9a6b16",
          blue: "#c9c9f6",
          "blue-ink": "#3b3bb0",
          pink: "#f6c9d6",
          "pink-ink": "#b03b5e",
          gold: "#c9a25e",
        },
        background: "#f4eee4",
        foreground: "#0c0b0a",
        border: "rgba(12,11,10,0.14)",
        input: "rgba(12,11,10,0.14)",
        ring: "#c9a25e",
      },
      fontFamily: {
        disp: ["var(--font-disp)", "Hanken Grotesk", "sans-serif"],
        body: ["var(--font-body)", "Hanken Grotesk", "sans-serif"],
        poster: ["var(--font-poster)", "Anton", "sans-serif"],
      },
      maxWidth: {
        hype: "1500px",
      },
      borderRadius: {
        hype: "16px",
        "hype-lg": "22px",
      },
      letterSpacing: {
        tightest: "-.045em",
        tighter: "-.035em",
        tighter2: "-.02em",
        widest2: ".18em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: ".5", transform: "scale(.85)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "pulse-dot": "pulseDot 1.4s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
