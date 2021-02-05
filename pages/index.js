import Link from "next/link";
import { getRecentSortedPostsData } from "../lib/posts";
import ArticlesList from "../components/ArticlesList/articlesList";
import Layout from "../components/Layout/layout";
import styles from "../styles/home.module.css";

export async function getStaticProps() {
  const recentPostsData = getRecentSortedPostsData();
  return {
    props: {
      recentPostsData,
    },
  };
}

function Home({ recentPostsData }) {
  return (
    <Layout>
      <h1 className={styles.heading2Xl}>
        Welcome to <span>Banshee</span>!
      </h1>
      <section>
        <h2>Recent articles</h2>
        <ArticlesList posts={recentPostsData} />
      </section>
      <Link href="/blog">
        <a>SEE ALL ARTICLES</a>
      </Link>
      {/* Check grid class for articles */}
    </Layout>
  );
}

export default Home;
