import styles from "../../styles/articlesList.module.css";
import Link from "next/link";
import Date from "../../components/Date/date";

export default function ArticlesList({ posts }) {
  const postsList = posts.map((post) => {
    return (
      <li className={styles.listItem} key={post.id}>
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

  return <ul className={styles.list}>{postsList}</ul>;
}
