import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Analytics } from "@vercel/analytics/react"

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'skinplan',
    description: 'take the guesswork out of your skincare routine',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="5p53:aw">
            <body className={inter.className} data-oid="bf3bkif">
                {children}
                <Analytics />
            </body>
        </html>
    );
}
