/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: "class", //class, media
  theme: {
    extend: {},
  },
  plugins: [], 
}
