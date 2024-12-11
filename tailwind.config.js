/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily:{
        'Inter':["Inter", 'sans-seri'],
        'Cormorant-Garamond':["Cormorant Garamond", 'serif'],
        'DM-Sans': ["DM Sans", 'sans-serif'],
        'Oswald': ["Oswald", 'sans-serif'],
        'Corinthia': ["Corinthia", 'cursive'],
      }
    },
  },
  plugins: [],
}