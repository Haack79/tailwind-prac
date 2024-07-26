'use client';

import { useState } from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = () => {
    const [rating, setRating] = useState<number>(0);
    const [hover, setHover] = useState<number>(0);
    const isLessThanHalf = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
        const { target } = event;
        const boundingClientRect = (target as HTMLElement).getBoundingClientRect();
        let mouseAt = event.clientX - boundingClientRect.left;
        mouseAt = Math.round(Math.abs(mouseAt));
        return mouseAt < boundingClientRect.width / 2;
    };
    const handleClick = (event: React.MouseEvent<SVGElement, MouseEvent>, index: number) => {
        const newRating = isLessThanHalf(event) ? index + 0.5 : index + 1;
        setRating(newRating);
    };
    const handleHover = (event: React.MouseEvent<SVGElement, MouseEvent>, index: number) => {
        const newRating = isLessThanHalf(event) ? index + 0.5 : index + 1;
        setHover(newRating);
    };

    const handleMouseLeave = () => {
        setHover(0);
    };

    return (
        <div className="flex-col items-center justify-normal">
            {[...Array(5)].map((star, i) => {
                const ratingValue = hover || rating;
                return (
                    <label key={i} className="my-3 p-3">
                        {ratingValue >= i + 1 ? (
                            // Full star
                            <FaStar
                                className="text-yellow-500 p-1 cursor-pointer"
                                onClick={(e) => handleClick(e, i)}
                                onMouseEnter={(e) => handleHover(e, i)}
                                onMouseLeave={handleMouseLeave}
                                size={40}
                            />
                        ) : ratingValue >= i + 0.5 ? (
                            // Half star
                            <FaStarHalfAlt
                                className="text-yellow-500 p-1 cursor-pointer"
                                onClick={(e) => handleClick(e, i)}
                                onMouseEnter={(e) => handleHover(e, i)}
                                onMouseLeave={handleMouseLeave}
                                size={40}
                            />
                        ) : (
                            // Empty star
                            <FaStar
                                className="text-gray-300 p-1 cursor-pointer"
                                onClick={(e) => handleClick(e, i)}
                                onMouseEnter={(e) => handleHover(e, i)}
                                onMouseLeave={handleMouseLeave}
                                size={40}
                            />
                        )}
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;
