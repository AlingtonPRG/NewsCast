/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#2D2D2D",
        darker: "#1B7BFD",
        "base-text": "#393939",
        "breaking-color": "#F65050",
        "button-blue": "#0088FF",
        "button-yellow": "#997C00",
        "button-aqua": "#49CFE8",
        "button-red": "#FE4A51",
        "button-purple": "#A56CBD",
        "button-green": "#2ECC71",
        "button-dark": "#4C60F5",
        "button-pink": "#F7679D",
        "button-light": "#42C0F5",
        "button-dark-red": "#EF5043",
        "button-dark-purple": "#C23785",
      },
      fontFamily: {
        sofia: "'Sofia Sans', 'sans-serif'",
        oswald: "'Oswald', 'sans-serif'",
        lora: "'Lora', 'sans-serif'",
      },
      boxShadow: {
        mainBar: "0px 1px 10px 0px rgba(246, 80, 80, 0.15);",
        navbar: "0px 1px 10px 0px rgba(246, 80, 80, 0.15);",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
