/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#141414",
        "blue":"#0890FF"
        
      },
      screens: {
        'tab': '768px',
        'medium':'1120px',
        'testMap':'1380px' ,// Custom media query for 400px screens
      },
      
    },
  },
  plugins: [],
}

