import Image from 'next/image';
import { User, IUser } from '@/utils/user-data';
import BonusCrown from '@/assets/icons/bonus-crown.png';
import styles from './BonusDisplay.module.css'

export const BonusDisplay = (User: IUser) => {
  return (
    <>
      <p className={styles.titleBonus}>Ваши баллы</p>
      <div className={styles.infoBonus}>
        <Image src={BonusCrown} alt="иконка бонуса" />
        <span className={styles.digits}>{User.bonus}</span>
      </div>
    </>
  );
};
