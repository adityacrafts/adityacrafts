/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px', // Custom breakpoint for 320px screens
        smd: '640px', // Custom breakpoint for 640px screens
        xl: '1300px',
      },
      colors: {
        customYellow: "#FFF9E5", // Custom yellow color
        'custom-maroon': '#b00f0f', // Custom maroon color
        'custom-yellow': '#fbcc50', // Custom yellow color
      },
      fontSize: {
        lg: ['0.789rem', '0.234rem'], // Default font size and line-height
        xl: ['1.2rem', '1.5rem'],
      },
      padding: {
        '2': '0.1rem', // Default padding
        'xl': '1rem', // Larger padding for xl screens
      },
    },
  },
  plugins: [],
};
