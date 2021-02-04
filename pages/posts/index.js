import Link from "next/link";
import styles from "../../styles/Blog.module.css";

export default function Articles() {
  return (
    <div className={styles.container}>
      <h1>This is the articles section</h1>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
