import { getProducts } from "@/service/products";
import Link from "next/link"
import styles from './page.module.css'

// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();
  const res = await fetch('https://meowfacts.herokuapp.com', {
    next: { revalidate: 3 },
    // cache: 'no-store'  // || revalidate: 0 => SSR 가능 옵션
  }); 
  const data = await res.json();
  const factText = data.data[0];

  return (
    <>
      <h1>제품 소개 페이지</h1>
      <ul>
        {products.map(({id, name}, idx) => (
          <li key={idx}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <article className={styles.article}>
        {factText}
      </article>
    </>
  );
}