"use client"

import { useRef, useEffect } from 'react';
//import { register } from 'swiper/element/bundle';
//import { Navigation, Pagination } from 'swiper/modules';
//register();

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';

import image1 from '@/assets/images/mussels.jpg';
import image2 from '@/assets/images/drink.jpg';
import image3 from '@/assets/images/spices.jpg';

import image4 from '@/assets/images/baking.jpg';
import image5 from '@/assets/images/burger.jpg';
import image6 from '@/assets/images/pancakes.jpg';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import styles from './Swiper.module.css';


// export const Swiper = () => {

//   return (
//     <header>Swiper</header>
//   )
// }

// export const MyComponent = () => {
//   const swiperElRef = useRef(null);

//   useEffect(() => {
//     // listen for Swiper events using addEventListener
//     swiperElRef.current.addEventListener('progress', (e) => {
//       const [swiper, progress] = e.detail;
//       console.log(progress);
//     });

//     swiperElRef.current.addEventListener('slidechange', (e) => {
//       console.log('slide changed');
//     });
//   }, []);

//   return (
//     <swiper-container
//       ref={swiperElRef}
//       slides-per-view="3"
//       navigation="true"
//       pagination="true"
//     >
//       <swiper-slide>Slide 1</swiper-slide>
//       <swiper-slide>Slide 2</swiper-slide>
//       <swiper-slide>Slide 3</swiper-slide>
//       ...
//     </swiper-container>
//   );
// };

export function MySwiper() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={24}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperSlide}> 
          <Image
            src={image1}
            alt="Project"
            className={styles.slideImage}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}> 
          <Image
            src={image2}
            alt="Project"
            className={styles.slideImage}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}> 
          <Image
            src={image3}
            alt="Project"
            className={styles.slideImage}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}> 
          <Image
            src={image3}
            alt="Project"
            className={styles.slideImage}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}> 
          <Image
            src={image3}
            alt="Project"
            className={styles.slideImage}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}> 
          <Image
            src={image3}
            alt="Project"
            className={styles.slideImage}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export function MySwiper2() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={24}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperSlide2}> 
          <Image
            src={image4}
            alt="Project"
            className={styles.slideImage2}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide2}> 
          <Image
            src={image5}
            alt="Project"
            className={styles.slideImage2}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide2}> 
          <Image
            src={image6}
            alt="Project"
            className={styles.slideImage2}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide2}> 
          <Image
            src={image6}
            alt="Project"
            className={styles.slideImage2}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide2}> 
          <Image
            src={image6}
            alt="Project"
            className={styles.slideImage2}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide2}> 
          <Image
            src={image6}
            alt="Project"
            className={styles.slideImage2}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}