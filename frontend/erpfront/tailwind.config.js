/** @type {import('tailwindcss').Config} */
export default {
  content: [    
              "./index.html",
              "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primary: '#068C3F',
        secondary: '#6C757D',
        light: '#F8F9FA'
      },
      fontFamily:{
        Almarai: 'Almarai'
      }
    },
  },
  plugins: [],
}

