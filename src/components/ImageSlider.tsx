"use client";
import { useEffect, useState, useCallback } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit, page }: { url: string; limit: number; page: number }) => {
    const [images, setImages] = useState<{ url: string; download_url: string; id: number }[]>([]);
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchImages = useCallback(async (url: string | URL | Request) => {
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            setImages(data.slice(0, limit));
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
            setErrorMsg('Error fetching images');
        }
    }, [limit]);

    useEffect(() => {
        if (url) {
            fetchImages(url);
        }
    }, [fetchImages, url]);

    if (loading) return <div>Loading...</div>;
    if (errorMsg !== null) return <div>{errorMsg}</div>;

    const handlePrevClick = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    const handleNextClick = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <div className="relative flex justify-center items-center w-full h-450px">
            <BsArrowLeftCircleFill
                onClick={handlePrevClick}
                size={40}
                className="cursor-pointer text-gray-700 hover:text-gray-900 absolute left-0 z-20"
            />
            <div className="flex overflow-hidden mx-2">
                {images.length > 0 && 
                    images.map((image, index) => (
                        <img
                            key={image.id}
                            src={image.download_url}
                            alt={image.download_url}
                            className={`rounded shadow-md transition-transform duration-300 ${
                                index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{
                                transform: `translateX(-${currentSlide * 100}%)`,
                                width: '600px',
                                height: '450px',
                            }}
                        />
                    ))
                }
            </div>
            <BsArrowRightCircleFill
                onClick={handleNextClick}
                size={40}
                className="cursor-pointer text-gray-700 hover:text-gray-900 absolute right-0"
            />
            <div className="absolute bottom-4 flex justify-center w-full">
                {images.length > 0 && 
                    images.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 w-2 m-2 rounded-full ${
                                index === currentSlide ? 'bg-gray-900' : 'bg-gray-300'
                            }`}
                            onClick={() => setCurrentSlide(index)}
                        ></button>
                    ))
                }
            </div>
        </div>
    );
};

export default ImageSlider;
