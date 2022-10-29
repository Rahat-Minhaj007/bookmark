const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      rubik: ["Rubik"],
    },
    extend: {
      colors: {
        primary: "#263C97",
        secondary: "#FCBE00",
      },
    },
  },
  plugins: [],
});
