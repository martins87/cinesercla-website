import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background",
        background: "#0F1619",
        background_2: "#3D4244",
        foreground: "var(--foreground)",
        bordeaux: "#980038"
      },
    },
  },
  plugins: [],
};
export default config;
