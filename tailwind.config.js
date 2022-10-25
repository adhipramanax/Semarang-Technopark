/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "hijau": "#1ED747",
        "primary": "#CD0706",
        "secondary": "#F08619",
        "biru": "#04A2FF",
        "merah": "#EE1E14",
        "hitam": "#2F3133",
        "gray": "#BEBEBE",
        "info": "#5CB3E4",
        "warning": "#F6B675",
        "error": "#E16868",
        "success": "#6EBC14",
        "neutral": "#605D62",
      }
    },
  },
  plugins: [require("daisyui")],
  safelist: [{
    pattern: /(bg|text|border-b)-(hijau|primary|secondary|biru|merah|gray|info|warning|error|success|neutral)/
  }]
};
