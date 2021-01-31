const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors
    }
  },
  variants: {},
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-css-filters")
  ],
  // xwind options
  xwind: {
    mode: "objectstyles"
  }
};
