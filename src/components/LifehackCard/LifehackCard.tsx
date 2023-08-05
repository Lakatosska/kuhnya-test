import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './LifehackCard.module.css';

type CustomImage = StaticImageData | string;

export interface ILifehackProps {
  id?: number,
  image: CustomImage;
  title: string;
  rating?: number;
}

export const LifehackCard: FC<ILifehackProps> = ({ image, title }) => {
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