import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.footer}> 
      <div className={styles.llama_links}>
        <h6>Llamas</h6>
        <Link href='/herd'>
          <a>Our Herd</a>
        </Link>
        <Link href='/herd'>
          <a>For Sale</a>
        </Link>
        <Link href='/herd'>
          <a>Sold</a>
        </Link>
      </div>
      <div className={styles.footer_other}>
        <h6>Other</h6>
        <Link href='/contact-us'>
          <a>Contact Us</a>
        </Link>
      </div>
      <div className={styles.created_by}>
        <span>Created by <a href='https://lumberhacking.com'>LumberHacking LLC</a></span>
      </div>
    </footer> 
  )
}
