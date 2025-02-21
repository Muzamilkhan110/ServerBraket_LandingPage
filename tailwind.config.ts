import type { Config } from "tailwindcss";

export default {
  content: [
    "./Pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"], // 👈 Custom Font
      },
    },
  },
  plugins: [],
} satisfies Config;
