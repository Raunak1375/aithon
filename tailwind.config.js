/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0f9f1',
          100: '#dcf0e0',
          200: '#bce0c5',
          300: '#95c9a4',
          400: '#67ac7d',
          500: '#498f5e',
          600: '#2D6A4F', // primary
          700: '#255741',
          800: '#1d4532',
          900: '#172e25',
        },
        brown: {
          50: '#f9f6f2',
          100: '#f3ebe0',
          200: '#e7d4c1',
          300: '#d4b492',
          400: '#c19a6e',
          500: '#b38558',
          600: '#8B5E34', // secondary
          700: '#6f4b29',
          800: '#5a3d22',
          900: '#48331d',
        },
        sage: {
          50: '#f5f7f5',
          100: '#eaeee9',
          200: '#dbe3d9',
          300: '#c4d1c0',
          400: '#A8BAA2',
          500: '#829E89', // accent
          600: '#708A75',
          700: '#5c715f',
          800: '#4c5c4e',
          900: '#404c42',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 10px 0 rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};