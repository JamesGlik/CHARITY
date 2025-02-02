import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        rowdies: ["Rowdies", "sans-serif"],
      },
      screens: {
        sm: { max: "639px" }, // Small screens (max-width: 639px)
        md: { max: "767px" }, // Medium screens (max-width: 767px)
        lg: { max: "1023px" }, // Large screens (max-width: 1023px)
        xl: { max: "1279px" }, // Extra large screens (max-width: 1279px)
        "2xl": { max: "1535px" }, // 2XL screens (max-width: 1535px)
      },
    },
  },
  plugins: [],
} satisfies Config;
