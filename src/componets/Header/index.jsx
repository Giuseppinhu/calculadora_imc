import styles from './Header.module.css'

const Header = () => {
    return (
      <header className={styles.header}>
          <h1 className={styles.title}>Calculadora de IMC</h1>
          <nav>
            <ul className={styles.socialLinks}>
                <li className={styles.link}>
                    <a href="#" className={styles.linkItem}><i class="fi fi-brands-linkedin"></i></a>
                </li>
                <li className={styles.link}>
                    <a href="#" className={styles.linkItem}><i class="fi fi-brands-github"></i></a>
                </li>
            </ul>
          </nav>
      </header>
    )
}

export default Header;