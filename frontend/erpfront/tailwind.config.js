/** @type {import('tailwindcss').Config} */
export default {
  content: [    
              "./index.html",
              "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primary: '#068C3F',
        secondary: 'rgb(108,117,125)'
      },
      fontFamily:{
        Almarai: 'Almarai'
      }
    },
  },
  plugins: [],
}

