'use client';
import { useState } from "react";

export default function Counter() {
  console.log('안녕 클라이언트')
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((prev)=> prev+1)}>숫자 올리기</button>
    </>
  )
}
