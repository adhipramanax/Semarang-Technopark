/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        stp: {
          primary: {
            500: "#CD0606",
            600: "#EE1E14",
          },
          secondary: "#F08619",
          green: "#1ED747",
          blue: "#04A2FF",
          dark: {
            500: "#292D32",
          },
          gray: "#BEBEBE",
          info: "#5CB3E4",
          warning: "#F6B675",
          error: "#E16868",
          success: "#6EBC14",
          neutral: "#79767B",
          danger: "#D84866"
        },
      },
      spacing: {
        "2px": ".125rem",
        "3px": ".1875rem",
      },
    },
    screens: {
      xsm: "480px",
      "2xsm": "576px",
      sm: "640px",
      md: "768px",
      xmd: "840px",
      "2md": "960px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
      "3xl": "1536px",
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
  safelist: [
    {
      pattern:
        /(bg|text|border-b)-(hijau|primary|stp-secondary|biru|merah|gray|stp-info|stp-warning|error|stp-success|neutral|stp-danger)/,
    },
  ],
};
