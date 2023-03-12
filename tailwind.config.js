/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: "#0c0c0c",
        secondary: "#FF9FB0",
        accent: "#54ECC4",
        "main--light": "#FFFFD0",
        "secondary--light": "#FE4E83",
        "accent--light": "#00AC8E",
        "main--shade": "#491925",
        "accent--shade": "#005B45",
        "pastel--green": "#d1fae5",
        "pastel--purple": "#e9d5ff",
        "pastel--blue": "#cffafe",
      },
    },
  },
  plugins: [],
};
