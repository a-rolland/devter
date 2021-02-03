import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome | Banshee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.brand}>Banshee</span>!
        </h1>
        <Link href="/articles">ARTICLES</Link>
      </main>

      {/* Check grid class for articles */}
    </div>
  )
}
