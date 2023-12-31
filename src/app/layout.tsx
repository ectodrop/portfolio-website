import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css'
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Howard Portfolio',
  description: 'A website to showcase projects I\'ve worked on',
  openGraph: {
    images: [{
      url: 'https://hyang.dev/preview.png'
    }]
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DEL70N49ZN" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-DEL70N49ZN');
          `}
        </Script>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
