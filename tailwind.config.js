/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: "#CC181E",
        secondary: "#1E1F24",
        lightBg: "#F2F4F8",
        paraClr: "#8A8A8D",
      },
    },
  },
  plugins: [require("daisyui"), flowbite.plugin()],
};
