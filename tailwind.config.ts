import type {Config} from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Sen', ...defaultTheme.fontFamily.sans],
            },
            screens: {sm: "480px", md: "768px", lg: "976px", xl: "1440pd"},
            animation: {
                fadeIn: "fadeIn 1.5s",
                bounce:
                    "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
                slideUp: "slideUp 0.5s",
                slideUpEaseInOut: "slideUp 0.5s ease-in-out",
                slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
            },
            animationDelay: {
                0: "0s",
                2: "0.2s",
                4: "0.4s",
                6: "0.6s",
            },
            keyframes: {
                fadeIn: {
                    from: {opacity: 0},
                    to: {opacity: 1},
                },
                slideUp: {
                    from: {transform: "translateY(100%)"},
                    to: {transform: "translateY(0)"},
                },
                bounce: {
                    from: {transform: "translateY(10px)"},
                    to: {transform: "translateY(0)"},
                },
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light", "dark"],
        myTheme: {
            primary: "#f9a8d4",
            "primary-focus": "#f9a8d4",
            "primary-content": "#ffffff",
            secondary: "#f9a8d4",
            "secondary-focus": "#f9a8d4",
            "secondary-content": "#ffffff",
            accent: "#37cdbe",
            "accent-focus": "#2aa79b",
            "accent-content": "#ffffff",
            neutral: "#3d4451",
            "neutral-focus": "#2a2e37",
            "neutral-content": "#ffffff",
            "base-100": "#ffffff",
            "base-200": "#f9fafb",
            "base-300": "#d1d5db",
            "base-content": "#1f2937",
            info: "#2094f3",
            success: "#009485",
            warning: "#ff9900",
            error: "#ff5724",
        },
    },
}
export default config
