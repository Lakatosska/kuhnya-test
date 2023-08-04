import { FC } from 'react';
import Link from 'next/link';
import styles from './SliderTitle.module.css';

interface ISliderTitleProps {
  title: string;
  link: string;
}

export const SliderTitle: FC<ISliderTitleProps> = ({ title, link }) => {

  return (
    <div className={styles.titleBlock}>
      <h2 className={styles.title}>{title}</h2>

      <Link href={link}>
        <span className={styles.link}>Смотреть все</span>
      </Link>

    </div>
  )
};