'use client';

import { FC, useContext } from "react";
import Image from "next/image";
import { AuthContext } from '@/utils/AuthContext';
import logo from '@/assets/images/logo.png';
import profileIcon from '@/assets/icons/user.png';

import Link from "next/link";
import { BonusDisplay } from "../BonusDisplay/BonusDisplay";
import CloseIcon from '@/assets/icons/close.svg';
import ProfileIcon from '@/assets/icons/ball.png';
import myLogo from '@/assets/images/my-logo.png'
import styles from '@/components/Header/Header.module.css';


export const Header: FC = () => {

  const { authorized, setAuthorized } = useContext(AuthContext);

  const toggle = () => {
    setAuthorized(!authorized);
  };

  return (
    <header className={styles.header}>
      <div className={styles.overlay}>
        <div className={styles.upperHeader}>

          {authorized ? (
            <>
              <Image src={myLogo} alt="логотип моя кухня" className={styles.myLogo} />
              <button type="button" onClick={toggle} className={styles.button}>
                <Image src={CloseIcon} alt="иконка закрыть" className={styles.closeIcon}/>
              </button> 
            </>
            ) : (
              <>
                <Image src={logo} alt="логотип кухня" className={styles.logo}/>
                <button type="button" onClick={toggle} className={styles.button}>
                  <Image src={profileIcon} alt="иконка профиля" className={styles.authIcon}/>
                </button>
              </>
          )}
        </div>

        {authorized ? (
          <div className={styles.userWidgets}>
            <div className={styles.userBonus}>
              <BonusDisplay />
            </div>

            <Link href="/profile" className={styles.userProfile}>
              <Image src={ProfileIcon} alt="иконка профиля" className={styles.ProfileIcon}/>
              <p className={styles.titleProfile}>Профиль</p>
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>
    </header>
  )
}