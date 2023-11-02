/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      playfair: ["Playfair Display", "sans"],
      roboto: ["Roboto", "sans-serif"],
      monstserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        coolgray: "#D5D6D2",
        cobalt: "#3A5199",
        blueback: "#27272a",
        lightgray: "#ebedee",
      },
    },
  },
  plugins: [],
};
