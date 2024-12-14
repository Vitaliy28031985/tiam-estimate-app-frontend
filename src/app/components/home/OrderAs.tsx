import Image from 'next/image';
import Rocket from "../../UI/Icons/Rocket";
import Gear from "../../UI/Icons/Gear";
import Laptop from "../../UI/Icons/Laptop";
import worker from '../../assets/worker.png';
export default function OrderAs() {
    return (
        <section className="flex gap-4 items-center mt-[180px] pt-4 pb-12 mb-20">
            <div className="relative">
                <div className="relative z-10">
                 <Image
                src={worker} 
                alt="worker" 
                width={709}                 
                height={572} 
                quality={100}                   
                    />
                </div>
                <div className="absolute w-[463px] h-[280px] bg-blue-30 bottom-0 rounded-r-full"></div>
            </div>
            <div>
                <h3  className='text-5xl font-alternates font-semibold text-gray-30 mb-3'>Чому обирають нас?</h3>
                <p className='text-gray-25 font-extralight text-2xl mb-10'>Розповідаємо, чим ми відрізняємось від інших та що допомагає нам виділятися</p>

                <ul className='ml-12'>
                    <li className='flex gap-3 items-center mb-8'>
                        <Rocket/>
                        <p className="text-black font-semibold text-2xl w-1/2">Легкість та швидкість у створенні кошторисів</p>
                    </li>
                    <li className='flex gap-3 items-center mb-8'>
                        <Gear />
                        <p className="text-black font-semibold text-2xl w-1/2">Гнучкість шаблонів для будь-яких проектів</p>
                    </li>
                    <li className='flex gap-3 items-center mb-8'>
                       <Laptop/>
                        <p className="text-black font-semibold text-2xl w-1/2">Можливість працювати з будь-якого пристрою</p>
                    </li>
                </ul>
            </div>  
        </section>
    )
}