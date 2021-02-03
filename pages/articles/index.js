import Link from 'next/link'
import styles from '../../styles/Articles.module.css'

export default function Articles () {
    return (
        <div className={styles.container}>
            <Link href="/">HOME</Link>
            <h1>This is the articles section</h1>
        </div>
    )
}