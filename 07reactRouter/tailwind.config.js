/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          50: "#222831",
          100: "#31363F",
          200: "#76ABAE",
          300: "#EEEEEE",
        },
      },
    },
  },
  plugins: [],
};
