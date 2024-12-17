import MainSection from './components/home/MainSection';
import OrderAs from './components/home/OrderAs';
import Features from './components/home/Features';
import ButtonDelete from './UI/Buttons/ButtonDelete';
import ButtonPrint from './UI/Buttons/ButtonPrint';
import { Metadata } from 'next';
import Reviews from './components/home/Reviews';


export const metadata: Metadata = {
  title: "Home",
  description: "Інструмент для створення кошторисів",
};

export default function Home() {

  return (
    <div className="bg-gray-0">
      <div className='w-[1249px] ml-auto mr-auto container'>
        <MainSection />
        <OrderAs />
        <Features />
        <Reviews />
        <ButtonDelete />
        <ButtonPrint />
      </div>


    </div>
  );
}
