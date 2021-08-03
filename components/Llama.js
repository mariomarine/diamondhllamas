import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Llama({ llama }) {
  console.log(llama);
  return (
    <li className={styles.llama_card}>
      <Link href="/llama/[id]" as={`/llama/${llama.id}`}>
        <a>
          <img src={llama.profile_pic} />
          <h5><b>{llama.name}</b></h5>
          <p>{llama.description}</p>
        </a>
      </Link>
    </li>
  )
}
