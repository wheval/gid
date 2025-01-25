import Image from 'next/image'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

const ProfessionalTrader = () => {
  const testimonies = [
    { src: "/assets/traders/02.png", top: "0px" },
    { src: "/assets/traders/01.jpg", top: "-40px" },
    { src: "/assets/traders/04.png", top: "30px" },
    { src: "/assets/traders/03.png", top: "-30px" },
    { src: "/assets/traders/05.png", top: "40px" },
  ];

  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: true,
      containScroll: 'trimSnaps',
      skipSnaps: true,
    }, 
    [
      AutoScroll({
        playOnInit: true,
        speed: 2, 
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        stopOnFocusIn: false,
        stopOnInteraction: false,
        startDelay: 10,
      })
    ]
  )

  return (
    <>
      <div className='text-center px-4 py-8 lg:h-full flex gap-6 flex-col items-center justify-center pt-16 bg-[#FEF8F3]'>
        <h1 className='text-[2rem] tracking-tight leading-[1.1] lg:tracking-normal lg:leading-none lg:text-4xl font-semibold'>
          We Train You to Become a Professional Trader 💹
        </h1>
        <p className='text-base font-lato lg:text-xl'>
          See some snippets of win & happenings in the Masters of Trading League below
        </p>
      </div>
      
      <div className='relative w-full overflow-hidden bg-[#FEF8F3] py-12 lg:py-24'>
        <div className="overflow-hidden relative z-10" ref={emblaRef}>
          <div className='flex gap-4 lg:gap-10 first:pl-[30px]'>
            {[...testimonies, ...testimonies, ...testimonies].map((item, index) => (
              <div className="flex-[0_0_300px] lg:flex-[0_0_400px]" key={index}>
                <Image 
                  src={item.src}
                  className='relative w-[300px] lg:w-[400px]'
                  style={{ top: item.top }}
                  alt='Our student traders testimonies'
                  width={400}
                  height={700}
                />
              </div>
            ))}
          </div>
        </div>
        <Image 
          src="/assets/traders/wigline.svg" 
          className='absolute top-[50%] lg:top-[33%] z-0 left-[-2%] right-[-2%]' 
          alt='' 
          width={1750} 
          height={279} 
        /> 
      </div>
    </>
  )
}

export default ProfessionalTrader
