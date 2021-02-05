import Head from "next/head";
import styles from "../../../styles/post.module.css";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import Date from "../../../components/Date/date";
import Link from "next/link";
import Layout from "../../../components/Layout/layout";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// Import from components !!!
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title} | Banshee</title>
      </Head>
      <article className={styles.container}>
        <h1 className={styles.headingXl}>{postData.title}</h1>
        <p className={styles.lightText}>Written by: {postData.author}</p>
        <small className={styles.lightText}>
          <Date dateString={postData.date} />
        </small>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <Link href="/blog">
        <a className={styles.backToAllArticles}>Back to all articles</a>
      </Link>
    </Layout>
  );
}
