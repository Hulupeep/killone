/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/**/*.md",
    "./_includes/**/*.html"  // <-- Add this to scan all templates
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
