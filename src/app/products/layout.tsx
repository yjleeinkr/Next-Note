import Link from 'next/link'
import styles from './layout.module.css'

type ChildrenProps = {
  children : React.ReactNode
}
export default function ProductLayout({ children } : ChildrenProps) {
  return (
    <div>
      <nav className={styles.nav}>
        <Link href="/products/woman">여성복</Link>
        <Link href="/products/man">남성복</Link>
      </nav>
      <section className={styles.productContainer}>{children}</section>
    </div>
  );
}
