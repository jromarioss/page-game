/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
  			project: {
          'shadow': 'rgba(0, 0, 0, 0.45)',

          'white': '#FFFFFF',

          'gray-100': '#151518',
          'gray-200': '#333333',

          'red-100': '#A12C2C',

          'yellow-100': '#e0c126'
        }
      },
      fontFamily: {
        'russo': ['Russo One', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}