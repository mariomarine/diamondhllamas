import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Header() {
  return (
    <div>
      <h1 className={styles.title}>
        <Link href="/"><a>Diamond H Llamas</a></Link>
      </h1>

      <p className={styles.description}>
        Llama ranch in Lander, WY
      </p>
    </div>
  )
}
