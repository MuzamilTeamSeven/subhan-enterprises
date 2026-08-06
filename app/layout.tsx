import { Analytics } from '@vercel/analytics/next'
import type { Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { BackgroundDepth } from '@/components/background-depth'
import { ScrollToTop } from '@/components/scroll-to-top'
import { defaultMetadata } from '@/lib/seo'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata = defaultMetadata

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        <ScrollToTop />
        <BackgroundDepth />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
