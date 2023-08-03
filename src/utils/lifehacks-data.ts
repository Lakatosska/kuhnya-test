import image4 from '@/assets/images/baking.jpg';
import image5 from '@/assets/images/burger.jpg';
import image6 from '@/assets/images/pancakes.jpg';

interface ILifehack {
  image: any;
  title: string;
  category?: string;
  rating?: number;
}

export const recipes: ILifehack[] = [
  {
    image: image4,
    title: 'Лук без слез. 5 лайфхаков',
  },
  {
    image: image5,
    title: 'Пассировка и обжарка помидор',
  },
  {
    image: image6,
    title: 'Выбираем рыбу к ужину',
  },
  {
    image: image6,
    title: 'Выбираем рыбу к ужину',
  },
  {
    image: image6,
    title: 'Выбираем рыбу к ужину',
  },
  {
    image: image6,
    title: 'Выбираем рыбу к ужину',
  },
  {
    image: image6,
    title: 'Выбираем рыбу к ужину',
  },
];