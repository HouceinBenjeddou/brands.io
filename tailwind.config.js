/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jx,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
      'primary': '#AE68FA',
      'text-color': '#3E4581',
      'p-color': '#3E4581',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      }
    },
  },
  plugins: [],
}
