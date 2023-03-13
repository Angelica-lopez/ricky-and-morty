/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        shadowHeader: "-2px 0px 8px 2px rgba(0, 0, 0, 0.1);",
        shadowButton:
          "0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14)",
        shadowCard: "0px 1px 5px 0px rgba(0, 0, 0, 0.2);",
        shadowFooter: "-2px 0px 8px 2px rgba(0, 0, 0, 0.1);",
      },
    },
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
