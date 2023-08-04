import Link from 'next/link';
import styles from './SliderTitle.module.css';

export const SliderTitle = ({ title, link }) => {

  return (
    <div className={styles.titleBlock}>
      <h2 className={styles.title}>{title}</h2>

      <Link href={link}>
        <span className={styles.link}>Смотреть все</span>
      </Link>

    </div>
  )
};