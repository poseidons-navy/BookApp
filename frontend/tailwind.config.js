/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily:{
          Poppins: ['Poppins', "sans-serif"]
        },
      colors:{
        navBlue: "#393280",
        inputGray: "#F5F5F5"
      }
    },
  },
  plugins: [],
}