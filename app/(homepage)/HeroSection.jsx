import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
return (
    <div className='w-full min-h-[100vh] h-[100vh] flex flex-col justify-center items-center text-center text-white bg-[url("/assets/homepage_hero_bg.svg")] bg-cover bg-center bg-no-repeat'>
            <div className="flex flex-col gap-y-6 md:max-w-[70%] p-6 items-center">
                <div className='bg-white rounded-full flex gap-2 text-black items-center p-1 lg:px-2 pr-3'>
                        <div><Image width={100} height={50} className='sm:w-[100px] sm:h-[50px] w-[50px] h-[25px]' src="/assets/profiles_hero.svg" /></div>
                        <p className='font-lato text-sm sm:text-base'>Over 10,000+ Trained Since 2020</p>
                </div>
                <div className='text-center flex flex-col gap-4 items-center justify-center'>
                        <h1 className='lg:text-[3.125rem] text-[2rem] leading-tight sm:leading-normal lg:w-[20ch] font-bold'>Spreading Adoption Through Proper <span className='bg-accent rounded-full px-4'>Education</span></h1>
                        <p className="text-[1.25rem] sm:text-[1.5rem] lg:text-[1.875rem] font-lato lg:w-[50ch]">We&apos;ve been committed to driving tech, digital literacy and Blockchain / Web3 adoption in Africa since 2020</p>
                </div>
                <div className='flex gap-4'>
                    <Link href="/cairo"><button className="bg-[#900A15] hover:bg-[#a20b17] text-white font-semibold px-[21px] py-[12px] rounded-full">Our Bootcamps</button></Link> 
                    <Link href="/chainup"> <button className="bg-white hover:bg-[#ddd] text-primary font-semibold px-[21px] py-[12px] rounded-full">Our Events</button></Link>
                </div>
            </div>
    </div>
  )
}

export default HeroSection
