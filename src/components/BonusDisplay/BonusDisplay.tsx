import Image from 'next/image';
import { user } from '@/utils/data/user-data';
import BonusCrown from '@/assets/icons/bonus-crown.png';
import styles from './BonusDisplay.module.css'

export const BonusDisplay = () => {
  return (
    <>
      <p className={styles.titleBonus}>Ваши баллы</p>
      <div className={styles.infoBonus}>
        <Image src={BonusCrown} alt="иконка бонуса" />
        <span className={styles.digits}>{user.bonus}</span>
      </div>
    </>
  );
};
