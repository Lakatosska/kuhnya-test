import image1 from '@/assets/images/mussels.jpg';
import image2 from '@/assets/images/drink.jpg';
import image3 from '@/assets/images/spices.jpg';

interface IRecipe {
  image: any;
  title: string;
  category: string;
  rating?: number;
}

export const recipes: IRecipe[] = [
  {
    image: image1,
    title: 'Острая спаржа с булгуром',
    category: 'По-домашнему',
  },
  {
    image: image2,
    title: 'Летний лимонад с розмарином',
    category: 'Классика',
  },
  {
    image: image3,
    title: 'Каша по-королевски',
    category: 'По-домашнему',
  },
  {
    image: image3,
    title: 'Каша по-королевски',
    category: 'По-домашнему',
  },
  {
    image: image3,
    title: 'Каша по-королевски',
    category: 'По-домашнему',
  },
  {
    image: image3,
    title: 'Каша по-королевски',
    category: 'По-домашнему',
  },
];