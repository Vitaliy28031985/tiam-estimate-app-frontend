'use client';

import { FC } from "react";

interface AddReviewModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddReviewModal: FC<AddReviewModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg w-96 shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Залишити відгук</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                            Имя
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="comment">
                            Комментарий
                        </label>
                        <textarea
                            id="comment"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                    >
                        Отправить
                    </button>
                </form>
                <button
                    className="absolute top-2 right-2 text-black hover:text-blue-500"
                    onClick={onClose}
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default AddReviewModal;
