/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'clr-dark': '#066B76',
      'clr-light': '#6AACB3',
      'clr-accent': '#F79A21',
      'neutral-light': '#CCCCCC',
      'neutral-dark': '#454545',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
