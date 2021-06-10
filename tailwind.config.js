module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ghost-white': '#F8F9FC',
        Xiketic: '#06051A',
        'oxford-blue': '#0A092B',
        'neon-blue': '#4A69FE',
        'persian-blue': '#3036C9',
        'cyber-grape': '#4C4268',
        'cadet-blue-crayola': '#A0A7BC',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
