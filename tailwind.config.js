export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "vista-blue": "#809AEC", // Soft blue for backgrounds, text links, and hover states
        "lavender-pink": "#F7B7EA", // Soft pink for highlights and secondary elements
        tomato: "#F75732", // Strong tomato red for alerts and important actions
        white: "#FFFFFF", // Standard white
        "white-smoke": "#F5F5F5", // Subtle gray for borders, shadows, and dividers
        jet: "#333333", // Dark gray for readable text
      },
      fontFamily: {
        title: ["title", "sans-serif"],
      },
    },
  },
  plugins: [],
};
