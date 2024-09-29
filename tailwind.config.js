/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#191919",
        secondary: "#474747", // Ensure hex code is a string and properly placed
      },
    },
  },
  plugins: [],
};
