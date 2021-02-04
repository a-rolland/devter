import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "./components/Date/Date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.brand}>Banshee</span>!
        </h1>
        <Link href="/posts">
          <a>ARTICLES</a>
        </Link>
        <section>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li className={styles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={styles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Check grid class for articles */}
    </div>
  );
}

export default Home;
