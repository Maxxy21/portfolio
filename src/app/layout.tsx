import type {Metadata} from 'next'
import {SpeedInsights} from "@vercel/speed-insights/next"
import {Providers} from "@/components/providers"
import './globals.css'
import '@fontsource/sen'


export const metadata: Metadata = {
    title: 'Maxwell Aboagye - Full-Stack Developer | Amazon Hamburg | Java, TypeScript, React',
    description: 'Full-stack software developer at Amazon Hamburg. Built automation tools used daily by operations teams. Experienced in Java, TypeScript, React, Spring Boot, CI/CD, and DevOps. CS graduate from Free University of Bozen-Bolzano.',
    keywords: [
        'Maxwell Aboagye',
        'Software Developer Hamburg',
        'Full Stack Developer',
        'DevOps Engineer',
        'Amazon Developer',
        'Java Developer',
        'TypeScript Developer',
        'React Developer',
        'Spring Boot',
        'Next.js Developer',
        'CI/CD Engineer',
        'GitHub Actions',
        'Browser Extension Developer',
        'Automation Engineer',
        'Hamburg Tech',
        'Computer Science Graduate',
        'Free University Bozen',
        'AWS',
        'Docker',
        'Kubernetes'
    ],
    authors: [{ name: 'Maxwell Aboagye', url: 'https://maxwell.is-a.dev' }],
    creator: 'Maxwell Aboagye',
    publisher: 'Maxwell Aboagye',
    icons: "/portrait.jpg",
    openGraph: {
        title: 'Maxwell Aboagye - Full-Stack Developer at Amazon Hamburg',
        description: 'Automation-focused software developer building production tools with Java, TypeScript, and React. Automated 15-minute manual workflows into one-click solutions at Amazon.',
        url: 'https://maxwell.is-a.dev',
        siteName: 'Maxwell Aboagye - Software Developer Portfolio',
        locale: 'en_US',
        type: 'profile',
        images: [
            {
                url: 'https://maxwell.is-a.dev/portrait.jpg',
                width: 800,
                height: 600,
                alt: 'Maxwell Aboagye - Software Developer',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Maxwell Aboagye - Full-Stack Developer | Amazon Hamburg',
        description: 'Building automation tools that save teams hours weekly. Java, TypeScript, React, DevOps.',
        images: ['https://maxwell.is-a.dev/portrait.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'verification_token', // Replace with actual Google Search Console verification
    },
    alternates: {
        canonical: 'https://maxwell.is-a.dev',
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Maxwell Aboagye",
        "url": "https://maxwell.is-a.dev",
        "image": "https://maxwell.is-a.dev/portrait.jpg",
        "sameAs": [
            "https://github.com/Maxxy21",
            "https://www.linkedin.com/in/maxwell-aboagye/"
        ],
        "jobTitle": "Software Developer",
        "worksFor": {
            "@type": "Organization",
            "name": "Amazon"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hamburg",
            "addressCountry": "Germany"
        },
        "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Free University of Bozen-Bolzano"
        },
        "knowsAbout": [
            "Software Development",
            "Full-Stack Development",
            "DevOps",
            "Java",
            "TypeScript",
            "React",
            "Spring Boot",
            "CI/CD",
            "Automation"
        ],
        "email": "aboagyemaxwell@outlook.com"
    }

    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </head>
        <body>
        <Providers>
            {children}
            <SpeedInsights/>
        </Providers>
        </body>
        </html>
    )
}