/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kb-green-light': 'hsl(114, 97%, 46%)', // '#1AE803'
				'kb-green-dark': 'hsl(114, 99%, 32%)', // '#11A101'
        'night': {
          700: 'hsl(220, 21%, 8%)', // '#11141A'
          800: 'hsl(0, 0%, 8%)', // '#141414'
          900: 'hsl(20, 11%, 5%)' // '#0F0D0C'
        },
      }
    },
  },
  plugins: [],
}

