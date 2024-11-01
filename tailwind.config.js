/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["montserrat"],
      },
      colors: {
        PaleOrange: "#FFB07F",
        White: "#fff",
        Black: "#000",
        OffWhite: "#ededed",
      },
    },
    plugins: [],
  },
};
