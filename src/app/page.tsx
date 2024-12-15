import MainSection from './components/home/MainSection';
import OrderAs from './components/home/OrderAs';
import Features from './components/home/Features';
import ButtonDelete from './UI/Buttons/ButtonDelete';
import ButtonPrint from './UI/Buttons/ButtonPrint';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home",
  description: "Інструмент для створення кошторисів",
};

export default function Home() {

  return (
    <div className="bg-gray-5">
      <div className='w-[1249px] ml-auto mr-auto container'>
        <MainSection />
        <OrderAs />
        <Features/>

      <ButtonDelete />
    <ButtonPrint />   
     </div>
    
     
    </div>
  );
}
