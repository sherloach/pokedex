/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slideOut: {
          '0%': { right: 'calc(10vw - 20px)' },
          '100%': { right: '-400px' },
        },
        slideIn: {
          '0%': { right: '-400px' },
          '100%': { right: 'calc(10vw - 20px)' },
        },
      },
      animation: {
        slideOut: 'slideOut ease-in-out 0.35s forwards',
        slideIn: 'slideIn ease-in-out 0.35s forwards',
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
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
