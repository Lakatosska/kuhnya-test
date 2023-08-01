'use client';

import image1 from '@/assets/images/mussels.jpg';
import Image from 'next/image';

import { FC } from "react";

import CloseIcon from '@/assets/icons/close-icon.svg';

import styles from './RecipeWidget.module.css';

interface RecipeWidgetProps {
  close: ()=> void
}

export const RecipeWidget: FC<RecipeWidgetProps> = ({ close }) => {

  return (
    <section>
      <article className={styles.article}>
        <Image 
          src={image1} 
          alt="mussels" 
          className={styles.image}
        />
        <div className={styles.info}>
          <div className={styles.clock}></div>
          <p className={styles.recipeTitle}>Венские вафли с малиной и кленовым сиропом</p>
        </div>

        <button type="button" onClick={()=> close()} className={styles.button}>
          <Image src={CloseIcon} alt="close button" />
        </button>

      </article>
    </section>
  )
}