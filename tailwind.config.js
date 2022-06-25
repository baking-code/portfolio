const colors = require("tailwindcss/colors");

colors.sky = {
  50: "#f0f9ff",
  100: "#e0f2fe",
  200: "#bae6fd",
  300: "#7dd3fc",
  400: "#38bdf8",
  500: "#0ea5e9",
  600: "#0284c7",
  700: "#0369a1",
  800: "#075985",
  900: "#0c4a6e",
};

module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-css-filters"),
  ],
  // xwind options
  xwind: {
    mode: "objectstyles",
  },
};
