import Image from 'next/image'
import React from 'react'

const Hero = () => {
return (
    <div className='w-full min-h-[95vh] flex flex-col justify-center items-center text-center text-white bg-[url("/assets/homepage_hero_bg.svg")] bg-cover bg-center bg-no-repeat'>
            <div className="flex flex-col gap-y-6 max-w-[70%] items-center">
                <div className='bg-white rounded-full flex gap-2 text-black items-center p-1 pr-3'>
                        <div><Image width={100} height={50} src="/assets/profiles_hero.svg" /></div>
                        <p className='font-lato'>Over 10,000+ Trained Since 2020</p>
                </div>
                <div className='text-center flex flex-col gap-4 items-center justify-center'>
                        <h1 className='text-[3.125rem] w-[20ch] font-bold'>Spreading Adoption Through Proper <span className='bg-accent rounded-full px-4'>Education</span></h1>
                        <p className="text-[1.5rem] font-lato w-[50ch]">We've been committed to driving tech, digital literacy and Blockchain / Web3 adoption in Africa since 2020</p>
                </div>
                <div className='flex gap-4'>
                    <button className="bg-[#900A15] hover:bg-[#a20b17] text-white font-semibold px-[21px] py-[12px] rounded-full">Our Bootcamps</button>
                    <button className="bg-white hover:bg-[#ddd] text-primary font-semibold px-[21px] py-[12px] rounded-full">Our Events</button>
                </div>
            </div>
    </div>
  )
}

export default Hero