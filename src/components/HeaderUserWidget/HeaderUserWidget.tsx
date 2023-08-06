import Image from 'next/image';
import Link from 'next/link';
import { FC } from "react";
import CloseIcon from '@/assets/icons/close.svg';
import ProfileIcon from '@/assets/icons/ball.png';
import { BonusDisplay } from '../BonusDisplay/BonusDisplay';
import myLogo from '@/assets/images/my-logo.png'
import styles from '@/components/HeaderUserWidget/HeaderUserWidget.module.css';

interface RecipeWidgetProps {
  close: ()=> void;
}

export const HeaderUserWidget: FC<RecipeWidgetProps> = ({ close }) => {

  return (
    <div className={styles.widget}>
      <div className={styles.overlay}>
      
        <div className={styles.upperHeader}>
            <Image src={myLogo} alt="логотип моя кухня" className={styles.logo}/>
            <button type="button" onClick={()=> close()} className={styles.button}>
              <Image src={CloseIcon} alt="иконка закрыть" className={styles.closeButton}/>
            </button> 
        </div>

        <div className={styles.userWidgets}>
          <div className={styles.userBonus}>
            <BonusDisplay />
          </div>

          <Link href="/profile" className={styles.userProfile}>
            <Image src={ProfileIcon} alt="иконка профиля" className={styles.ProfileIcon}/>
            <p className={styles.titleProfile}>Профиль</p>
          </Link>

        </div>
      </div>
    </div>
  )
}