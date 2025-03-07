import type {Metadata} from 'next'
import {SpeedInsights} from "@vercel/speed-insights/next"
import './globals.css'
import '@fontsource/sen'


export const metadata: Metadata = {
    title: 'Maxwell Aboagye | Software Developer',
    description: 'Software Developer based in Hamburg, Germany specializing in building high-performance web applications.',
    keywords: 'developer, software engineer, web developer, React, Next.js, JavaScript, TypeScript, Tailwind CSS, Java, Python',
    icons: "/portrait.jpg",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body>
        {children}
        <SpeedInsights/>
        </body>
        </html>
    )
}