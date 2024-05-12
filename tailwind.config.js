/** @type {import('tailwindcss').Config} */
// import plugin from "tailwindcss/plugin";
// import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        gatile: ["Gatile"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        orange: "#D39738",
        black: "#2D2B2B",
        pink: "#FFF3E0",
        grey: "#9D968B",
      },
    },
  },
  plugins: [
    // plugin(function ({ addBase, addComponents }) {
    //   addBase({});
    //   addComponents({
    //     ".container": {
    //       "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
    //         {},
    //     },
    //     ".h1": {
    //       "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
    //         {},
    //     },
    //   });
    // }),
  ],
};
