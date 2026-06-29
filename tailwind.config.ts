import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.5rem", screens: { "2xl": "1300px" } },
    extend: {
      maxWidth: { container: "1300px" },
      colors: {
        chocolate: {
          950: "#1a0e08",
          900: "#2a1810",
          800: "#3d2418",
          700: "#5a3520",
          600: "#7a4a2e",
        },
        gold: {
          500: "#c69159",
          400: "#d4a574",
          300: "#e8c896",
          200: "#f0d9b0",
        },
        cream: "#f5e6d3",
        flavor: {
          lime: "#b8d870",
          orange: "#e89a3c",
          pink: "#e89aa3",
          chocolate: "#a06a3a",
        },
      },
      borderRadius: { sm: "4px", DEFAULT: "4px", md: "4px", lg: "4px" },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        script: ["var(--font-dancing)", "cursive"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "pulse-ring": "pulseRing 1.8s ease-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
