"use client"
import React, { useState, useEffect } from 'react';

const Activities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const images = [
    { id: 1, src: '/assets/activities1.png' },
    { id: 2, src: '/assets/activities2.png' },
    { id: 3, src: '/assets/activities1.png' },
    { id: 4, src: '/assets/activities2.png' },
    { id: 5, src: '/assets/activities1.png' },
    { id: 6, src: '/assets/activities2.png' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(timer);
  }, [isPaused]);

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
    <div className="w-full lg:p-16 flex flex-col overflow-hidden items-center justify-center">
      <div className="flex flex-col w-full md:flex-row items-center lg:max-w-screen-2xl mx-auto gap-8">
        {/* Text Content */}
        <div className="flex flex-col items-start p-8 md:text-left md:w-1/2">
          <h1 className="text-[2.5rem] leading-[1.1] lg:text-5xl font-semibold lg:w-[15ch] lg:leading-[1.15] mb-8 lg:p-0">
            Some Activities from our Developer Community &gt;&gt;
          </h1>
          <a
            href=""
            className="text-primary hover:text-blue-700 border-primary border-2 py-[12px] px-[21px] rounded-full"
          >
            Learn more
          </a>
        </div>

        {/* Image Carousel Section */}
        <div 
          className="min-h-[60vh] w-full md:w-1/2 relative flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <img 
            src="/assets/leftarrow.png" 
            className='absolute w-14 left-2 md:-left-8 top-1/2 -translate-y-1/2 z-20 cursor-pointer hover:scale-110 transition-transform'
            onClick={prevSlide}
            alt="Previous" 
          />
          
          <div className="relative w-full h-96 flex items-center justify-center">
            {images.map((image, index) => {
              const isActive = index === currentIndex;
              const isPrevious = index === (currentIndex === 0 ? images.length - 1 : currentIndex - 1);
              const currentPairIndex = Math.floor(currentIndex/2) * 2;
              const isFirstOfPair = index === currentPairIndex;
              const isSecondOfPair = index === currentPairIndex + 1;
              
              return (
                <>
                  {isFirstOfPair && (
                    <div
                      key={`left-${image.id}`}
                      className={`absolute left-[2%] transform rotate-[-12deg] w-96 h-96 transition-all duration-500 ease-in-out ${
                        isActive || isSecondOfPair
                          ? 'opacity-100 translate-x-0 z-10' 
                          : isPrevious
                            ? 'opacity-0 translate-x-full z-0'
                            : 'opacity-0 -translate-x-full z-0'
                      }`}
                    >
                      <img
                        src={images[currentPairIndex].src}
                        className="w-full h-full lg:scale-125 object-contain"
                        alt={`Activities ${currentPairIndex + 1}`}
                      />
                    </div>
                  )}
                  {isFirstOfPair && (
                    <div
                      key={`right-${image.id}`}
                      className={`absolute right-[9%] transform rotate-[12deg] w-96 h-96 transition-all duration-500 ease-in-out ${
                        isActive || isSecondOfPair
                          ? 'opacity-100 translate-x-0 z-10' 
                          : isPrevious
                            ? 'opacity-0 translate-x-full z-0'
                            : 'opacity-0 -translate-x-full z-0'
                      }`}
                    >
                      <img
                        src={images[currentPairIndex + 1].src}
                        className="w-full h-full lg:scale-125 object-contain"
                        alt={`Activities ${currentPairIndex + 2}`}
                      />
                    </div>
                  )}
                </>
              );
            })}
          </div>

          <img 
            src="/assets/rightarrow.png" 
            className='absolute w-14 right-2 top-1/2 -translate-y-1/2 z-20 cursor-pointer hover:scale-110 transition-transform'
            onClick={nextSlide}
            alt="Next" 
          />
        </div>
      </div>
    </div>
  );
};

export default Activities;
