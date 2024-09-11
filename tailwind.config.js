/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            '3E97FF': '#3E97FF',
            'DCECFF': '#DCECFF',
        },
        fontFamily: {
            newsreader: ["Newsreader", "sans-serif"],
            dmmono: ["DM Mono", "sans-serif"],
        }
    },
    plugins: [
    ],
  }