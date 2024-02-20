/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#2499EF",
        "primary-darker": "#0E73BE",
        secondary: "#F1F6F9",
        "secondary-darker": "#C1D2E5",
        info: "#585FDD",
        "info-darker": "#525B93",
        success: "#09BA70",
        "success-darker": "#209E5F",
        warning: "#F49D1A",
        "warning-darker": "#D88619",
        error: "#FF316F",
        "error-darker": "#D62B64",

        "text-main": "#011E3D",
        main: "#011E3D",
        "text-400": "#335474",
        "text-300": "#335474",
        "text-200": "#A7BEDA",
        "text-100": "#CCDDF0",
        "text-muted": "#738499",
        muted: "#738499",
        "muted-300": "#88A6C9",

        gray200: "#F1F6F9",
        gray300: "#E9EFF6",
      },

      borderWidth: {
        ".6": "0.6px",
      },

      lineHeight: {
        0: "0",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

// 335474;
