/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "radial-light":
          "radial-gradient(ellipse 80% 80% at 50% -30%, #ffffff 0%, #f2f2f2 100%)",
        "radial-dark":
          "radial-gradient(ellipse 80% 80% at 50% -30%, #444444 0%, #242424 100%)",
      },
      colors: {
        primary_a: "#C3FF63",
        primary_light: "#3c009c",
      },
    },
  },
  plugins: [],
};
