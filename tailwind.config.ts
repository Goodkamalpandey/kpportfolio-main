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
      /**
       * Typography aligned with Apple Human Interface Guidelines text styles
       * (default content size: Body 17pt, Subheadline 15pt, Footnote 13pt, Caption 11–12pt;
       * titles: Title 3 20pt → Large Title 34pt). Line heights approximate SF Pro metrics.
       */
      colors: {
        kp: {
          bg: '#0F172A',
          ink: '#F1F5F9',
          accent: '#D4AF37',
          emerald: '#D4AF37',
          award: '#F0CF6A',
          muted: '#94A3B8',
          line: '#334155',
          navy: '#0A0F1E',
          strip: '#1E293B',
        },
        dark: {
          bg: '#0F172A',
          text: '#F1F5F9',
          card: '#1E293B',
        },
      },
      fontFamily: {
        /** UI text: system SF on Apple, Segoe on Windows, then loaded DM Sans */
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"SF Pro Display"',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'var(--font-kp-sans)',
          'sans-serif',
        ],
        /** Display serif: New York on Apple, then loaded Playfair */
        serif: [
          'ui-serif',
          '"New York"',
          'Iowan Old Style',
          'Georgia',
          'var(--font-kp-serif)',
          'serif',
        ],
        /** Code / labels: SF Mono on Apple, then JetBrains Mono */
        mono: [
          '"SF Mono"',
          'SFMono-Regular',
          'ui-monospace',
          'Menlo',
          'Monaco',
          'Consolas',
          'var(--font-kp-mono)',
          'monospace',
        ],
        /** Legacy portfolio components (Boards, Hero, etc.) — system UI first */
        heading: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      fontSize: {
        /** Caption 2 — 11pt (uppercase labels / micro UI) */
        caption2: ['0.6875rem', { lineHeight: '0.875rem', letterSpacing: '0.06em' }],
        /** Footnote — 13pt */
        footnote: ['0.8125rem', { lineHeight: '1.125rem', letterSpacing: '-0.006em' }],
        xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0' }],
        sm: ['0.9375rem', { lineHeight: '1.25rem', letterSpacing: '-0.011em' }],
        base: ['1.0625rem', { lineHeight: '1.4705882352941178em', letterSpacing: '-0.022em' }],
        lg: ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.022em' }],
        xl: ['1.375rem', { lineHeight: '1.2727272727272727em', letterSpacing: '-0.022em' }],
        '2xl': ['1.75rem', { lineHeight: '1.2142857142857142em', letterSpacing: '-0.022em' }],
        '3xl': ['2.125rem', { lineHeight: '1.1764705882352942em', letterSpacing: '-0.022em' }],
        '4xl': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.024em' }],
        '5xl': ['3rem', { lineHeight: '1.05', letterSpacing: '-0.028em' }],
        '6xl': ['3.5rem', { lineHeight: '1.025', letterSpacing: '-0.032em' }],
        display: ['5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-sm': ['3.5rem', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
      },
      maxWidth: {
        content: '1200px',
        read: '42rem',
      },
      boxShadow: {
        'kp-soft':
          '0 1px 0 rgba(255, 255, 255, 0.04), 0 18px 48px -20px rgba(0, 0, 0, 0.4)',
        'kp-nav': '0 8px 32px -6px rgba(0, 0, 0, 0.45)',
        'kp-elevated':
          '0 1px 2px rgba(255, 255, 255, 0.04), 0 24px 56px -28px rgba(0, 0, 0, 0.55)',
        'kp-primary':
          '0 1px 2px rgba(212, 175, 55, 0.18), 0 8px 24px -6px rgba(212, 175, 55, 0.32)',
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
