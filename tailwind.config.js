/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./this/*.{html, js}"],
  theme: {
    extend: {
      backgroundImage: {
        backBlue: "url('/assets/images/third-hero.jpg')",
      },

      boxShadow: {},
    },
  },
  plugins: [],
};
