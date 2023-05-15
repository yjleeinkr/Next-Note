import { Metadata } from 'next'
import Link from 'next/link'
import styles from './layout.module.css'

type ChildrenProps = {
  children : React.ReactNode
}

export const metadata: Metadata = {
  title: "Cool Site | 전체 제품 확인",
  description: "멋진  제품을 확인해 보세요",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function ProductLayout({ children } : ChildrenProps) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/woman">여성복</Link>
        <Link href="/products/man">남성복</Link>
      </nav>
      <section className={styles.productContainer}>{children}</section>
    </>
  );
}
