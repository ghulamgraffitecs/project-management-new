/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 1px 2px 0 rgba(0,0,0,.14)",
      },
    },
    plugins: [],
  },
};
