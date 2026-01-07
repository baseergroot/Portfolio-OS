import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.baseer.online'), 
  description: 'Interactive OS-style portfolio of a self-taught full-stack developer',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Baser Afridi | Full-Stack Developer',
    description: 'Interactive OS-style portfolio of a self-taught full-stack developer',
    url: 'https://www.baseer.online',
    siteName: 'Baser Afridi Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-gray-100 overflow-hidden`}>
        {children}
      </body>
    </html>
  )
}