"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const newsImages = [
    "/assets/NewsImage1.png",
    "/assets/NewsImage2.png",
    "/assets/NewsImage3.png"
]

const NewsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const firstImage = newsImages[currentIndex];
    const secondImage = newsImages[(currentIndex + 1) % newsImages.length];
    const thirdImage = newsImages[(currentIndex + 2) % newsImages.length]

    // Handlers for previous and next
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : newsImages.length - 1
    );
  };

  // Handles Progress Bar 
  const progressPercentage = ((currentIndex + 1) / newsImages.length) * 100;


  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < newsImages.length ? prevIndex + 1 : 0
    );
  };


  return (
    <div className='bg-primary lg:px-4 sm:px-8 py-8 sm:py-16 relative overflow-hidden'>
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-10 sm:gap-20 items-center justify-center">
        <div className="text-center">
          <h1 className='font-semibold text-[2rem] lg:text-[3.125rem] text-white'>IN THE NEWS</h1>
          <p className='text-white font-lato text-sm sm:text-base lg:text-[1.5rem] tracking-tighter'>See some of the exploits</p>
        </div>
        
          <div className="relative max-w-6xl mx-auto w-full">
            {/* Left Arrow */}
            <img
                src="/assets/newsArrowLeft.png"
                alt=""
                className='w-12 h-12 lg:w-16 lg:h-16 absolute sm:-left-2 lg:-left-8 z-20 top-1/2 -translate-y-1/2 cursor-pointer'
                onClick={handlePrev}
            />
                    <div className='overflow-x-hidden w-full relative'>
            <div className='flex gap-5 justify-center'>
              <img
                  src={firstImage}
                  alt=""
                  className='w-60 h-60 lg:w-80 lg:h-80'
              />
              <img
                  src={secondImage}
                  alt=""
                  className='w-60 h-60 lg:w-80 lg:h-80'
              />
              <img
                  src={thirdImage}
                  alt=""
                  className='w-60 h-60 lg:w-80 lg:h-80'
              />
            </div>
            
                    </div>
            {/* Right Arrow */}
            <img
                src="/assets/newsArrowRight.png"
                alt=""
                className='w-12 h-12 lg:w-16 lg:h-16 absolute right-1 sm:-right-2 lg:-right-8 top-1/2 -translate-y-1/2 cursor-pointer'
                onClick={handleNext}
            />
        {/* Progress bar container */}
        <div className="rounded-lg px-8 sm:px-0 flex mt-12 flex-col w-full">
          <div className="h-[1px] left-0 bg-gray-300 rounded-lg w-full"></div>
          <div
            className="border-white h-[5px] mt-[-3px] bg-white transition-all duration-300 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
          </div>

      </div>
      <Image src="/assets/circle_news_section.svg" className='absolute top-[-50%] left-0' width={200} height={200} alt='' />
    </div>
  )
}

export default NewsSection
