"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { SliderTitle } from '@/components/SliderTitle/SliderTitle';
import { LifehackCard } from '@/components/LifehackCard/LifehackCard';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import styles from './LifehackSlider.module.css';

export function LifehackSlider ({ data, title, link }) {
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
            <LifehackCard title={item.title} image={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}