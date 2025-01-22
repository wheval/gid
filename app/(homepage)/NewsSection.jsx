"use client"
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
    <div className='bg-rose-900 text-center p-10'>
        <h1 className='text-4xl text-white font-semibold mb-4'>IN THE NEWS</h1>
        <p className='text-white mb-4'>See some of the exploits</p>
      <div className='bg-rose-900 overflow-x-hidden w-2/3 m-auto flex gap-5 relative'>
        {/* Left Arrow */}
        <img 
            src="/assets/newsArrowLeft.png" 
            alt=""
            className='w-16 h-16 absolute -left-8 z-20 top-1/2'
            onClick={handlePrev} 
        />

        <img 
            src={firstImage} 
            alt=""
            className='w-80 h-80'
        />
        <img 
            src={secondImage} 
            alt=""
            className='w-80 h-80'
        />
        <img 
            src={thirdImage} 
            alt=""
            className='w-80 h-80'
        />

        {/* Left Arrow */}
        <img 
            src="/assets/newsArrowRight.png" 
            alt=""
            className='w-16 h-16 absolute -right-8 top-1/2' 
            onClick={handleNext}
        />
      </div>

      {/* Progress bar container */}
      <div className="my-5 h-[2px] bg-gray-300 rounded-lg overflow-hidden relative w-2/3 m-auto">
        <div
          className=" border-white border-2 bg-white transition-all duration-300 ease-in-ou"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  )
}

export default NewsSection
