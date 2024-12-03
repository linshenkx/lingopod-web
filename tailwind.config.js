/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f6f6f7',
          100: '#e1e3e6',
          200: '#c2c5cb',
          300: '#9ca1ab',
          400: '#757b87',
          500: '#585f6d',
          600: '#444b57',
          700: '#363c46',
          800: '#2b3038',
          900: '#24272e',
          950: '#1a1c21',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#b9e5fe',
          300: '#7cd1fd',
          400: '#36baf9',
          500: '#0c9ee8',
          600: '#017dc5',
          700: '#0264a0',
          800: '#065484',
          900: '#0b476e',
          950: '#082d48',
        },
      },
    },
  },
  plugins: [],
};