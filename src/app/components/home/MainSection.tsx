'use client';
// import Image from 'next/image'
import ButtonBlue from '../Buttons/ButtonBlue';
// import homeOne from '../../../../public/home-1.png';
// import homeTwo from '../../../../public/home-2.png';
// import homeTree from '../../../../public/home-3.png'
export default function MainSection() {
  return (
    <section className='flex gap-[107px] items-center'>
        <div className=''>
          <p className='text-2xl font-semibold text-blue-20 mb-3'>Estimate app</p>
          <h3 className='text-5xl font-alternates font-semibold text-gray-30 mb-3 '>
            Найкращий інструмент для створення кошторисів
          </h3>
          <p className='text-gray-25 font-extralight text-xl mb-10 w-4/5'>
            З нашим застосунком ви зможете швидко керувати витратами,
            налаштовувати шаблони та мати доступ до кошторисів – просто і безкоштовно!
          </p>
        <ButtonBlue title='Зареєструватися' />  
        </div>
        <div className='w-[901px] h-[509px] p-0'>
        <div className='grid grid-cols-[2fr,2fr] gap-3'>
        <div className=''>
         <img className='w-[245px] h-[282px]' src="/home-1.png" alt="one" />             
        {/* <Image
        src={homeOne} 
        alt="one" 
        width={245}                 
        height={282} 
        layout="responsive"                   
          /> */}
          </div>
        <div className=''>
        <img className='w-[245px] h-[282px]' src="/home-2.png" alt="two" /> 
        {/* <Image                 
        src={homeTwo} 
        alt="one" 
        width={245}                 
        height={282}
        layout="responsive"                
          />  */}
            </div>
            </div>
          <div className='ml-3 mt-3'>
        {/* <Image
        src={homeTree} 
        alt="one" 
        width={500}                 
        height={213}
        layout="responsive"                
      />  */}
    <img className='w-[500px] h-[213px]' src="/home-3.png" alt="two" /> 
         </div>
      
        </div>
      </section>
  );
}