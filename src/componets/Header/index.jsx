import styles from './Header.module.css'

const Header = () => {
    return (
      <header className={styles.header}>
          <h1 className={styles.title}>Calculadora de IMC</h1>
          <nav>
            <ul className={styles.socialLinks}>
                <li className={styles.link}>
                    <a href="#" className={styles.linkItem}>LinkInd</a>
                </li>
                <li className={styles.link}>
                    <a href="#" className={styles.linkItem}>Github</a>
                </li>
            </ul>
          </nav>
      </header>
    )
}

export default Header;