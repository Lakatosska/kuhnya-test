"use client"

import { FC, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { RecipeCard } from '@/components/RecipeCard/RecipeCard';
import { SliderTitle } from '@/components/SliderTitle/SliderTitle';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import styles from './RecipeSlider.module.css';

export function RecipeSlider ({ data, title, link }) {
  return (
    <>
      <SliderTitle title={title} link={link}/>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={24}
        freeMode={true}
        modules={[FreeMode]}
        className={styles.swiper}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className={styles.swiperSlide}>
            <RecipeCard title={item.title} image={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}