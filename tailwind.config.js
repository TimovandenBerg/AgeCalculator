/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'p-purple': 'hsl(259, 100%, 65%)',
      'p-light-red': 'hsl(0, 100%, 67%)',
      'n-white': 'hsl(0, 0%, 100%)',
      'n-off-white': 'hsl(0, 0%, 94%)',
      'n-light-grey': 'hsl(0, 0%, 86%)',
      'n-smokey-grey': 'hsl(0, 1%, 44%)',
      'n-off-black': 'hsl(0, 0%, 8%)',
    },
    extend: {},
    fontFamily: {
      poppins: 'Poppins, sans-serif',
    },
    screens: {
      mobile: '375px',
      desktop: '1440px',
    },
  },
  plugins: [],
};
