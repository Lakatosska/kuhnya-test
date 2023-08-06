'use client';

import { FC } from "react";
import Image from 'next/image';
import CloseIcon from '@/assets/icons/close.svg';
import image1 from '@/assets/images/mussels.jpg';
import { Timer } from "../Timer/Timer";
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
        <Timer />
        <p className={styles.recipeTitle}>Венские вафли с малиной и кленовым сиропом</p>
      </div>

      <button type="button" onClick={()=> close()} className={styles.button}>
        <Image src={CloseIcon} alt="close button" className={styles.icon}/>
      </button>
    </section>
  )
}