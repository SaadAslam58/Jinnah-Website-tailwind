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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
 
  plugins: [ require("@designbycode/tailwindcss-text-shadow"),({
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowBlur: "3px",
    shadowOffsetX: "2px",
    shadowOffsetY: "2px",
  })],
   
};
export default config;

