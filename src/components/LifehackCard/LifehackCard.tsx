import Image from 'next/image';
import styles from './LifehackCard.module.css';


export const LifehackCard = ({image, title}) => {
  return (
    <li className={styles.card}>
      <Image
          src={image} alt={title}
          className={styles.image}
      />
      <div className={styles.titleContainer}>
        <p className={styles.title}>{title}</p>
      </div>

    </li>
  )
};