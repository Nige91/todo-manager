/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'clr-dark': '#066B76',
        'clr-light': '#6AACB3',
        'clr-accent': '#F79A21',
        'clr-bgr': '#F7F7F7',
        'clr-done': '#00CC00',
        'clr-ndone': '#4488FF',
        'neutral-light': '#DDDDDD',
        'neutral-dark': '#454545',
      },
    },
  },
  plugins: [require("daisyui")],
}
