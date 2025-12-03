/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#faf7f2',
          100: '#f5ede0',
          200: '#ead9c1',
          300: '#ddc09a',
          400: '#cfa373',
          500: '#b8864f',
          600: '#9d6d3f',
          700: '#7f5635',
          800: '#6a4630',
          900: '#5a3c2a',
        },
      },
    },
  },
  plugins: [],
}

