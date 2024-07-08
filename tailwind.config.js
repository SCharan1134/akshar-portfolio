/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        third: "#2C2C2C",
        ascent: "#ff6b00",
      },
    },
  },
  plugins: [],
};
