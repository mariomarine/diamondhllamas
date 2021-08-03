import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.footer}> 
      <div className='createdBy'>
        Created by <a href='https://lumberhacking.com'>LumberHacking LLC</a>
      </div>
    </footer> 
  )
}
