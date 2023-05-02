/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        fadeInLeft: 'fadeInLeft .4s ease-in-out',
      },
      keyframes: {
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-180px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0px)'
          }
        },
      }
    },
  },
  plugins: [],
}
