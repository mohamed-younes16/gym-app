/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily:{
      "montserrat":["Montserrat","sans-serif"],
      "palanquin":["Palanquin","sans-serif"]
    },
    flex: {
      '3': '3 3 0%',
      '2': '2 2 0%'
    }},
  },
  plugins: [],
}

