/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          accent: {
            DEFAULT: '#D4FF3D',
            50: '#F6FFD6',
            100: '#EDFFAD',
            200: '#E2FF7A',
            300: '#D8FF4D',
            400: '#D4FF3D',
            500: '#C2E835',
            600: '#A8CC30',
            700: '#8AA828',
            800: '#6E8520',
            900: '#526318',
            950: '#35400F',
          },
        },
      },
    },
    plugins: [],
  }