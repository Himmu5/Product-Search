/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'Home-BG' : "url('/public/Ecommerse.jpg')"
      } 
    },
  },
  plugins: [],
}

