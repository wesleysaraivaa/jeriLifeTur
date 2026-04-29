/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Alan Sans", "sans-serif"],
        "alan-sans-bold": ["Alan Sans", "sans-serif"],
        "alan-sans-semibold": ["Alan Sans", "sans-serif"],
        "alan-sans-medium": ["Alan Sans", "sans-serif"],
        "alan-sans-regular": ["Alan Sans", "sans-serif"],
        "caesar-regular": ["Caesar Dressing", "serif"],
      },
    },
  },
  plugins: [],
};
