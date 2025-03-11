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
        <html lang="en" className="bg-[#0A0A0E] text-white">
            <body className={`${inter.className} min-h-screen bg-[#0A0A0E]`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
