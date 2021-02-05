import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "./components/Date/date";
import Layout from "./components/Layout/layout";

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
    <Layout>
      <h1 className="hello">
        Welcome to <span>Banshee</span>!
      </h1>
      <Link href="/blog">
        <a>GO TO BLOG</a>
      </Link>
      <section>
        <h2>Recent articles</h2>
        <ul>
          {/* In the homepage, show only the 4 most recent posts */}
          {allPostsData.slice(0, 4).map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/blog/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      {/* Check grid class for articles */}
    </Layout>
  );
}

export default Home;
