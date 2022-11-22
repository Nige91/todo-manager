/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'clr-base': '#7596AC',
        'clr-accent': '#EC9B80',
        'clr-bgr': '#f1f5f7',
        'clr-done': '#7AB99B',
        'neutral-light': '#f1f5f7',
        'neutral-dark': '#161e24',
      },
    },
  },
}
