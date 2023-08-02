import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer = () => {

  return (
    <footer className={styles.footer}>
      <Link href="/info" className={styles.link}>О телеканале</Link>
      <Link href="/info" className={styles.link}>Техническая поддержка</Link>
      <Link href="/info" className={styles.link}>Условия использования</Link>
    </footer>
  )
}