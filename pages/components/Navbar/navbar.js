import Link from "next/link";
import styles from "../../../styles/navbar.module.css";

// export default function Navbar(props) {
function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>
          <h1>B A N S H E E</h1>
        </a>
      </Link>
    </div>
  );
}

export default Navbar;
