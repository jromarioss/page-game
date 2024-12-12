/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 5s linear infinite',
        blink: 'blink 0.5s step-start infinite',
        blinkmarquee: 'blink 1s step-start infinite, marquee 5s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        blink: {
          '50%': { opacity: 0 },
        },
      },
      colors: {
  			project: {
          "shadow": "rgba(0, 0, 0, 0.45)",

          "white": "#FFFFFF",

          "gray-100": "#151518",
          "gray-200": "#333333",

          "red-100": "#A12C2C",

          "yellow-100": "#e0c126",

          "blue-100": "#F3F7FE"
        }
      },
      fontFamily: {
        "russo": ["Russo One", "sans-serif"],
        "lato": ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
}