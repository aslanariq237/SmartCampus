/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineClamp:['hover'],
      colors:{
        'grays':'#fffffe',
        'blues':'#3da9fc',
        'bg1':'#d8eefe',
        'head-font' : '#094067',
        'comm-font' : '#5f6c7b',
        'card-bg' : '#094067',
        'paragraph' : '#d8eefe'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
