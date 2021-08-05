import Head from '../components/Head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Header from '../components/Header'
import Footer from '../components/Footer'

import landscape from '../landscape_1.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />

      <main className={styles.main}>
        <Header />
        <div>
          <Image src={landscape} alt="Landscape" />
        </div>
        <div className={styles.grid}>
          <Link href='/herd'>
            <a className={styles.card}>
              <h2>Our Llamas &rarr;</h2>
              <p>Come meet our lovely llamas!</p>
            </a>
          </Link>

          <Link href='/for-sale'>
            <a className={styles.card}>
              <h2>For Sale &rarr;</h2>
              <p>Looking to add to your own herd?</p>
            </a>
          </Link>

          <Link href='/sold'>
            <a className={styles.card}>
              <h2>Sold &rarr;</h2>
              <p>See some of our graduates</p>
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
