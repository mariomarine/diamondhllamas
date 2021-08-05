import Head from '../components/Head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />

      <main className={styles.main}>
        <Header />
        <p>For more information email Ingrid at DiamondHLlamas@gmail.com or text/call +1(307)330-5012</p>
      </main>

      <Footer />
    </div>
  )
}
