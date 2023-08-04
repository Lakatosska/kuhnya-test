import { FC } from 'react';
import Image from 'next/image';
import styles from './RecipeCard.module.css';

export interface IRecipeProps {
  id?: number,
  image: any;
  title: string;
  category?: string;
  rating?: number;
}

export const RecipeCard: FC<IRecipeProps> = ({ image, title, category }) => {
  return (
    <li className={styles.card}>

      
        <Image
            src={image} alt={title}
            className={styles.image}
          />

        <div className={styles.categoryContainer}>
          <p className={styles.category}>{category}</p>
        </div>

      

      <div className={styles.titleContainer}>
        <p className={styles.title}>{title}</p>
      </div>
    </li>
  )
}