export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cari: {
          50: '#f0fdf6',
          100: '#dcfce9',
          200: '#bbf7d2',
          300: '#86efad',
          400: '#4ade82',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        navy: {
          800: '#0f1f2c',
          850: '#0b1924',
          900: '#08131c',
          950: '#040b10',
        },
        cyanPulse: '#06b6d4',
        accentGold: '#f59e0b',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(16, 185, 129, 0.25)',
        'glow-md': '0 0 25px -5px rgba(16, 185, 129, 0.35)',
        'glow-lg': '0 0 40px -10px rgba(16, 185, 129, 0.45)',
        'card-hover': '0 20px 30px -10px rgba(2, 44, 34, 0.08), 0 10px 10px -5px rgba(2, 44, 34, 0.04)',
      },
    },
  },
  plugins: [],
}
