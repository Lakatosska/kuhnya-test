import { FC } from "react";
import Image from "next/image";
import logo from '@/assets/images/logo.png';
import profileIcon from '@/assets/icons/user.png';
import styles from '@/components/Header/Header.module.css';

interface HeaderProps {
  close: ()=> void;
}

export const Header: FC<HeaderProps> = ({ close }) => {

  return (
    <header className={styles.header}>
        <div className={styles.upperHeader}>
          <Image src={logo} alt="логотип кухня" className={styles.logo}/>
          <button type="button" onClick={()=> close()} className={styles.button}>
            <Image src={profileIcon} alt="иконка профиля"/>
          </button> 
        </div>
     
    </header>
  )
}