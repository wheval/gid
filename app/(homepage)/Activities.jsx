"use client"
import React, { useState } from 'react';

const Activities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    { id: 1, src: '/assets/activities1.png' },
    { id: 2, src: '/assets/activities2.png' },
    // Add more images as needed
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full lg:p-16 flex flex-col overflow-hidden items-center justify-center min-h-screen">
      <div className="flex flex-col w-full md:flex-row items-center lg:max-w-screen-2xl mx-auto gap-8">
        {/* Text Content */}
        <div className="flex flex-col items-start p-8 md:text-left md:w-1/2">
          <h1 className="text-5xl font-semibold lg:w-[15ch] lg:leading-[1.15] mb-8 lg:p-0">
            Some Activities from our Developer Community &gt;&gt;
          </h1>
          <a
            href=""
            className="text-red-900 hover:text-blue-700 border-red-900 border-2 p-2 rounded-full"
          >
            Learn more
          </a>
        </div>

        {/* Image Carousel Section */}
        <div className="min-h-[60vh] w-full md:w-1/2 relative flex items-center justify-center">
          <img 
            src="/assets/leftarrow.png" 
            className='absolute w-14 left-2 md:-left-8 top-1/2 -translate-y-1/2 z-10 cursor-pointer hover:scale-110 transition-transform'
            onClick={prevSlide}
            alt="Previous" 
          />
          
          <div className="relative w-full h-96 flex items-center justify-center">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`absolute w-96 h-96 transition-all duration-500 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-0 translate-x-full scale-95'
                }`}
              >
                <img
                  src={image.src}
                  className="w-full h-full lg:scale-150 object-contain transform"
                  alt={`Activities ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <img 
            src="/assets/rightarrow.png" 
            className='absolute w-14 right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer hover:scale-110 transition-transform'
            onClick={nextSlide}
            alt="Next" 
          />
        </div>
      </div>
    </div>
  );
};

export default Activities;
