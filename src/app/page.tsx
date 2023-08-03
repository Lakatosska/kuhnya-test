'use client';

import { useState } from 'react';
import { RecipeWidget } from '@/components/RecipeWidget/RecipeWidget';
import { recipesData } from '@/utils/recipes-data';
import { lifehacksData } from '@/utils/lifehacks-data';
import { RecipeSlider } from '@/components/Sliders/RecipeSlider/RecipeSlider';
import { LifehackSlider } from '@/components/Sliders/LifehackSlider/LifehackSlider';
import styles from './page.module.css';

export default function Home() {

  const [RecipeWidgetOpen, setRecipeWidgetOpen] = useState(true);

  return (
    <main className={styles.main}>
      {
        RecipeWidgetOpen && <RecipeWidget close={() => setRecipeWidgetOpen(false)}/>
      }
      <RecipeSlider data={recipesData} title="Мои рецепты" link="/recipes" />
      <LifehackSlider data={lifehacksData} title="Мои лайфхаки" link="/lifehacks" />
    </main>
  )
}
