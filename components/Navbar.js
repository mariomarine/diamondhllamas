import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className={styles.navbar}> 
      <Link href='/herd'>
        <a>Our Herd</a>
      </Link>
      <Link href='/for-sale'>
        <a>For Sale</a>
      </Link>
      <Link href='/sold'>
        <a>Sold</a>
      </Link>
      <Link href='/contact-us'>
        <a>Contact Us</a>
      </Link>
    </nav> 
  )
}
