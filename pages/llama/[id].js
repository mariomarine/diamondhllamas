import { useRouter } from 'next/router'
import useSWR from 'swr'
import Header from '../../components/Header'
import Head from '../../components/Head'
import styles from '../../styles/Home.module.css'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Llama() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/llamas/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  let gender;

  if (data.gender == 'F') {
    gender = 'Female'
  } else {
    gender = 'Male'
  }

  return (
    <div className={styles.container}>
      <Head />

      <main className={styles.main}>
        <Header />

        <img src={"../" + data.profile_pic} />
        <h2>{data.name}</h2>
        <p>{gender}</p>
        <p>{data.description}</p>
      </main>
    </div>
  )
}
