import type { Config } from 'tailwindcss'

export default {
    darkMode: ['selector', '[data-theme="dark"]'],
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Semantic tokens driven by CSS variables (see src/index.css).
                // Stored as "R G B" triplets so Tailwind alpha modifiers work.
                paper: 'rgb(var(--paper) / <alpha-value>)',
                'paper-raised': 'rgb(var(--paper-raised) / <alpha-value>)',
                ink: 'rgb(var(--ink) / <alpha-value>)',
                muted: 'rgb(var(--muted) / <alpha-value>)',
                line: 'rgb(var(--line) / <alpha-value>)',
                accent: 'rgb(var(--accent) / <alpha-value>)',
                'accent-fg': 'rgb(var(--accent-fg) / <alpha-value>)',
                cobalt: 'rgb(var(--cobalt) / <alpha-value>)',
            },
            fontFamily: {
                display: ['var(--font-display)', 'system-ui', 'sans-serif'],
                sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
                mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
            },
            borderRadius: {
                // One near-sharp Swiss radius scale, locked.
                none: '0',
                sm: '2px',
                DEFAULT: '3px',
                md: '4px',
            },
            maxWidth: {
                shell: '1440px',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            animation: {
                marquee: 'marquee 48s linear infinite',
            },
        },
    },
    plugins: [],
} satisfies Config
