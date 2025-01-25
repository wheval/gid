"use client"
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const newsData = [
    {
        image: "/assets/in_the_news/01.png",
        title: "GIDA partners with AAX Exchange to host I can trade crypto trading bootcamp...",
        avatar_profile: "/assets/in_the_news/avatars/01.png",
        by: "Crypto Asset Buyer",
        date: "Dec 15, 2023",
        link: "#"
    },
    {
        image: "/assets/in_the_news/02.png",
        title: "Future of Remote Work, Starknet Africa to host a webinar on the future of remote work...",
        avatar_profile: "/assets/in_the_news/avatars/02.png",
        by: "Starknet Africa",
        date: "Dec 16, 2023",
        link: "#"
    },
    {
        image: "/assets/in_the_news/03.png",
        title: "Web3 Conference Africa, GIDA to host a conference on web3...",
        avatar_profile: "/assets/in_the_news/avatars/03.png",
        by: "Mike Johnson",
        date: "Dec 17, 2023",
        link: "#"
    },
];

const NewsSection = () => {
    const autoplayOptions = {
        delay: 4000,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
    };

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            slidesToScroll: 1,
            align: "start",
            containScroll: "trimSnaps",
            loop: true,
        },
        [Autoplay(autoplayOptions)]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        });
    }, [emblaApi]);

    const progressPercentage = ((selectedIndex + 1) / scrollSnaps.length) * 100;

    return (
        <>
            <section className='bg-primary px-4 lg:px-20 py-8 sm:py-16 relative overflow-hidden'>
                <div className="max-w-screen-2xl mx-auto flex flex-col gap-10 sm:gap-20 items-center justify-center">
                    <div className="text-center">
                        <h1 className='font-semibold text-[2rem] lg:text-[3.125rem] text-white'>IN THE NEWS</h1>
                        <p className='text-white font-lato text-sm sm:text-base lg:text-[1.5rem] tracking-tighter'>See some of the exploits</p>
                    </div>

                    <div className="relative w-full">
                        {/* Left Arrow */}
                        <img
                            src="/assets/newsArrowLeft.svg"
                            alt=""
                            className='w-12 h-12 lg:w-16 lg:h-16 absolute sm:-left-2 lg:-left-8 z-20 top-1/2 -translate-y-1/2 cursor-pointer'
                            onClick={scrollPrev}
                        />

                        {/* News Section */}
                        <div className='overflow-hidden w-full relative' ref={emblaRef}>
                            <div className='flex first:pl-2 gap-2 lg:gap-5'>
                                {newsData.map((news, index) => (
                                    <div
                                        key={index}
                                        className='flex-[0_0_85%] lg:flex-[0_0_40%] h-full rounded-[40px] overflow-hidden relative'
                                    >
                                        <a className='h-[200px] overflow-hidden' href={news.link}><Image src={news.image} className='hover:scale-105 transition' width={595} height={200} alt='' /></a>
                                        <div className='bg-white h-full font-lato text-black p-4'>
                                            <p className='lg:text-xl font-medium leading-6 h-[50px] mt-2 mb-8'>{news.title}</p>
                                            <div className='flex gap-2 items-center justify-between'>
                                                <div className='flex items-center'>
                                                    <div className='w-8 lg:w-[70px] lg:h-[70px] h-8 rounded-full overflow-hidden mr-2'>
                                                        <Image src={news.avatar_profile} alt="" layout='responsive' width={70} height={70} />
                                                    </div>
                                                    <div className='flex  flex-col'>
                                                        <p className='text-sm lg:mb-2 lg:text-[1.5rem]'>{news.by}</p>
                                                        <p className='text-sm lg:text-base'>{news.date}</p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-end items-end h-full'><a className='text-primary px-3 py-1 lg:mt-8 rounded-full text-sm lg:text-base hover:bg-opacity-90' href={news.link}>Read more</a></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Arrow */}
                        <img
                            src="/assets/newsArrowRight.svg"
                            alt=""
                            className='w-12 h-12 lg:w-16 lg:h-16 absolute z-40 right-1 sm:-right-2 lg:-right-8 top-1/2 -translate-y-1/2 cursor-pointer'
                            onClick={scrollNext}
                        />


                        {/* Progress bar container */}
                        <div className="rounded-lg px-4 flex mt-12 flex-col w-full">
                            <div className="h-[1px] left-0 bg-gray-300 rounded-lg w-full"></div>
                            <div
                                className="border-white h-[5px] mt-[-3px] bg-white transition-all duration-300 ease-in-out"
                                style={{ width: `${progressPercentage}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
                <Image src="/assets/circle_news_section.svg" className='absolute w-[200px] h-[200px] lg:w-[600px] lg:h-[596px] top-[-15%] left-[-10%] lg:top-[-46%] lg:left-[-25%] xl:top-[-360px]' width={600} height={596} alt='' />
            </section>
            <Image src="/assets/circle_news_section.svg" alt="" className="absolute transform rotate-[190deg] w-[200px] h-[200px] lg:w-[600px] lg:h-[596px] top-[38%] right-[-18%] lg:top-[30%] lg:right-[-30%]" width={600} height={596} />
        </>
    )
}

export default NewsSection
