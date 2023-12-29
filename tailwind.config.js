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
      backgroundImage: {
        'hero-pattern': "url('/src/assets/image_overlay2.svg')",
        'mobile-hero-pattern': "url('/src/assets/mobile_overlay.svg')",
        'abstract-background': "url('/src/assets/abstract_background.png')",
        'abstract-background1': "url('https://res.cloudinary.com/dstmstsbe/image/upload/v1703797881/Rectangle_21_reugkz.png')",
        'abstract-background2': "url('https://res.cloudinary.com/dstmstsbe/image/upload/v1703798449/Rectangle_21_2_gvfuhg.png')",
        'about-background': "url('https://res.cloudinary.com/dstmstsbe/image/upload/v1703796012/IMG_1224_2_4_xbwlfn.png')",
        'about-background2': "url('/src/assets/about_img2.png')",
        'about-background3': "url('https://res.cloudinary.com/dstmstsbe/image/upload/v1703793763/IMG_1224_2_2_sjoqrj.png')",
        'about-background4': "url('https://res.cloudinary.com/dstmstsbe/image/upload/v1703794054/IMG_1224_2_3_pzgff1.png')",
        'big-abstract-background': "url('https://res.cloudinary.com/dstmstsbe/image/upload/v1703880402/Rectangle_27_wsoe50.png')",
        'big-abstract-background2': "url('https://res.cloudinary.com/dstmstsbe/image/upload/v1703880921/Rectangle_27_1_rf1f4l.png')",
      }
    },
  },
  plugins: [],
};
