'use client';

import { useContext, useState } from 'react';
import { RecipeWidget } from '@/components/RecipeWidget/RecipeWidget';
import { totalRecipesData, myRecipesData } from '@/utils/data/recipes-data';
import { totalLifehacksData, myLifehacksData } from '@/utils/data/lifehacks-data';
import { RecipeSlider } from '@/components/Sliders/RecipeSlider/RecipeSlider';
import { LifehackSlider } from '@/components/Sliders/LifehackSlider/LifehackSlider';
import { AuthContext } from '@/utils/AuthContext';

export default function Home() {

  const { authorized } = useContext(AuthContext); 
  const [isRecipeWidgetOpen, setRecipeWidgetOpen] = useState(true);

  const recipesData = authorized ? myRecipesData : totalRecipesData;
  const recipeTitle = authorized ? "Мои рецепты" : "Лучшие рецепты";
  const recipeLink = authorized ? "/my-recipes" : "/recipes";
  const lifehacksData = authorized ? myLifehacksData : totalLifehacksData;
  const lifehackTitle = authorized ? "Мои лайфхаки" : "Лучшие лайфхаки";
  const lifehackLink = authorized ? "/my-lifehacks" : "/lifehacks";

  return (
    <>
      {isRecipeWidgetOpen && <RecipeWidget close={() => setRecipeWidgetOpen(false)} />}
      <RecipeSlider data={recipesData} title={recipeTitle} link={recipeLink} />
      <LifehackSlider data={lifehacksData} title={lifehackTitle} link={lifehackLink} />
    </>
  )
}
