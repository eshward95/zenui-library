/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3B9DF8",
        secondary: "#ffffff",
        border: "#3B9DF8",
        tabTextColorL: '#012d57',
        text: "#9caebc",
        shadowColor: 'rgba(0, 0, 0, 0.2)'
      },

      boxShadow: {
        primary: "0 35px 80px -15px rgba(0, 0, 0, 0.3)",
        secondary: "2px 2px 20px 2px rgba(0, 0, 0, 0.3)",
      },
    },

    screens: {
      '640px': '640px',
      '1024px': '1024px',
      '1260px': '1260px',
      '1404px': '1404px',
      '2000px': '2000px',
    },
  },
  plugins: [],
};
