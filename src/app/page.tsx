import Image from 'next/image'
import styles from './page.module.css'
import { MySwiper, MySwiper2 } from '@/components/Swiper/Swiper'
import { RecipeWidget } from '@/components/RecipeWidget/RecipeWidget'

export default function Home() {
  return (
    <main className={styles.main}>
      <RecipeWidget />
      <h2>Мои рецепты</h2>
      <MySwiper />
      <h2>Мои лайфхаки</h2>
      <MySwiper2 />
    </main>
  )
}
