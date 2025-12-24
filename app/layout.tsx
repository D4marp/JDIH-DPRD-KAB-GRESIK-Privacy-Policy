import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JDIH Kab. Gresik - Jaringan Dokumentasi dan Informasi Hukum',
  description: 'Aplikasi informasi publik JDIH Kabupaten Gresik yang menyediakan akses mudah ke peraturan perundang-undangan dan dokumentasi hukum. Tanpa login, gratis, dan terpercaya.',
  keywords: 'JDIH, Gresik, Hukum, Peraturan, Perda, Informasi Publik',
  authors: [{ name: 'Pemerintah Kabupaten Gresik' }],
  creator: 'Dinas Komunikasi dan Informatika Kab. Gresik',
  publisher: 'Pemerintah Kabupaten Gresik',
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://jdih-gresik.example.com',
    siteName: 'JDIH Kab. Gresik',
    title: 'JDIH Kab. Gresik - Jaringan Dokumentasi dan Informasi Hukum',
    description: 'Platform informasi publik yang menyediakan akses mudah ke peraturan perundang-undangan dan dokumentasi hukum Kabupaten Gresik',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="JDIH Gresik" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
