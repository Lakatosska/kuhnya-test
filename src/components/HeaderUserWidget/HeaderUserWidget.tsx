'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from "react";

import CloseIcon from '@/assets/icons/close.svg';
import ProfileIcon from '@/assets/icons/ball.png';
import { User } from '@/utils/user-data';
import { BonusDisplay } from '../BonusDisplay/BonusDisplay';

import styles from '@/components/HeaderUserWidget/HeaderUserWidget.module.css';

interface RecipeWidgetProps {
  close: ()=> void;
}


export const HeaderUserWidget: FC<RecipeWidgetProps> = ( { close }) => {

  return (
    <article className={styles.article}>
      <div className={styles.overlay}>
      
        <div className={styles.upperHeader}>
            <h1 className={styles.title}>Моя КУХНЯ</h1>
            <button type="button" onClick={()=> close()} className={styles.button}>
              <Image src={CloseIcon} alt="close button" />
            </button> 
        </div>

        <div className={styles.userWidgets}>
          <div className={styles.userBonus}>
            <BonusDisplay bonus={User.bonus}/>
          </div>

          <Link href="/profile" className={styles.userProfile}>
            <Image src={ProfileIcon} alt="иконка профиля" />
            <p className={styles.titleProfile}>Профиль</p>
          </Link>

        </div>
      </div>
    </article>
  )
}