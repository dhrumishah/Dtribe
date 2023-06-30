/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      Rowdies: ["Rowdies", "sans-serif"],
      backgroundImage: {
        landing: "url('/public/landing-page.png')",
        landingMedium: "url('/public/landing-page-medium.png')",
        landingSmall: "url('/public/landing-page-small.png')",
      },
    },
  },
  plugins: [],
};
