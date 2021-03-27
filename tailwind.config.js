module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'darkGray': '#141414',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
