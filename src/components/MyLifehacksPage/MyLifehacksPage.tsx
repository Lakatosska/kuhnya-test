import { FC } from "react";
import { ILifehackProps } from "@/utils/data/lifehacks-data";
import { LifehackCard } from "../LifehackCard/LifehackCard";
import styles from "./MyLifehacksPage.module.css";

interface LifehackListProps {
  data: ILifehackProps[];
}

export const MyLifehacksPage: FC<LifehackListProps> = ({ data }) => {
  return (
    <section className={styles.list}>
      {data.map((item) => (
        <LifehackCard key={item.id} title={item.title} image={item.image} />
      ))}
    </section>
    )
  }