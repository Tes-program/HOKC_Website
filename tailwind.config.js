/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'Rubik-Black': ['Rubik-Black', 'san-serif'],
        'Rubik-Bold': ['Rubik-Bold', 'san-serif'],
        'Rubik-Medium': ['Rubik-Medium', 'san-serif'],
        'Rubik-Regular': ['Rubik-Regular', 'san-serif'],
        'Rubik-Light': ['Rubik-Light', 'san-serif'],
      },
    },
  },
  plugins: [],
};
