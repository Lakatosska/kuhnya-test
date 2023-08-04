import Image from 'next/image';
import styles from './RecipeCard.module.css';

export const RecipeCard = ({image, title}) => {
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
}