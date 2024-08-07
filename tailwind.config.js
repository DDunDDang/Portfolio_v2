module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      70: '70vh',
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-out', // 2초 페이드 인 애니메이션
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
        black: '#121212',
        gray: '#1c1c1c',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
