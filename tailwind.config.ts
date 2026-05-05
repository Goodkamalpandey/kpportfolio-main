import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'media',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        kp: {
          bg: '#F6F7F9',
          ink: '#09090B',
          accent: '#1D4ED8',
          emerald: '#059669',
          award: '#D97706',
          muted: '#71717A',
          line: '#E4E4E7',
          navy: '#070D1C',
          strip: '#F0F1F4',
        },
        dark: {
          bg: '#070D1C',
          text: '#F0F4FF',
          card: '#0D1528',
        },
      },
      fontFamily: {
        sans: ['var(--font-kp-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
        serif: ['var(--font-kp-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-kp-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: ['5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-sm': ['3.5rem', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
      },
      maxWidth: {
        content: '1200px',
        read: '42rem',
      },
      boxShadow: {
        'kp-soft':
          '0 1px 0 rgba(9, 9, 11, 0.04), 0 18px 48px -20px rgba(9, 9, 11, 0.07)',
        'kp-nav': '0 8px 32px -6px rgba(9, 9, 11, 0.08)',
        'kp-elevated':
          '0 1px 2px rgba(9, 9, 11, 0.04), 0 24px 56px -28px rgba(9, 9, 11, 0.09)',
        'kp-primary':
          '0 1px 2px rgba(29, 78, 216, 0.12), 0 8px 24px -6px rgba(29, 78, 216, 0.28)',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'scroll-hint': 'scrollHint 1.8s ease-in-out infinite',
      },
      keyframes: {
        scrollHint: {
          '0%, 100%': { opacity: '0.35', transform: 'translateY(0)' },
          '50%': { opacity: '1', transform: 'translateY(6px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
