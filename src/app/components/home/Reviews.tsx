'use client';

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../../styles/Review.css";
import RatingStars from "@/app/UI/RatingStars/RaitingStars";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import formatDate from '../../utils/formatDate';
import AddReviewModal from "../Modal/AddReviewModal";



interface Reviews {
    _id: number;
    name: string;
    comment: string;
    rating: number;
    createdAt: string;
    avatar: string;
}

export default function Reviews() {
    const [reviews, setReviews] = useState<Reviews[]>([]);
    const [slidesPerView, setSlidesPerView] = useState<number>(3);
    const [isOpenAddReviewModal, setIsOpenAddReviewModal] = useState(false);

    const handleOpenAddReviewModal = () => {
        setIsOpenAddReviewModal(true);
    };

    const handleCloseAddReviewModal = () => {
        setIsOpenAddReviewModal(false);
    };

    const updateSlidesPerView = () => {
        const width = window.innerWidth;
        if (width < 768) setSlidesPerView(1);
        else if (width < 1024) setSlidesPerView(2);
        else setSlidesPerView(3);
    };

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch("https://new-team-estimate-app-backend.onrender.com/api/reviews");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: Reviews[] = await response.json();
                setReviews(data);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };

        fetchReviews();
        updateSlidesPerView();
        window.addEventListener('resize', updateSlidesPerView);
        return () => window.removeEventListener('resize', updateSlidesPerView);
    }, []);

    return (
        <section>
            <h2 className="text-5xl font-alternates font-bold text-black mb-[60px] w-[427px]">
                Що говорять про нас люди
            </h2>

            <div className="relative">
                <Swiper
                    spaceBetween={24}
                    slidesPerView={slidesPerView}
                    navigation={{ nextEl: '.button-next', prevEl: '.button-prev' }}
                    pagination={{
                        el: '.pagination',
                        type: 'custom',
                        renderCustom: (swiper, current, total) => {
                            let paginationNumbers = "";
                            for (let i = 1; i <= total; i++) {
                                paginationNumbers += `
                                <button class="${i === current ? 'active' : ''}" style="display: flex; justify-content: center;align-items: center; margin: 0px; font-size: 14px; width: 32px; height: 32px; font-weight:700; color: ${i === current ? '#0C4A6E' : '#A3A3A3'};">
                                    ${i}
                                </button>
                            `;
                            }
                            return paginationNumbers;
                        },
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review._id} className="swiper-slide  rounded-3xl">
                            <div className="flex flex-col">
                                <div className="flex justify-between mb-1">
                                    <p className="text-2xl text-black font-semibold">{review.name}</p>
                                    <RatingStars rating={review.rating} />
                                </div>
                                <p className="text-xs text-gray-600 mb-3">
                                    {formatDate(review.createdAt)}
                                </p>
                                <p className="review-comment text-xl text-black">{review.comment}</p>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="relative flex justify-center items-center mt-5 gap-0">
                    <button className="button-prev w-8 h-8 flex items-center justify-center">
                        <FaChevronLeft />
                    </button>
                    <div className="pagination"></div>
                    <button className="button-next w-8 h-8 flex items-center justify-center">
                        <FaChevronRight />
                    </button>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <button
                    className="px-[148px] py-4 border border-[#0C4A6E] rounded-3xl text-[#0C4A6E] text-xl font-semibold"
                    onClick={handleOpenAddReviewModal}
                >
                    Залишити відгук
                </button>
            </div>
            <AddReviewModal
                isOpen={isOpenAddReviewModal}
                onClose={handleCloseAddReviewModal}
            />
        </section>
    );
}
