import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  theme: {
    colors: {
      blue: {
        500: "#0068FF",
      },

      red: {
        50: "#FEF2F2",
        100: "#FEE2E2",
        200: "#FECACA",
        300: "#FCA5A5",
        400: "#F87171",
        500: "#ED140A",
        600: "#DE1414",
        700: "#B91C1C",
        800: "#991B1B",
        900: "#7F1D1D",
      },

      gray: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
      },

      green: {
        50: "#F0FDF4",
        100: "#DCFCE7",
        200: "#BBF7D0",
        300: "#86EFAC",
        400: "#4ADE80",
        500: "#23BE78",
        600: "#16A34A",
        700: "#15803D",
        800: "#166534",
        900: "#14532D",
      },

      primary: "#ED140A",
      secondary: "#FEF2F2",

      white: "#FFF",
      black: "#000",
      inherit: "inherit",
    },

    fontSize: {
      xs: [".75rem", "1.125rem"],
      sm: [".875rem", "1.5rem"],
      md: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.875rem"],
      xxs: [".625rem", ".75rem"],
      "2xl": ["1.5rem", "2.25rem"],
      "3xl": ["2rem", "3rem"],
      "4xl": ["2.25rem", "3rem"],
      "5xl": ["2.5rem", "2.875rem"],
      "6xl": ["3rem", "4rem"],
      "7xl": ["3.5rem", "4.5rem"],
    },

    container: {
      center: true,
      padding: "2rem",
    },

    fontFamily: {
      inter: ["var(--font-inter)", ...fontFamily.sans],
      sans: ["var(--font-outfit)", ...fontFamily.sans],
    },

    extend: {
      screens: {
        xl: "1280px",
      },
    },
  },

  plugins: [],

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
export default config;
