import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dra. Valéria Siqueira | Consulta de Qualidade',
  description: 'Consulta de Qualidade',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
