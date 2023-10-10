/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-400': '#BDBDBD',
        'secondary-1': '#23856D',
        'gray-900': '#252B42',
        'gray-600': '#737373',
        'gray-300': '#ECECEC',
      },
      width: {
        '183': '183px',
        '658': '658px',
        '113': '113px',
        '48': '48px',
        '389': '389px',
      },
      height: {
        '324': '324px',
        '48': '48px',
        '2': '2px',
      },
      spacing: {
        '30': '30px',
        '10': '10px',
        '15': '15px',
        '24': '24px',
        '48': '48px',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      }

    },
  },
  plugins: [],
}
