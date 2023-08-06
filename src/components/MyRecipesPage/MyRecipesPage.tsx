import { FC } from "react";
import { IRecipeProps, RecipeCard } from "../RecipeCard/RecipeCard";
import styles from "./MyRecipesPage.module.css";

interface RecipeListProps {
  data: IRecipeProps[];
}

export const MyRecipesPage: FC<RecipeListProps> = ({ data }) => {
  return (
    <section className={styles.list}>
      {data.map((item) => (
        <RecipeCard key={item.id} title={item.title} image={item.image} category={item.category} />
      ))}
    </section>
    )
  }