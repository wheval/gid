"use client"
import Image from 'next/image'

const Newsletter = () => {
return (
    <div className='bg-gradient-to-b py-12 lg:py-20 from-[#FAF9F6] to-[#F77878]  flex flex-col items-center justify-center'>
            <div className='max-w-screen-2xl mx-auto px-4 lg:p-10 flex flex-col items-center justify-center'> 
                    <div className='text-center flex flex-col items-center text-primary justify-center'>
                            <Image src="/assets/icons/newsletter-icon.svg" alt="" width={150} height={150} />
                            <p className='font-semibold text-[2.5rem] leading-tight lg:leading-normal lg:text-[3.125rem]'>Subscribe to our Newsletter</p>
                            <p className='font-lato text-[1.25rem] md:text-[1.5rem] tracking-tight font-medium'>Stay charged and up to date on the latest trends and news in tech and blockchain. <br/> No spammy messages, Only top notch contents.</p>
                    </div>
                    <form action="" className='bg-[#410606] font-lato rounded-[70px] flex items-center justify-between p-2 mt-10 lg:w-[600px]'>
                            <input className='py-3 px-6 bg-transparent text-white rounded-full w-full border-none outline-none' type="email" placeholder="your@gmail.com"/>
                            <button className='bg-white hover:bg-gray-100 rounded-[100px] h-full py-3 px-6 transition-colors' type='submit' onClick={(e) => {e.preventDefault()}}>Subscribe</button>
                    </form>
            </div>
    </div>
)
} 

export default Newsletter