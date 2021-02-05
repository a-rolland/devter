import styles from "../../styles/blog.module.css";
import Layout from "../../components/Layout/layout";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import ArticlesList from "../../components/ArticlesList/articlesList";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <h1>Blog</h1>
      <ArticlesList posts={allPostsData} />
      <Link href="/">
        <a className={styles.backToHomepage}>Back to Homepage</a>
      </Link>
    </Layout>
  );
}
