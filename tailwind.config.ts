import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'background': '#F9F9F9',
      'white': '#FFFFFF',
      'black': "#000000",
      'primary': '#2A5C64',
      'accent-1': '#7d999b',
      'yellow-vivid': '#F5AC54',
      'yellow-muted': '#F1E2C5',
      'yellow-choice': '#FFD19A',
      'red-choice': '#F68989',
      'green-choice': '#A1C9B1',
      'blue-choice': '#BADBD5',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
