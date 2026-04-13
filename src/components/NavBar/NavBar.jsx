import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'

export default function NavBar() {
    return(
        <header className={styles.navbar}>
            <div className={styles.inner}>
                <Link to="/" className={styles.brand}>
                    <span className={styles.brandIcon}> 👥 </span>
                    <span className={styles.brandName}> Our Team </span>
                </Link>
            </div>
        </header>
    )
}