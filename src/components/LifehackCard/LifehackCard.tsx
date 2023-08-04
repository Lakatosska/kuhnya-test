import Image from 'next/image';
import { FC } from 'react';
import styles from './LifehackCard.module.css';

export interface ILifehackProps {
  id?: number,
  image: any;
  title: string;
  rating?: number;
}

export const LifehackCard: FC<ILifehackProps> = ({image, title}) => {
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