import Image from 'next/image';
import { Metadata } from "next";
import fon from '../assets/bg-img.png'; 
import RegisterForm from '../components/Register/RegisterForm';
import ButtonGoogle from '../UI/Buttons/ButtonGoogle';
export const metadata: Metadata = {
  title: "Реєстрація",
  description: "Сторінка реєстрації",
};

export default function Register() {
    return (
        <div className="w-full bg-gray-5 pt-[125px] ">
      <div className='w-[1249px] ml-auto mr-auto container pb-7'>
                
                <div className='w-[501px] bg-white shadow-base px-6 py-10 rounded-[24px]'>
                    <p className='text-center text-3xl text-black font-medium mb-6'>Вхід
                        <span className='font-bold text-4xl ml-6'>Реєстрація</span></p>
                    <ButtonGoogle/>
                    <RegisterForm/> 
                </div> 

               
            </div>
            <div className='absolute right-0 top-0'>
                 <Image
                src={fon} 
                alt="fon" 
                width={609}                 
                height={679} 
                quality={100}
                priority      
                    /> 
           </div>
        </div>
    )
}