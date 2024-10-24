/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'primaryColor': "#333135",
        'secondaryColor': "#B2AFB5",
        'pTextColor': "#807B84",
        'ctaBackground': "#1A191A",
        'grayColor': '#E6E5E6'
      },
      boxShadow:{
        "screens-illustration":"0 8px 16px 4px rgb(0 0 0 / 0.02)" ,
        "navbar-shadow": "0 20px 16px -4px rgb(0 0 0 / 0.15);"
      },
      screens: {
        "hero-breakpoint": "1120px",
        "navbar-breakpoint": "1440px",
        "navbar-breakpoint-mobile": "480px",
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 100s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }  
    },
  },
  plugins: [],
}