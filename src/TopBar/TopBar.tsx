import styles from './TopBar.module.css';
import Link from 'next/link';

export function TopBar() {
  return(
    <nav id="topBar" className={styles.topBar}>
      <div className={styles.logoContainer}>
        <div className={styles.logo} />
        <div className={styles.logoText}>Manhwa Scans</div>
      </div>
      <ul className={styles.navPages}>
        <li>
          <Link href="/">
            <a className={styles.page}>
                            Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={styles.page}>
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={styles.page}>
                            Contact Us
            </a>
          </Link>
        </li>
        <li>
          <Link href="/features">
            <a className={styles.page}>
                            Features
            </a>
          </Link>
        </li>
      </ul>
      <div className={styles.accountContainer}>
        <Link href="/" passHref>
          <div className={styles.account}>
          </div>
        </Link>
      </div>
    </nav>
  );
}