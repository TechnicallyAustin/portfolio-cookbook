/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{html,js, jsx}'",
  ],
  theme: {
    fontFamily: {
      sans: ["Garamond", "sans-serif"],
    },
    colors: {
      "black": "#000000",
      "white": "#FFFFFF",
      "alt": "#1b0428",
      "alt1": "#ee82ee",
      "white": "#FFFFFF",
      "neon": "",
      "button-color": "",
      "component-color": "",
    },
    extend: {},
  },
  plugins: [],
};
