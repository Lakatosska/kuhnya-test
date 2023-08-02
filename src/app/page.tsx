'use client';

import { useState } from 'react';
import { MySwiper, MySwiper2 } from '@/components/Swiper/Swiper'
import { RecipeWidget } from '@/components/RecipeWidget/RecipeWidget'
import Image from 'next/image'
import styles from './page.module.css'
import { HeaderUserWidget } from '@/components/HeaderUserWidget/HeaderUserWidget';
import { SectionTitle, SectionTitle2 } from '@/components/SectionTitle/SectionTitle';

export default function Home() {

  const [RecipeWidgetOpen, setRecipeWidgetOpen] = useState(true);

  return (
    <main className={styles.main}>
      {
        RecipeWidgetOpen && <RecipeWidget close={() => setRecipeWidgetOpen(false)}/>
      }
      <SectionTitle />
      <MySwiper />
      <SectionTitle2 />
      <MySwiper2 />
    </main>
  )
}
