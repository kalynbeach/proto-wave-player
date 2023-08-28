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
      }
    },
  },
  plugins: [],
}

