/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homeIntro': "url('/assets/bg.svg')",
      },
      screens: {
        'lg': '992px',
        'sm': { 'max': '990px' },
      },
      colors: {
        'derby': '#ff9700',
      },
    },
  },
  plugins: [],
}
