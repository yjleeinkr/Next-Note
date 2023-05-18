import { Metadata } from 'next'
import { Open_Sans, Nanum_Gothic } from "next/font/google";
import Link from 'next/link'
import './globals.css'
import styles from './layout.module.css'

const sans = Open_Sans({ subsets: ['latin'] });
const nanum = Nanum_Gothic({ weight: '700', subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Cool Site',
  description: 'Cool한 사이트입니다.',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <header className={styles.header}>
          <h1 className={nanum.className}>Demo Note</h1>
          <nav className={styles.nav}>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
