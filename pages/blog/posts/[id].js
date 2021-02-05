import Head from "next/head";
import styles from "../../../styles/post.module.css";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import Date from "../../components/Date/date";
import Link from "next/link";
import Layout from "../../components/Layout/layout";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={styles.headingXl}>{postData.title}</h1>
        <div className={styles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <Link href="/blog">Back to all articles</Link>
    </Layout>
  );
}
