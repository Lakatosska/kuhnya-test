import { MyRecipesPage } from '@/components/MyRecipesPage/MyRecipesPage';
import { myRecipesData } from '@/utils/data/recipes-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Мои рецепты',
};

const MyRecipes = () => {
  return (
    <MyRecipesPage data={myRecipesData}/>
  )
};

export default MyRecipes;