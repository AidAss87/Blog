/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#313131",
        "custom-black": "#000000",
        gray_custom_1: "#636363",
        gray_custom_2: "#8B8B8B",
      },
      backgroundImage: {
        "custom-image": "url('/images/hero/background.png')",
      },
    },
  },
  plugins: [],
};
