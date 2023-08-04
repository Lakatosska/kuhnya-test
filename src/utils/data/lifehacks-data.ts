import image4 from '@/assets/images/baking.jpg';
import image5 from '@/assets/images/burger.jpg';
import image6 from '@/assets/images/pancakes.jpg';

export interface ILifehackProps {
  id: number,
  image: any;
  title: string;
  rating?: number;
}

export const lifehacksData: ILifehackProps[] = [
  {
    id: 1,
    image: image4,
    title: 'Лук без\u00A0слез 5\u00A0лайфхаков',
  },
  {
    id: 2,
    image: image5,
    title: 'Пассировка и обжарка помидор',
  },
  { 
    id: 3,
    image: image6,
    title: 'Выбираем рыбу к\u00A0ужину',
  },
  {
    id: 4,
    image: image6,
    title: 'Выбираем рыбу к\u00A0ужину',
  },
  {
    id: 5,
    image: image6,
    title: 'Выбираем рыбу к\u00A0ужину',
  },
];