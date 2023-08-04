'use client';

import { useState } from 'react';
import { useStopwatch } from 'react-timer-hook';
import Image from 'next/image';
import ClockIcon from '@/assets/icons/clock.png';
import PauseIcon from '@/assets/icons/pause.png';

import styles from './Timer.module.css'

export function Timer() {
  const {
    seconds,
    minutes,
    hours,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  const [ started, setStarted ] = useState(false);

  const handlePlay = () => {
    if (!started) {
      start();
    } else {
      pause();
    }
    setStarted(prevState => !prevState);
  }

  return (
    <div className={styles.timer}>
     
      <button onClick={handlePlay} className={styles.button}>
        {started ? (
          <Image
          src={PauseIcon}
          alt="pause"
          layout='fill'
          objectFit='contain'
          />) : 
          (
          <Image
          src={ClockIcon}
          alt="play"
          layout='fill'
          objectFit='contain'
          />
          )}
      </button>
      <span className={styles.timeMin}>{minutes< 10 ? `0${minutes}`: minutes} :</span><span className={styles.timeSec}>{seconds < 10 ? `0${seconds}`: seconds}</span>
    </div>
  );
}