import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Analytics } from "@vercel/analytics/react"

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Skincare Journey',
    description: 'Your personalized skincare routine planner',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png'
    }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="5p53:aw">
            <body className={inter.className} data-oid="bf3bkif" overflow-x-hidden>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
