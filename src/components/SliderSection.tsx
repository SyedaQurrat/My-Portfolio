'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';


interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images = [
  '/images/Salon-Website.jpg',
  '/images/Governor-Sindh-Website.jpg',
  '/images/Resume.jpg',
  '/images/To-Do-App.jpg',
  '/images/Assignment-45.jpg',
  '/images/SQl.jpg',
  '/images/foody.jpg',
  '/images/result-Checker app.jpg',
  '/images/Node-Projects.jpg',
  '/images/Expense-Tracker-App.jpg',
  '/images/word-Counter.jpg',
] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide + 1 >= images.length ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[550px] overflow-hidden mx-auto mt-10 mb-10 xl:w-[1300px] lg:w-[90%] w-[95%]">
      <h1 className=" bg-[#f1c886] text-center text-4xl text-[#072638] p-5 font-extrabold mb-8"> Projects Highlight </h1>
      <div 
        className="flex transition-transform duration-500 gap-2" 
        style={{ transform: `translateX(-${currentSlide * 50}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-1/2 flex-shrink-0 p-1"
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] object-cover rounded-md"
              width={800} 
              height={400} 
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center p-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
