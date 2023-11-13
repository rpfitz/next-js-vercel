import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dra. Valéria Siqueira | Medicina Integrativa em Maceió - Alagoas',
  description: 'Clínica Médica',
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
      {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" crossOrigin=''/> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
