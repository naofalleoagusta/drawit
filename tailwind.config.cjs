/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          custom: "#ff0000",
        },
        yellow: {
          custom: "#ff0",
        },
        green: {
          custom: "#008000",
        },
        blue: {
          custom: "#0000ff",
        },
      },
    },
  },
  plugins: [],
};
