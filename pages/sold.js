import Link from 'next/link'
import styles from '../styles/Home.module.css'

import useSWR from 'swr'

import Llama from '../components/Llama'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Head from '../components/Head'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Sold() {
  const { data, error } = useSWR('/api/llamas/sold', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  if (data.message) {
    return (
      <div className={styles.container}>
        <Head />
        <Header />
        <p>{data.message}</p>
      </div>
    )
  }
  
  return (
    <div className={styles.container}>
      <Head />
      <Header />

      <main className={styles.main}>
        <h3 className={styles.title}>
          Previously Sold Llamas
        </h3>

        <ul className={styles.llama_pen}>
          {data.map((l, i) => (
            <Llama key={i} llama={l} />
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  )
}
