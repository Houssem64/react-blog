/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,,html,ts,jsx,tsx}"],
  theme: {
    colors: {
      customGradient: {
        start: "#020213",
        end: "#091c38",
      },
    },
    extend: {},
  },
  plugins: [],
};
