import Link from 'next/link'
import styles from '../../../styles/Navbar.module.css'

// export default function Navbar(props) {
function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/"><a>LOGO</a></Link>
    </div>
  )
}

export default Navbar