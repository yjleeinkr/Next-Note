import MeowArticle from "@/components/MeowArticle";
import { getProducts, Product } from "@/service/products";
import Link from "next/link";

type Props = {
  products: Product[]
}

export default function SSGPage({ products }: Props) {

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
      <MeowArticle />
    </>
  )
}

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
    revalidate: 10, // ISR 하고 싶은 경우
  }
}