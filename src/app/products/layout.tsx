import styles from './layout.module.css'

type ChildrenProps = {
  children : React.ReactNode
}
export default function ProductLayout({ children } : ChildrenProps) {
  return (
    <div>
      <nav className={styles.nav}>
        <a href="">여성복</a>
        <a href="">남성복</a>
      </nav>
      <section className={styles.productContainer}>{children}</section>
    </div>
  );
}
