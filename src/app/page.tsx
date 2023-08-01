'use client';

import { useState } from 'react';
import { MySwiper, MySwiper2 } from '@/components/Swiper/Swiper'
import { RecipeWidget } from '@/components/RecipeWidget/RecipeWidget'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {

  const [RecipeWidgetOpen, setRecipeWidgetOpen] = useState(true);

  return (
    <main className={styles.main}>
      {
        RecipeWidgetOpen && <RecipeWidget close={() => setRecipeWidgetOpen(false)}/>
      }
      <h2>Мои рецепты</h2>
      <MySwiper />
      <h2>Мои лайфхаки</h2>
      <MySwiper2 />
    </main>
  )
}
