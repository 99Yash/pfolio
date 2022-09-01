/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: "'Inter',sans-serif",
        dmMono: "'DM Mono',monospace",
        poppins: "'Poppins',sans-serif",
      },
    },
  },
  plugins: [],
};
