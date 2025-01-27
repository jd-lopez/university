/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./this/*.{html, js}"],
  theme: {
    extend: {
      backgroundImage: {
        backBlue: "url('/assets/images/third-hero.jpg')",
        firstBlue: "url('/assets/images/Linus.webp')",
        secondBlackBlue: "url('/assets/images/second-hero.jpg')",
        thirdBlackBlue: "url('/assets/images/fourth-hero.jpg')",
      },

      boxShadow: {},
    },
  },
  plugins: [],
};
