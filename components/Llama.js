import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Llama({ llama }) {
  console.log(llama);
  return (
    <li className={styles.llama_card}>
      <Link href="/llama/[id]" as={`/llama/${llama.id}`}>
        <a>
          <Image src={'/' + llama.profile_pic} height="225" width="400" />
          <h4><b>{llama.name}</b></h4>
          <p>{llama.description}</p>
        </a>
      </Link>
    </li>
  )
}
