"use client"
import React, { useState, useEffect } from 'react';

const Activities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  
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
    }, 3000); 

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 2;
      return nextIndex >= images.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 2;
      return nextIndex < 0 ? images.length - 2 : nextIndex;
    });
  };

  // Ensure we always have a valid pair of images
  const currentImageIndex = currentIndex;
  const nextImageIndex = (currentIndex + 1) % images.length;

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
            className='absolute w-14 left-2 md:-left-8 top-1/2 -translate-y-1/2 z-30 cursor-pointer hover:scale-110 transition-transform'
            onClick={prevSlide}
            alt="Previous" 
          />
          
          <div className="relative w-full h-96 flex items-center justify-center">
            <div
              className={`absolute left-[2%] transform rotate-[-10deg] w-96 h-96 transition-all duration-700 ease-out`}
              onMouseEnter={() => setHoveredImage('left')}
              onMouseLeave={() => setHoveredImage(null)}
              style={{
                zIndex: hoveredImage === 'left' ? 20 : 10,
                opacity: hoveredImage === 'right' ? 0.7 : 1,
                transform: `rotate(-10deg) scale(${hoveredImage === 'left' ? 1.05 : 1})`,
                transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-out 0.1s'
              }}
            >
              <img
                src={images[currentImageIndex].src}
                className="w-full h-full lg:scale-125 object-contain transition-opacity duration-500"
                alt={`Activities ${currentImageIndex + 1}`}
              />
            </div>
            <div
              className={`absolute right-[9%] transform rotate-[10deg] w-96 h-96 transition-all duration-700 ease-out`}
              onMouseEnter={() => setHoveredImage('right')}
              onMouseLeave={() => setHoveredImage(null)}
              style={{
                zIndex: hoveredImage === 'right' ? 20 : 10,
                opacity: hoveredImage === 'left' ? 0.7 : 1,
                transform: `rotate(10deg) scale(${hoveredImage === 'right' ? 1.05 : 1})`,
                transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-out 0.1s'
              }}
            >
              <img
                src={images[nextImageIndex].src}
                className="w-full h-full lg:scale-125 object-contain transition-opacity duration-500"
                alt={`Activities ${nextImageIndex + 1}`}
              />
            </div>
          </div>

          <img 
            src="/assets/rightarrow.png" 
            className='absolute w-14 right-2 top-1/2 -translate-y-1/2 z-30 cursor-pointer hover:scale-110 transition-transform'
            onClick={nextSlide}
            alt="Next" 
          />
        </div>
      </div>
    </div>
  );
};

export default Activities;
