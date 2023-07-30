/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wavesMove: {
          '0%': {
            transform: 'translate3d(-90px, 0, 0)',
          },
          '100%': {
            transform: 'translate3d(85px, 0, 0)',
          },
        },
        slideOutWeb: {
          '0%': { right: 'calc(5vw)' },
          '100%': { right: '-400px' },
        },
        slideInWeb: {
          '0%': { right: '-400px' },
          '100%': { right: '5vw' },
        },
        slideOutMobile: {
          '0%': { bottom: '0' },
          '100%': { bottom: '-100vh' },
        },
        slideInMobile: {
          '0%': { bottom: '-100vh' },
          '100%': { bottom: '0' },
        },
      },
      animation: {
        slideOutWeb: 'slideOutWeb ease-in-out 0.35s forwards',
        slideInWeb: 'slideInWeb ease-in-out 0.35s forwards',
        slideOutMobile: 'slideOutMobile ease-in-out 0.35s forwards',
        slideInMobile: 'slideInMobile ease-in-out 0.35s forwards',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      xs: '378px',
      sm: '500px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
