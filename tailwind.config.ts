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
        skyBlue: 'var(--sky-blue)',
        blueGreen: 'var(--blue-green)',
        prussianBlue: 'var(--prussian-blue)',
        selectiveYellow: 'var(--selective-yellow)',
        utOrange: 'var(--ut-orange)',
      },
    },
  },
  plugins: [],
};
export default config;
