import image4 from '@/assets/images/icecream.jpg';
import image5 from '@/assets/images/burger.jpg';
import image6 from '@/assets/images/pancakes.jpg';
import image7 from '@/assets/images/fish.jpg';
import image8 from '@/assets/images/vegetables.jpg';

export interface ILifehackProps {
  id: number,
  image: any;
  title: string;
  rating?: number;
}

export const lifehacksData: ILifehackProps[] = [
  {
    id: 1,
    image: image8,
    title: 'Лук без\u00A0слез 5\u00A0лайфхаков',
  },
  {
    id: 2,
    image: image4,
    title: 'Готовим мороженое',
  },
  {
    id: 3,
    image: image5,
    title: 'Собираем наш\u00A0бургер',
  },
  { 
    id: 4,
    image: image7,
    title: 'Выбираем рыбу к\u00A0ужину',
  },
  {
    id: 5,
    image: image8,
    title: 'Сохраняем витамины',
  },
  {
    id: 6,
    image: image6,
    title: 'Топинги для\u00A0оладий',
  },
];