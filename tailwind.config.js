/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Ensures the container is centered
      },
      maxWidth: {
        "small": "1200px", // Define a custom max-width
      },
    },
  },
  plugins: [],
};
