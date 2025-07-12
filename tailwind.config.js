/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#04020E',
        'background-light': '#110929',
        primary: '#7E30E1',
        secondary: '#47C2FF',
        accent: '#F31559',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 15px 5px rgba(126, 48, 225, 0.4)',
        'glow-secondary': '0 0 15px 5px rgba(71, 194, 255, 0.4)',
      }
    },
  },
  plugins: [],
}