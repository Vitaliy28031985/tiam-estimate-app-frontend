import MainSection from './components/home/MainSection';
import OrderAs from './components/home/OrderAs';
import ButtonDelete from './components/Buttons/ButtonDelete';
import ButtonPrint from './components/Buttons/ButtonPrint';


export default function Home() {

  return (
    <div className="bg-gray-5">
      <div className='w-[1249px] ml-auto mr-auto container'>
        <MainSection />
        <OrderAs />

      <ButtonDelete />
    <ButtonPrint />   
     </div>
    
     
    </div>
  );
}
