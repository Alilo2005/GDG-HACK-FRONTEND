import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
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
            yellow_button: "#8400FF",
            gdg_red: "#EA4334",
            gdg_blue:"#4285F4",
            text_inputs_grey :"#696767",
            text_black : "#1A1A1A",
            gdg_yellow : "#FCBC05",
            gdg_green : "#0D9D58",
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
