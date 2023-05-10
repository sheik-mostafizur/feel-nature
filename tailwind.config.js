/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eefff1",
          100: "#d7ffe1",
          200: "#b2ffc4",
          300: "#76ff98",
          400: "#34f464",
          500: "#0add40",
          600: "#01a72b", // main color
          700: "#059029",
          800: "#0a7125",
          900: "#0b5c22",
          950: "#00340f",
        },
      },
    },
  },
  plugins: [],
};
