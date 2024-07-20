const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: [
        "GoogleSans",
        ...defaultTheme.fontFamily.sans
      ],
    },
  },
  plugins: [],
}