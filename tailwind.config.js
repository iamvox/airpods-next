/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: { md: "850px" },
      animation: {
        "slide-in": "slide-in 0.36s backwards",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            opacity: 0,
          },

          "1%": {
            transform: "translateX(160px)",
          },

          to: {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      },

      fontFamily: {
        sans: ["var(--sfprotext)"],
        display: ["var(--sfprodisplay)"],
      },
    },
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
