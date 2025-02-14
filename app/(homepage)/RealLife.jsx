"use client";
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { H2 } from "@/components/ui/typography";

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
        name: 'Maxwell C. Ngwu',
        title: 'Blockchain Developer',
        image: '/assets/testimonial2.jpg',
        description: "The GIDA Starknet/Cairo Bootcamp was an incredible opportunity to upskill into blockchain development. The 8-week intensive learning provided a solid foundation, with tutors offering great support."
    },  
]

const playTestimonies = [
    {
        name: 'Sharon',
        title: 'Forex Trader',
        image: '/assets/testimonies/person1.png',
    },
    {
        name: 'Paul',
        title: 'Blockchain Developer',
        image: '/assets/testimonies/person2.png',
    },
    {
        name: 'Raul',
        title: 'Web Developer',
        image: '/assets/testimonies/person3.png',
    },
]

const screenshotTestimonies = [
   "/assets/testimonies/screenshot.png",
   "/assets/testimonies/screenshot2.png",
   "/assets/testimonies/screenshot2.png",
]

const RealLife = () => {
    const autoplayOptions = {
        delay: 3000,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
    };

    // Video testimonials carousel (only for mobile)
    const [videoEmblaRef, videoEmblaApi] = useEmblaCarousel(
        {
            slidesToScroll: 1,
            align: "center",
            containScroll: "trimSnaps",
            loop: true,
        },
        [Autoplay(autoplayOptions)]
    );

    // Text testimonials carousel with autoplay
    const [textEmblaRef, textEmblaApi] = useEmblaCarousel(
        {
            slidesToScroll: 1,
            align: "start",
            containScroll: "trimSnaps",
            loop: true,
            dragFree: true,
        },
        [Autoplay({ ...autoplayOptions, delay: 2000 })]
    );

    // Screenshot carousel - without autoplay
    const [screenshotEmblaRef, screenshotEmblaApi] = useEmblaCarousel({
        slidesToScroll: 1,
        align: "start",
        containScroll: "trimSnaps",
        loop: true,
        dragFree: false
    });

    const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState(0);
    const [screenshotScrollSnaps, setScreenshotScrollSnaps] = useState([]);

    const scrollPrev = useCallback(() => {
        if (screenshotEmblaApi) screenshotEmblaApi.scrollPrev();
    }, [screenshotEmblaApi]);

    const scrollNext = useCallback(() => {
        if (screenshotEmblaApi) screenshotEmblaApi.scrollNext();
    }, [screenshotEmblaApi]);

    useEffect(() => {
        if (!screenshotEmblaApi) return;

        setScreenshotScrollSnaps(screenshotEmblaApi.scrollSnapList());
        screenshotEmblaApi.on("select", () => {
            setSelectedScreenshotIndex(screenshotEmblaApi.selectedScrollSnap());
        });
    }, [screenshotEmblaApi]);

    // progress percentage
    const progressPercentage = ((selectedScreenshotIndex + 1) / screenshotScrollSnaps.length) * 100;

    return (
        <section className="bg-primary text-white py-10 lg:px-20 lg:py-12 overflow-hidden">
            <div className="max-w-screen-2xl mx-auto">
                <div className="flex flex-col gap-y-4 lg:gap-8">
                    <div className="text-center">
                        <H2 className="mb-4">REAL LIVES, REAL RESULTS</H2>
                        <p className="font-lato mx-auto w-[40ch] lg:text-2xl">See how our bootcamps and course have created beautiful blockchain success stories</p>
                    </div>
                    
                    {/* Video Testimonials */}
                    <div className="overflow-hidden lg:overflow-visible" ref={videoEmblaRef}>
                        <div className="flex gap-4 lg:gap-8 lg:flex-wrap lg:justify-between">
                            {playTestimonies.map((testimony, index) => (
                                <div key={index} className="flex-[0_0_85%] first:ml-4 first:lg:m-0 lg:flex-[0_0_auto] lg:w-[400px]">
                                    <PlayCard {...testimony} />
                                </div>
                            ))}
                        </div>
                    </div>
                            
                    {/* Screenshot Testimonials */}
                    <div className="w-full relative">
                        <button 
                            onClick={scrollPrev}
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

                        <div className="overflow-hidden" ref={screenshotEmblaRef}>
                            <div className="flex w-full justify-between">
                                {[...screenshotTestimonies, ...screenshotTestimonies].map((screenshot, index) => (
                                    <div key={index} className="flex-[0_0_300px] mx-2">
                                        <Image 
                                            src={screenshot} 
                                            width={300} 
                                            height={600} 
                                            className="object-cover" 
                                            alt="Screenshot testimony"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button 
                            onClick={scrollNext}
                            className="absolute z-10 top-[40%] right-0 lg:right-[-2%] transition-opacity"
                        >
                            <Image
                                src="/assets/testimonies/arrow_right.svg"
                                alt="Next"
                                width={50}
                                height={50}
                            />
                        </button>

                        {/* Progress bar */}
                        <div className="rounded-lg px-8 sm:px-0 flex mt-12 flex-col w-full">
                            <div className="h-[1px] left-0 bg-gray-300 rounded-lg w-full"></div>
                            <div
                                className="border-white h-[5px] mt-[-3px] bg-white transition-all duration-300 ease-in-out"
                                style={{ width: `${progressPercentage}%` }} // the progress bar is for the screenshot testimonies
                            ></div>
                        </div>
                    </div>

                    {/* Text Testimonials Section */}
                    <div className="overflow-hidden px-4 lg:px-0" ref={textEmblaRef}>
                        <div className="flex gap-6">
                            {[...testimonies, ...testimonies].map((testimony, index) => (
                                <div key={index} className="flex-[0_0_85%] lg:flex-[0_0_400px] first:ml-4 lg:first:ml-0y">
                                    <Card {...testimony} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Card = ({name, title, image, description}) => {
    return (
        <div className="bg-white rounded-3xl w-[85vw] lg:w-[400px] h-full shrink-0 font-lato gap-4 pt-4 px-4 pb-2 text-black flex flex-col">  
            <div className="flex items-center gap-4">
                <div className="overflow-hidden h-[40px] w-[40px] lg:h-[70px] lg:w-[70px] rounded-full">
                    <Image src={image} height={70} width={70} alt={name} className="w-full h-full object-cover" />   
                </div>
                <div className="flex flex-col justify-start">
                    <p className="font-semibold md:font-normal">{name}</p>
                    <p className="text-sm md:text-base capitalize">{title}</p>
                </div>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    )
}

 
const PlayCard = ({name, title, image}) => {
    return (
            <div className="flex relative rounded-[20px] overflow-hidden items-center gap-4 min-w-[85vw] lg:min-w-0 snap-center">
                <Image src={image} height={626} width={496} alt={name} className="object-cover w-full h-[400px] lg:h-[494px] lg:w-full" />   
                <div className="flex justify-between absolute w-full bg-black/50 bottom-0 backdrop-blur-[10px] p-4 items-center gap-4">
                    <div className="flex flex-col justify-start">
                        <p>{name}</p>
                        <p className="capitalize font-lato">{title}</p>
                    </div>
                    <Image src="/assets/icons/play.svg" alt="" width={30} height={30} />
                </div>
            </div>
    )
}
export default RealLife