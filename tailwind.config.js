const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bluey: colors.sky,
        primary: colors.sky,
        sky: colors.sky
      }
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
