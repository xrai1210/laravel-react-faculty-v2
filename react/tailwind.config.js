/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        maroon: "#800000",
        duststorm: "#DDCECE",
        redwood: "#995C4E",
        antiquewhite: "#FFE5D9",
        seaserpent: "#54B8CC",
      },
    },
  },
  plugins: [],
};
