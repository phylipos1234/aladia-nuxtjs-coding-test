/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./Components/**/*.{js,vue,ts}",
    "./Sections/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
