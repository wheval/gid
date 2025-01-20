import Image from 'next/image'
import React from 'react'

const Hero = () => {
return (
    <div className='w-full min-h-[90vh] flex flex-col justify-center items-center text-center text-white bg-[url("/assets/homepage_hero_bg.svg")] bg-cover bg-center bg-no-repeat'>
            <div>
                    <div><Image width={117} height={52} src="/assets/profiles_hero.svg" /></div>
                    <p>Over 10,000+ trained since 2020</p>
            </div>
            <div>
                    <h1>Spreading Adoption Through Proper <span>Education</span></h1>
                    <p className="text-[2.18rem] font-lato">We've been committed to driving tech, digital literacy and Blockchain / Web3 adoption in Africa since 2020</p>
            </div>
        <div className='flex gap-4'>
            <button className="bg-[#900A15] hover:bg-[#a20b17] text-white font-semibold px-4 py-2 rounded-full">Our Bootcamps</button>
            <button className="bg-white hover:bg-[#ddd] text-primary font-semibold px-4 py-2 rounded-full">Our Events</button>
        </div>
    </div>
  )
}

export default Hero