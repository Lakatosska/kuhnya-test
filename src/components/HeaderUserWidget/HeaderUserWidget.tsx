'use client';

import image1 from '@/assets/images/mussels.jpg';
import Image from 'next/image';

import { FC } from "react";

import CloseIcon from '@/assets/icons/close-icon.svg';
import BonusCrown from '@/assets/icons/bonus-crown.png';

import styles from '@/components/HeaderUserWidget/HeaderUserWidget.module.css';
import Link from 'next/link';

interface RecipeWidgetProps {
  close: ()=> void
}

export const HeaderUserWidget: FC<RecipeWidgetProps> = ({ close }) => {

  return (
    <article className={styles.article}>
      
      <div className={styles.upperHeader}>
        
        <h1 className={styles.title}>Моя КУХНЯ</h1>
        
        <button type="button" onClick={()=> close()} className={styles.button}>
          <Image src={CloseIcon} alt="close button" />
        </button> 
      
      </div>

      <div className={styles.userWidgets}>

        <div className={styles.userBonus}>

          <p className={styles.titleBonus}>Ваши баллы</p>

          <div className={styles.infoBonus}>
            <Image src={BonusCrown} alt="иконка бонуса" />

            <span className={styles.digits}>897</span>

          </div>

        </div>

        <Link href="/profile">

          <div className={styles.userProfile}>
            <p>Профиль</p>

          </div>

        </Link>

      </div>


    </article>
  )
}