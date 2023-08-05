import { Header } from '@/components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Commissioner } from 'next/font/google'
import { Footer } from '@/components/Footer/Footer'

const commissioner = Commissioner({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: 'Моя кухня',
  description: 'Говорим о еде, готовим как профи, едим как гурманы',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="ru">
      <body className={commissioner.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
