/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./*.html", "./src/**/*.{vue,js,ts,jsx,tsx,css}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#121321",
        secondary: "#212340",
        active: "#449DD1",
        text: "#FFFFFF",
      },
      screens: {
        xs: "376px",
        md: "860px",
      },
    },
  },
  plugins: [],
};
