import Image from "next/image"
import { useState, useEffect } from "react"

const testimonies = [
    {
        name: 'David',
        title: 'Forex Trader',
        image: '/assets/testimonies/01.png',
        description: "So, if you're curious about crypto, intrigued by blockchain, or simply tired of the status quo, take the leap. Join the GIDA community and unlock a future brimming with possibilities. Trust me, the only regret you'll have is not doing it sooner."
    },
    {
        name: 'Chidi',
        title: 'Smart Contract Developer',
        image: '/assets/testimonies/02.png',
        description: "Today, I'm no longer scrambling to understand blockchain jargon. I'm building dApps, trading like a pro, and even developing my own crypto project. The GIDA didn't just equip me with skills; it ignited a passion within me."
    },
    {
        name: 'Matthew',
        title: 'Crypto Trader',
        image: '/assets/testimonies/03.png',
        description: "They broke down complex concepts into bite-sized pieces, making even the most intricate algorithms feel surprisingly relatable. It wasn't just theory, though. We got our hands dirty, building real-world projects that pushed our limits and ignited our creativity."
    },
    {
        name: 'Matthew',
        title: 'Crypto Trader',
        image: '/assets/testimonies/03.png',
        description: "They broke down complex concepts into bite-sized pieces, making even the most intricate algorithms feel surprisingly relatable. It wasn't just theory, though. We got our hands dirty, building real-world projects that pushed our limits and ignited our creativity."
    },
]

const RealLife = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [maxIndex, setMaxIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            const isMobileView = window.innerWidth < 1024;
            setIsMobile(isMobileView)
            
            // Calculate max index based on screen size and container width
            const slideWidth = isMobileView ? window.innerWidth * 0.85 : 400
            const containerWidth = isMobileView ? window.innerWidth - 32 : 1200
            const visibleSlides = Math.floor(containerWidth / (slideWidth + 24))
            
            // For desktop, add one less to maxIndex to prevent empty space
            const adjustment = isMobileView ? 0 : 1
            setMaxIndex(Math.max(0, testimonies.length - visibleSlides - adjustment))
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleNext = () => {
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
    }

    const handlePrev = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0))
    }

    return (
        <section className="bg-primary text-white py-10 lg:px-20 lg:py-12 overflow-hidden">
            <div className="max-w-screen-2xl mx-auto">
                <div className="flex flex-col gap-y-4 lg:gap-8">
                    <div className="text-center">
                        <h3 className="font-semibold uppercase text-[2rem] lg:text-[3.125rem]">Real Life, Real Results</h3>
                        <p className="font-lato">See how our bootcamps and course have created beautiful blockchain success stories</p>
                    </div>
                    <div className="relative">
                        {currentIndex > 0 && (
                            <button 
                                onClick={handlePrev}
                                className="absolute z-10 top-[40%] left-0 lg:left-[-2%] transition-opacity"
                            >
                                <Image
                                    src="/assets/testimonies/arrow_left.svg"
                                    alt="Previous"
                                    width={50}
                                    height={50}
                                    className="transform rotate-180 -mt-2"
                                />
                            </button>
                        )}
                        
                        <div className="w-full px-4 lg:px-0 overflow-hidden">
                            <div 
                                className="flex gap-6 transition-transform duration-500 ease-in-out"
                                style={{ 
                                    transform: `translateX(-${currentIndex * (isMobile ? window.innerWidth * 0.85 + 24 : 424)}px)`
                                }}
                            >
                                {testimonies.map((testimony, index) => (
                                    <Card 
                                        key={index} 
                                        {...testimony}
                                    />
                                ))}
                            </div>
                        </div>

                        {currentIndex < maxIndex && (
                            <button 
                                onClick={handleNext}
                                className="absolute z-10 top-[40%] right-0 lg:right-[-2%] transition-opacity"
                            >
                                <Image
                                    src="/assets/testimonies/arrow_right.svg"
                                    alt="Next"
                                    width={50}
                                    height={50}
                                />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

const Card = ({name, title, image, description}) => {
    return (
        <div className="bg-white rounded-3xl w-[85vw] lg:w-[400px] shrink-0 font-lato gap-4 pt-4 px-4 pb-2 text-black flex flex-col">  
            <div className="flex items-center gap-4">
                <div className="overflow-hidden h-[40px] w-[40px] lg:h-[70px] lg:w-[70px] rounded-full">
                    <Image src={image} height={70} width={70} alt={name} className="w-full h-full object-contain" />   
                </div>
                <div className="flex flex-col justify-start">
                    <p>{name}</p>
                    <p className="capitalize">{title}</p>
                </div>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default RealLife