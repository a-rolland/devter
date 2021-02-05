// import styles from "./styles.module.css";
import Layout from "../components/Layout/layout";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from "../components/Date/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  const posts = allPostsData.map((post) => {
    return (
      <li key={post.id}>
        <Link href={`/blog/posts/${post.id}`}>
          <a>{post.title}</a>
        </Link>
        <br />
        <small>
          <Date dateString={post.date} />
        </small>
      </li>
    );
  });

  return (
    <Layout>
      <h1>Blog</h1>
      <ul>{posts}</ul>
      <Link href="/">Back to Home</Link>
    </Layout>
  );
}
