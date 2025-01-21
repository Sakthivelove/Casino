/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '150':'150'
      }
    }
  },
  plugins: [],
}

