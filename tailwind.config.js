/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Sophisticated, premium slate-to-indigo theme
        primary: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d0dbe9',
          300: '#a6bed9',
          400: '#739bc3',
          500: '#4f7ba9',
          600: '#3c628f',
          700: '#325075',
          800: '#2c4462',
          900: '#283b54',
          950: '#1a2536',
        },
        accent: {
          teal: '#0d9488', // Teal 600
          cyan: '#06b6d4', // Cyan 500
          indigo: '#6366f1', // Indigo 500
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Source Code Pro',
          'SFMono-Regular',
          'Consolas',
          'monospace',
        ],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
