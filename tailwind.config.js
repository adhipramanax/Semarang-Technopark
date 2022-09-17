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
        "gray": "#BEBEBE"
      }
    },
  },
  plugins: [require("daisyui")],
};
