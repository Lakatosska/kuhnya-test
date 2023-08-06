"use client"

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { RecipeCard } from '@/components/RecipeCard/RecipeCard';
import { SliderTitle } from '@/components/SliderTitle/SliderTitle';
import { IRecipeProps } from '@/components/RecipeCard/RecipeCard';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import styles from './RecipeSlider.module.css';


interface RecipeSliderProps {
  data: IRecipeProps[];
  title: string;
  link: string;
}

export const RecipeSlider: FC<RecipeSliderProps> = ({ data, title, link }) => {
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
            <RecipeCard title={item.title} image={item.image} category={item.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}