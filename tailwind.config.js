/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0C0C0C",
        mist: "#D7E2EA",
        accent: "#e8702a",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Kanit", "Inter", "sans-serif"],
        serif: ["'Playfair Display'", "serif"],
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
