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
        OffWhite: "#ededed",
      },
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
    ],
  },
};
