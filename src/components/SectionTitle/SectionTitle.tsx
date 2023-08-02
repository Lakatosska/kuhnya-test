import Link from 'next/link';
import styles from './SectionTitle.module.css';

export const SectionTitle = () => {

  return (
    <div className={styles.titleBlock}>
      <h2 className={styles.title}>Мои рецепты</h2>

      <Link href="/recipes">
        <span className={styles.link}>Смотреть все</span>
      </Link>

    </div>
  )
}

export const SectionTitle2 = () => {

  return (
    <div className={styles.titleBlock}>
      <h2 className={styles.title}>Мои лайфхаки</h2>

      <Link href="/lifehacks">
        <span className={styles.link}>Смотреть все</span>
      </Link>

    </div>
  )
}