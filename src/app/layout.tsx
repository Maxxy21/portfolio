import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import '@fontsource/sen';
import {ThemeProvider} from "@/context/ThemeContext";
import ClientThemeWrapper from "@/context/ClientThemeWrapper";


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Maxwell Aboagye',
    description: 'Software Developer based in Hamburg, Germany.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider>
            <ClientThemeWrapper>
                {children}
            </ClientThemeWrapper>
        </ThemeProvider>
        </body>

        </html>
    )
}
