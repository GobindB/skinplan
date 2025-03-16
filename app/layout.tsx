import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import { Analytics } from "@vercel/analytics/react"
import { PostHogProvider } from './providers';

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
            <head>
                <Script id="fb-pixel" strategy="afterInteractive">
                    {`
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '4092487697739791');
                        fbq('track', 'PageView');
                    `}
                </Script>
            </head>
            <body className={`${inter.className} min-h-screen bg-[#0A0A0E]`}>
                <noscript>
                    <img 
                        height="1" 
                        width="1" 
                        style={{ display: 'none' }}
                        src="https://www.facebook.com/tr?id=4092487697739791&ev=PageView&noscript=1"
                        alt=""
                    />
                </noscript>
                <PostHogProvider>
                    {children}
                    <Analytics />
                </PostHogProvider>
            </body>
        </html>
    );
}
