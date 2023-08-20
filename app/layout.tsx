import Header from '@/components/Header'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import ToasterClient from '@/components/ToasterClient'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aluraflix',
  description: 'Último proyecto Oracle Next Education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ToasterClient />
        <Header />
          {children}
        <Footer />
    </body>
    </html>
  )
}
