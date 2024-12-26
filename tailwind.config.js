import plugin from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
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
        body: ["body", "sans-serif"],
        impact: ["impact", "sans-serif"]
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
