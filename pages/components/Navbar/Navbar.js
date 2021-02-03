import Link from 'next/link'
import styles from '../../../styles/Navbar.module.css'

export default function Navbar() {
    return (
      <div className={styles.container}>
        <Link href="/">LOGO</Link>
      </div>
    )
  }
  