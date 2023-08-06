import type { Metadata } from 'next'
import { Commissioner } from 'next/font/google'
import { AuthProvider } from '@/utils/AuthContext';
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer';
import './globals.css';
import styles from './page.module.css';

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
        <div className={styles.wrapper}>
          <AuthProvider>
            <Header />
              <main className={styles.main}>
                {children}
              </main>
            <Footer />
          </AuthProvider>
        </div>
      </body>
    </html>
  )
}
