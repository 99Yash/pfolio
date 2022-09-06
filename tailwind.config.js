/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        Inter: "'Inter',sans-serif",
        dmMono: "'DM Mono',monospace",
        poppins: "'Poppins',sans-serif",
        overpass: "'Overpass',sans-serif",
      },
    },
  },
  plugins: [],
};
