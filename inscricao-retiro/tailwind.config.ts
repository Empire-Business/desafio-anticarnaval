import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4D03F',
          dark: '#B8960E',
        },
        dark: {
          gray: '#1A1A1A',
          bg: '#0A0A0A',
        },
        red: {
          accent: '#E74C3C',
        },
        green: {
          success: '#27AE60',
        },
        purple: '#6B46C1',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      fontSize: {
        'hero-xl': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-lg': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'hero-md': ['40px', { lineHeight: '1.2' }],
        'hero-sm': ['36px', { lineHeight: '1.2' }],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'confetti': 'confetti 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        confetti: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
          '50%': { transform: 'translateY(20px) rotate(180deg)', opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
export default config
