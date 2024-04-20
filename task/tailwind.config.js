/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#ea4b8b',
        secondary:'#98979b',
        blue:'#6155a5',
        white:'#ffffff',
        black:'#030303',
        gray:'#7c7b85',
        light_gray:'#f2f5f4',
        red:'#ee787b',
        lightRed:'#feeeee',
      },
    }, 
  },
  plugins: [],
}