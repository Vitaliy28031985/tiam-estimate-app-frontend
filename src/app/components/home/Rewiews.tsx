'use client'
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Virtual, Keyboard, Mousewheel } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../../styles/Review.css";

interface Rewiews {
    id: number;
    name?: string;
    text?: string;
    rating?: number;
}

const rewiews: Rewiews[] = [
    {
        id: 1,
        name: 'Іван Іванов',
        rating: 4,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptate.'
    },
    {
        id: 2,
        name: 'Іван Іванов',
        rating: 3,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptate.'
    },
    {
        id: 3,
        name: 'Іван Іванов',
        rating: 5,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptate.'
    },
    {
        id: 4,
        name: 'Іван Іванов',
        rating: 2,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptate.'
    },
    {
        id: 5,
        name: 'Іван Іванов',
        rating: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptate.'
    },
    {
        id: 6,
        name: 'Іван Іванов',
        rating: 4,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptate.'
    },
    {
        id: 7,
        name: 'Іван Іванов',
        rating: 3,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptate.'
    },
    {
        id: 8,
        name: 'Іван Іванов',
        rating: 5,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptate.'
    },
    {
        id: 9,
        name: 'Іван Іванов',
        rating: 2,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptate.'
    },
    {
        id: 10,
        name: 'Іван Іванов',
        rating: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptate.'
    }
]
export default function Rewiews() {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [rewiewPerPage, setRewiewPerPage] = useState<number>(3);
    const totalPages = Math.ceil(rewiews.length / rewiewPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    }

    const updateRevewsPerPage = () => {
        const width = window.innerWidth;
        if (width < 768) {
            setRewiewPerPage(1);
        } else if (width < 1024) {
            setRewiewPerPage(2);
        } else {
            setRewiewPerPage(3);
        }
    }

    useEffect(() => {
        updateRevewsPerPage();
        window.addEventListener('resize', updateRevewsPerPage);
        return () => {
            window.removeEventListener('resize', updateRevewsPerPage);
        };
    }, []);

    const currentRewiews = rewiews.slice(currentPage * rewiewPerPage, (currentPage + 1) * rewiewPerPage);

    return (
        <section>
            <h2 className='text-5xl font-alternates font-bold text-black mb-[60px] w-[427px]'>Що говорять про нас люди</h2>

            <Swiper
                modules={[Pagination, A11y, Virtual, Keyboard, Mousewheel]}
                pagination={{ clickable: true }}
                allowTouchMove={true}
                loop={false}
                breakpoints={
                    {
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1440: {
                            slidesPerView: 3,
                            spaceBetween: 12
                        }

                    }}
                onSlideChange={(swiper) => handlePageChange(swiper.activeIndex)}
            >
                {currentRewiews.map((rewiew) => (
                    <SwiperSlide key={rewiew.id}>
                        <div className='bg-blue-5 rounded-3xl p-10 mb-10'>
                            <div className='flex items-center gap-4'>
                                <p className='text-2xl text-blue-20 font-semibold'>{rewiew.rating}</p>
                                <p className='text-2xl text-blue-20 font-semibold'>{rewiew.name}</p>
                            </div>
                            <p className='text-2xl text-blue-20 font-semibold'>{rewiew.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-center items-center w-full">
                <button
                    className={`flex justify-center items-center w-8 h-8 ${currentPage === 0 ? 'opacity-50' : ''}`}
                    disabled={currentPage === 0}
                    onClick={handlePrevPage}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <div className='pagination'>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            className={index === currentPage ? 'active' : ''}
                            onClick={() => handlePageChange(index)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
                <button
                    className={`flex justify-center items-center w-8 h-8 ${currentPage === totalPages - 1 ? 'opacity-50' : ''}`}
                    disabled={currentPage === totalPages - 1}
                    onClick={handleNextPage}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>




        </section>
    )
}
