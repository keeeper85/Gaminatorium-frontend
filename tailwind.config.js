/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Urbanist', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      irish: ['"Irish Grover"', 'serif'],
      inknut: ['"Inknut Antiqua"', 'serif'],
    },
  extend: {
      colors: {
        'black': '#000000',
        'lightblack': '#0E1217',
        'red': '#70211C',
        'gray': '#DDDDDD',
      },
    },
  },
  plugins: [],
}

