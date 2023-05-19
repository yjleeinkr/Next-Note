import Image from 'next/image'
import styles from './page.module.css'
import os from 'os' // 노드 APIs - 노드가 동작하고 있는 운영체제에 대한 정보를 가져올 수 있다.
// import { useState } from 'react'
import Counter from '@/components/Counter'

export default function Home() {
  // const [state, setState] = useState('') 서버 컴포넌트이므로 브라우저와 연관된 상태훅을 쓰지 못한다! 컴파일 에러 발생
  console.log('안녕 서버', os.hostname())
  return (
    <>
      <h1>홈페이지 v3</h1>
      <Counter />
      <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" alt="shop" width={400} height={400}/>
    </>
  );
}
