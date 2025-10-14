import type {Metadata} from 'next'
import {SpeedInsights} from "@vercel/speed-insights/next"
import './globals.css'
import '@fontsource/sen'


export const metadata: Metadata = {
    title: 'Maxwell Aboagye - Software Developer | Full-Stack & DevOps',
    description: 'Software Developer specializing in full-stack development, DevOps, and cloud solutions. Building production systems at Amazon Hamburg. Experienced in Java, Python, React, AWS, and CI/CD.',
    keywords: ['Software Developer', 'Full Stack Developer', 'DevOps Engineer', 'Java Developer', 'React Developer', 'Hamburg', 'Amazon', 'Next.js', 'Spring Boot', 'AWS', 'CI/CD', 'GitHub Actions', 'TypeScript', 'Python'],
    icons: "/portrait.jpg",
    openGraph: {
        title: 'Maxwell Aboagye - Software Developer',
        description: 'Building production systems and full-stack applications. Experienced in Java, Python, React, AWS, and DevOps.',
        url: 'https://maxwell.is-a.dev',
        siteName: 'Maxwell Aboagye Portfolio',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Maxwell Aboagye - Software Developer',
        description: 'Building production systems that solve real problems. Full-Stack & DevOps.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
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