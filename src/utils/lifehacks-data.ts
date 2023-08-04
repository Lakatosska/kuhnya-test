import image4 from '@/assets/images/baking.jpg';
import image5 from '@/assets/images/burger.jpg';
import image6 from '@/assets/images/pancakes.jpg';

interface ILifehack {
  image: any;
  title: string;
  category?: string;
  rating?: number;
}

export const lifehacksData: ILifehack[] = [
  {
    image: image4,
    title: 'Лук без\u00A0слез 5\u00A0лайфхаков',
  },
  {
    image: image5,
    title: 'Пассировка и обжарка помидор',
  },
  {
    image: image6,
    title: 'Выбираем рыбу к\u00A0ужину',
  },
  {
    image: image6,
    title: 'Выбираем рыбу к\u00A0ужину',
  },
  {
    image: image6,
    title: 'Выбираем рыбу к\u00A0ужину',
  },
];