/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./src/js/app.js"],
  theme: {
    extend: {
      fontFamily: {
        "barlow-semi-condensed": ["Barlow Semi Condensed", "sans-serif"],
      },
      colors: {
        /* ### Primary */
        "moderate-violet": "hsl(263, 55%, 52%)",
        "very-dark-grayish-blue": "hsl(217, 19%, 35%)",
        "very-dark-blackish-blue": "hsl(219, 29%, 14%)",
        white: "hsl(0, 0%, 100%)",

        /* ### Neutral */
        "light-gray": "hsl(0, 0%, 81%)",
        "ligh-grayish-blue": "hsl(210, 46%, 95%)",
      },
    },
  },
  plugins: [],
};
