/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        custom: {
          "light-1": "#F0F1F7",
          "light-body": "#ECEEEF",
          "light-footer": "#FFFFFF",
          "text-light": "#27272B",

          "dark-1": "#292C32",
          "dark-body": "#232529",
          "dark-footer": "#27272A",
        },
      },
    },
  },
  plugins: [
    require("daisyui"),

    function ({ addUtilities }) {
      const newUtilities = {
        ".text-gradient-dark": {
          backgroundImage: 'linear-gradient(to right,#B047C4, #B388FF)', // Para un fondo oscuro
          "-webkit-background-clip": "text",
          "background-clip": "text",
          color: "transparent",
        },
        ".text-gradient-light": {
          backgroundImage: 'linear-gradient(to right, #AFA4FF, #7868E6)', // Para un fondo claro
          "-webkit-background-clip": "text",
          "background-clip": "text",
          color: "transparent",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
