const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,vue}"],

  darkMode: ["class"],
  safelist: ["dark"],

  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    extend: {
      colors: {
        bgPrimary: "#F5F8FA",
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

        primary100: "#E5F3FD",
        main: "#011E3D",
        text400: "#335474",
        text300: "#335474",
        text200: "#A7BEDA",
        text100: "#CCDDF0",

        muted: "#738499",
        muted300: "#88A6C9",

        // Not Use
        gray200: "#F1F6F9",
        gray300: "#E9EFF6",
        gray400: "#335474",

        // Dark Color
        "dark-bgPrimary": "#111827",
        "dark-bgSecondary": "rgb(31, 41, 55)",
        "dark-bgActive": "rgb(55, 65, 81)",
        "dark-bgHover": "rgba(243, 244, 246, 0.04)",

        "dark-text100": "rgb(156, 163, 175)",
        "dark-text200": "rgb(255, 255, 255)",

        "dark-mute": "rgb(156, 163, 175)",

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // border: "hsl(var(--border))",
        // input: "hsl(var(--input))",
        // ring: "hsl(var(--ring))",
        // background: "hsl(var(--background))",
        // foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))",
        // },
        // destructive: {
        //   DEFAULT: "hsl(var(--destructive))",
        //   foreground: "hsl(var(--destructive-foreground))",
        // },
        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        // accent: {
        //   DEFAULT: "hsl(var(--accent))",
        //   foreground: "hsl(var(--accent-foreground))",
        // },
        // popover: {
        //   DEFAULT: "hsl(var(--popover))",
        //   foreground: "hsl(var(--popover-foreground))",
        // },
        // card: {
        //   DEFAULT: "hsl(var(--card))",
        //   foreground: "hsl(var(--card-foreground))",
        // },
      },
      boxShadow: {
        small: "0px 4px 10px 2px rgba(19, 80, 124, 0.06)",
      },

      borderWidth: {
        ".6": "0.6px",
      },

      borderRadius: {
        ".8": "8px",
      },

      lineHeight: {
        0: "0",
      },

      // borderRadius: {
      //   xl: "calc(var(--radius) + 4px)",
      //   lg: "var(--radius)",
      //   md: "calc(var(--radius) - 2px)",
      //   sm: "calc(var(--radius) - 4px)",
      // },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), animate],
};
