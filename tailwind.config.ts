import type { Config } from 'tailwindcss'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#ededed',
                secondary: '#a1a1aa',
                accent: '#3b82f6', // Subtle blue for AI
                background: '#0a0a0a',
                surface: '#171717',
                border: '#262626',
                dark: "#0F172A", // Keeping original dark just in case
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)",
            }
        },
    },
    plugins: [],
} satisfies Config
