/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#f6f6f6',

          secondary: '#606470',

          accent: '#ffea07',

          neutral: '#111111',

          'base-100': '#000000',

          info: '#69AED3',

          success: '#50E794',

          warning: '#EFB06B',

          error: '#F72B4D',
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        whyte: ['Whyte Inktrap'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('daisyui')],
};
