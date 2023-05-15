import Link from "next/link"

const products = ['shirt', 'pants', 'skirt', 'shoes']; // 임시 데이터

export default function ProductsPage() {

  return (
    <>
      <h1>제품 소개 페이지</h1>
      <ul>
        {products.map((product) => (
          <li key={product}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}