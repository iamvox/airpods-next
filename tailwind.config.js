/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "832px",
      },
      fontFamily: {
        sans: ["var(--sfprotext)"],
        display: ["var(--sfprodisplay)"],
      },
    },
  },
  plugins: [],
};
