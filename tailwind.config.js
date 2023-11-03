/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'Rubik-Black': ['Rubik-Black'],
        'Rubik-Bold': ['Rubik-Bold'],
        'Rubik-Medium': ['Rubik-Medium'],
        'Rubik-Regular': ['Rubik-Regular'],
        'Rubik-Light': ['Rubik-Light'],
      },
    },
  },
  plugins: [],
};
