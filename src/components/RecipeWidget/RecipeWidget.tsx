'use client';

import { FC } from "react";
import image1 from '@/assets/images/mussels.jpg';
import Image from 'next/image';
import CloseIcon from '@/assets/icons/close.svg';
import ClockIcon from '@/assets/icons/clock.png';
import styles from './RecipeWidget.module.css';

interface RecipeWidgetProps {
  close: ()=> void
}

export const RecipeWidget: FC<RecipeWidgetProps> = ({ close }) => {

  return (
    <section className={styles.widget}>
      <Image 
        src={image1} 
        alt="mussels" 
        className={styles.image}
      />
      <div className={styles.info}>
        <div className={styles.clock}>
          <Image src={ClockIcon} alt="clock icon" />
          <span className={styles.time}>01 : 29</span>
        </div>
        <p className={styles.recipeTitle}>Венские вафли с малиной и кленовым сиропом</p>
      </div>

      <button type="button" onClick={()=> close()} className={styles.button}>
        <Image src={CloseIcon} alt="close button" />
      </button>
    </section>
  )
}