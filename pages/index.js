import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Home({user}) {

  return (
    <div className={styles.container}>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.brand}>Banshee</span>!
        </h1>
        <Link href="/articles"><a>ARTICLES</a></Link>
        <h2>Hi, {user.name} {user.surname}</h2>
      </main>

      {/* Check grid class for articles */}
    </div>
  )
}

export const getStaticProps = async () => {
  return fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
    .then(response => {
      return {props: {user: response}}
    })
}

export default Home