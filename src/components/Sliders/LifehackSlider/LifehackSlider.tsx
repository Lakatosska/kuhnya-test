"use client"

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { SliderTitle } from '@/components/SliderTitle/SliderTitle';
import { LifehackCard } from '@/components/LifehackCard/LifehackCard';
import { ILifehackProps } from '@/utils/data/lifehacks-data';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import styles from './LifehackSlider.module.css';

interface LifehackSliderProps {
  data: ILifehackProps[];
  title: string;
  link: string;
}

export const LifehackSlider: FC<LifehackSliderProps> = ({ data, title, link }) => {
  return (
    <section>
      <SliderTitle title={title} link={link}/>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={8}
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
    </section>
  );
}