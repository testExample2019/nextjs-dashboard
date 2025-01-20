import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/nextstepjs/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        highlight: {
          '0%': { backgroundColor: '#ffffff' }, // White (initial color)
          '50%': { backgroundColor: '#EDF4FC' }, // Light blue (highlight color)
          '100%': { backgroundColor: '#ffffff' }, // White (final color)
        },
      },
      animation: {
        highlight: 'highlight 1.5s ease',
      },
      colors: {
        "action-primary": "#4A90E2",
        "grey-primary": "#3B414C",
        "grey-secondary": "#797275",
        "grey-border": "#E3E3E3",
        "grey-light": "#ABB8C3",
        "grey-lighter": "#F1F1F1",
        "grey-blue": "#6B98A2",
        grey: "#909090",
        "grey-o": "rgba(241, 241, 241, 0.40)",
        "blue-dark": "#226EC8",
        "blue-light": "#4A90E21A",
        "blue-o": "#EDF4FC",
        purple: "#3F51B5",
        "purple-o": "#3F51B57F",
        orange: "#D13A00",
        "orange-o": "rgba(242, 153, 74, 0.20)",
        red: "#D20000",
        green: "#70AD47",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        xs: ["12px", "normal"],
        sm: ["14px", "normal"],
        base: "1rem",
        xl: "1.25rem",
        13: ["13px", "normal"],
        18: ["18px", "normal"],
        22: ["22px", "normal"],
        24: ["24px", "normal"],
        28: ["28px", "normal"],
        36: ["36px", "44px"],
        48: ["48px", "56px"],
        64: ["64px", "80px"],
      },
      borderWidth: {
        1: "1px",
        2: "2px",
        6: "6px",
      },
      width: {
        40: "40px",
        60: "60px",
        90: "90px",
        132: "132px",
      },
      maxWidth: {
        "14xl": "1440px",
      },
      lineHeight: {
        1.1: "1.1",
      },
      minHeight: {
        300: "300px",
        500: "500px",
        550: "550px",
      },
      borderRadius: {
        medium: "10px",
        large: "20px",
      },
      letterSpacing: {
        0.5: "0.5px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
