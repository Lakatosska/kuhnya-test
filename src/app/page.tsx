'use client';

import { useState } from 'react';
import { RecipeWidget } from '@/components/RecipeWidget/RecipeWidget';
import { recipesDataAll, recipesData } from '@/utils/data/recipes-data';
import { lifehacksData } from '@/utils/data/lifehacks-data';
import { RecipeSlider } from '@/components/Sliders/RecipeSlider/RecipeSlider';
import { LifehackSlider } from '@/components/Sliders/LifehackSlider/LifehackSlider';
import styles from './page.module.css';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { HeaderUserWidget } from '@/components/HeaderUserWidget/HeaderUserWidget';

export default function Home() {

  const [authorized, setAuthorized] = useState(true);

  const [RecipeWidgetOpen, setRecipeWidgetOpen] = useState(true);

  const toggleAuth = () => {
    setAuthorized((prevAuthorized) => !prevAuthorized);
  };

  return (
    <>
      { authorized ? (
        <>
          <HeaderUserWidget close={toggleAuth}/>
          <main className={styles.main}>
            {
              RecipeWidgetOpen && <RecipeWidget close={() => setRecipeWidgetOpen(false)}/>
            }
            <RecipeSlider data={recipesData} title="Мои рецепты" link="/my-recipes" />
            <LifehackSlider data={lifehacksData} title="Мои лайфхаки" link="/my-lifehacks" />
          </main>
        </>
        ) : (
          <>
          <Header close={toggleAuth}/>
          <main className={styles.main}>
            {
              RecipeWidgetOpen && <RecipeWidget close={() => setRecipeWidgetOpen(false)}/>
            }
            <RecipeSlider data={recipesDataAll} title="Лучшие рецепты" link="/recipes" />
            <LifehackSlider data={lifehacksData} title="Лучшие лайфхаки" link="/lifehacks" />
          </main>
        </>
        )
      }
    </>
  )
}
