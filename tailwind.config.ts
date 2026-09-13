import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ---- Dark, premium base (Bloomberg-terminal density × Apple restraint) ----
        // Named "canvas", not "base" — Tailwind's default type scale already owns
        // the "base" key (text-base = 1rem), and colliding with it silently rewrites
        // every plain `text-base` site-wide to this color. Same trap applies to any
        // future custom color key: never reuse xs/sm/base/lg/xl/2xl.../9xl.
        canvas: '#07080A', // page root — deepest black
        void: '#000000', // reserved for maximum-emphasis blocks (footer, ticker rail)
        background: '#07080A',
        paper: '#0F1216', // default elevated surface (cards, sections, nav pill)
        ink: '#ECE7DA', // primary foreground — warm off-white text / hairline borders
        text: '#ECE7DA',
        'surface-light': '#161A20', // secondary elevated surface
        'surface-dark': '#262C35', // hairline / divider tone on dark surfaces

        // ---- Brand + data accents ----
        primary: '#D4AF37', // gold — brand accent, links, primary emphasis (was cobalt blue)
        gold: '#D4AF37',
        'primary-dark': '#B3922C',
        lime: '#14B876', // emerald — structural "up" / entry-zone cue (was lime green)
        emerald: '#14B876',
        coral: '#E5484D', // crimson — structural "down" / invalidation cue (was coral)
        crimson: '#E5484D',
        sun: '#F2B705', // amber/gold — warnings, ratings, highlights (was sun yellow)
        amber: '#F2B705',
        telegram: '#229ED9',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '6px',
        lg: '10px',
      },
      fontSize: {
        h1: ['clamp(2.5rem, 5vw + 1rem, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        h2: ['clamp(2rem, 3vw + 1rem, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        body: ['1.25rem', { lineHeight: '1.6' }],
        'body-lg': ['1.5rem', { lineHeight: '1.5' }],
      },
      boxShadow: {
        // Soft elevation system — replaces the old hard-offset "brutal" shadows
        'brutal-sm': '0 4px 14px -6px rgba(0,0,0,0.55)',
        brutal: '0 10px 30px -10px rgba(0,0,0,0.6)',
        'brutal-lg': '0 20px 48px -14px rgba(0,0,0,0.65)',
        'brutal-xl': '0 30px 70px -18px rgba(0,0,0,0.7)',
        'brutal-primary': '0 0 0 1px rgba(212,175,55,0.35), 0 16px 40px -16px rgba(212,175,55,0.3)',
        'brutal-lime': '0 0 0 1px rgba(20,184,118,0.35), 0 16px 40px -16px rgba(20,184,118,0.3)',
        'brutal-coral': '0 0 0 1px rgba(229,72,77,0.35), 0 16px 40px -16px rgba(229,72,77,0.3)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

export default config
