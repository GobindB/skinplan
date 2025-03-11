import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Analytics } from "@vercel/analytics/react"

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Skincare Journey',
    description: 'Your personalized skincare routine planner',
    manifest: '/favicons/site.webmanifest',
    icons: {
        icon: [
            { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicons/favicon.ico', sizes: '48x48', type: 'image/x-icon' }
        ],
        apple: [
            { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
        ],
        other: [
            { rel: 'android-chrome-192x192', url: '/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
            { rel: 'android-chrome-512x512', url: '/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
        ]
    }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="bg-[#0A0A0E] text-white">
            <body className={`${inter.className} min-h-screen bg-[#0A0A0E]`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
