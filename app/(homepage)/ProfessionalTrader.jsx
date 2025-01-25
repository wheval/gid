import Image from 'next/image'
import React from 'react'

const ProfessionalTrader = () => {
  const testimonies = [
    { src: "/assets/traders/02.png", top: "0px" },
    { src: "/assets/traders/01.jpg", top: "-40px" },
    { src: "/assets/traders/04.png", top: "30px" },
    { src: "/assets/traders/03.png", top: "-30px" },
    { src: "/assets/traders/05.png", top: "40px" },
  ];

  return (
    <>
      <div className='text-center px-4 py-8 lg:h-full flex gap-6 flex-col items-center justify-center pt-16 bg-[#FEF8F3]'>
        <h1 className='text-[2rem] tracking-tight leading-[1.1] lg:tracking-normal lg:leading-none lg:text-4xl font-semibold'>We Train You to Become a Professional Trader 💹</h1>
        <p className='text-base font-lato lg:text-xl'>See some snippets of win & happenings in the Masters of Trading League  below</p>
      </div>
      
      <div className='relative w-full overflow-hidden bg-[#FEF8F3] py-12 lg:py-24'>
        <div className='flex gap-8 mb-4 lg:mb-0 animate-scroll-testimonies hover:animate-pause whitespace-nowrap'>
          <div className='flex gap-4 lg:gap-10 shrink-0'>
            {testimonies.map((item, index) => (
              <Image 
                key={`img1-${index}`}
                src={item.src}
                className='relative w-[300px] lg:w-[400px]'
                style={{ top: item.top }}
                alt='Our student traders testimonies'
                width={400}
                height={700}
              />
            ))}
          </div>
          <div className='flex gap-4 lg:gap-10 shrink-0'>
            {testimonies.map((item, index) => (
              <Image 
                key={`img2-${index}`}
                src={item.src}
                className='relative w-[300px] lg:w-[400px]'
                style={{ top: item.top }}
                alt='Our student traders testimonies'
                width={400}
                height={700}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfessionalTrader
