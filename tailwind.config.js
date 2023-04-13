/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontSize: {
      xs: '0.4rem',
      sm: '0.6rem',
      base: '0.8rem',
      xl: '1rem',
      '2xl': '1.2rem',
      '3xl': '1.563rem',
      '4xl': '1.953rem',
      '5xl': '2.441rem',
      '6xl': '3.052rem',
    }
  },
  plugins: [],
}
