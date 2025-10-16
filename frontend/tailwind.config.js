/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          red: '#ff1f4b'
        }
      },
      boxShadow: {
        neon: '0 0 20px rgba(255,31,75,0.6), 0 0 40px rgba(255,31,75,0.3)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}


