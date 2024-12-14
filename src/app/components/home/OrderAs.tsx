export default function OrderAs() {
    return (
        <section className="flex gap-[39px] items-center mt-[180px] pt-4 pb-12 mb-20">
            <div className="relative">
                <img className="relative z-10" src="/worker.png" alt="" />
                <div className="absolute w-[463px] h-[280px] bg-blue-30 bottom-0 rounded-r-full"></div>
            </div>
            <div>
                <h3  className='text-5xl font-alternates font-semibold text-gray-30 mb-3'>Чому обирають нас?</h3>
                <p className='text-gray-25 font-extralight text-2xl mb-10'>Розповідаємо, чим ми відрізняємось від інших та що допомагає нам виділятися</p>

                <ul>
                    <li>
                        <p className="text-black font-semibold text-2xl mb-8">Легкість та швидкість у створенні кошторисів</p>
                    </li>
                    <li>
                        <p className="text-black font-semibold text-2xl mb-8">Гнучкість шаблонів для будь-яких проектів</p>
                    </li>
                    <li>
                        <p className="text-black font-semibold text-2xl mb-8">Можливість працювати з будь-якого пристрою</p>
                    </li>
                </ul>
            </div>  
        </section>
    )
}