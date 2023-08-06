import { MyLifehacksPage } from '@/components/MyLifehacksPage/MyLifehacksPage';
import { myLifehacksData } from '@/utils/data/lifehacks-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Мои лайфхаки',
};

const MyLifehacks = () => {
  return (
    <MyLifehacksPage data={myLifehacksData}/>
  )
};

export default MyLifehacks;