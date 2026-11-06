/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep blue-ink base: calm, readable, not pure black.
        ink: {
          950: '#080D17',
          900: '#0C1322',
          800: '#121B2E',
          700: '#1B2640',
          600: '#2A3756',
        },
        // Jade (from the name) is the main accent.
        jade: {
          200: '#B4F2E0',
          300: '#7FE8C8',
          400: '#4FD8B0',
          500: '#2FBF95',
          600: '#1F9A78',
        },
        // Brown-sugar, a nod to the milk tea project, is the warm secondary.
        sugar: {
          300: '#F2D3A6',
          400: '#E8B979',
          500: '#CF9650',
        },
        mist: '#C9D2E3',
        fog: '#94A0B8',
        paper: '#F3EEE3',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        body: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        receipt: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 48px -28px rgba(0,0,0,0.7)',
        glow: '0 0 0 1px rgba(79,216,176,0.35), 0 12px 40px -12px rgba(79,216,176,0.35)',
      },
      keyframes: {
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(79,216,176,0.55)' },
          '70%': { boxShadow: '0 0 0 8px rgba(79,216,176,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(79,216,176,0)' },
        },
      },
      animation: {
        'pulse-ring': 'pulseRing 2.4s ease-out infinite',
      },
    },
  },
  plugins: [],
}
