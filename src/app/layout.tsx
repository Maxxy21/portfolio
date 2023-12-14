import type {Metadata} from 'next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'
import '@fontsource/sen';

import {ThemeProvider} from "@/context/ThemeContext";
import ClientThemeWrapper from "@/context/ClientThemeWrapper";


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
