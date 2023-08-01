import styles from './Footer.module.css';

export const Footer = () => {

  return (
    <footer className={styles.footer}>
      <p>О телеканале</p>
      <p>Техническая поддержка</p>
      <p>Условия использования</p>
    </footer>
  )
}