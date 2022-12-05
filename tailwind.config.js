/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#111111',

          secondary: '#c6b993',

          accent: '#F2F2F2',

          neutral: '#111111',

          'base-100': '#F2F2F2',

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
        ibm:['IBM']
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('daisyui')],
};
