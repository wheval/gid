"use client"
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { newsData } from '../utils/constants';
import { H2 } from '@/components/ui/typography';


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
                    <div className="text-center text-white">
                        <H2 className='lg:mb-4'>IN THE NEWS</H2>
                        <p className='text-white font-lato sm:text-base lg:text-2xl tracking-tight'>See some of our exploits</p>
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
                                        className='flex-[0_0_90%] lg:flex-[0_0_40%] h-full rounded-[40px] overflow-hidden relative'
                                    >
                                        <div className="lg:h-[200px] max-h-[120px] lg:max-h-[200px] overflow-hidden cursor-pointer"><a className='cursor-pointer' target='_blank' href={news.link}><Image src={news.image} className='hover:scale-105 cursor-pointer transition h-auto w-full' width={595} height={200} alt='' /></a></div>
                                        <div className='bg-white h-full font-lato text-black p-4'>
                                            <a href={news.link} target='_blank'><p className='lg:text-xl font-medium leading-6 h-[50px] mt-2 mb-8'>{news.title}</p></a>
                                            <div className='flex gap-2 items-center lg:mt-12 justify-between'>
                                                <div className='flex items-center'>
                                                    <div className='w-8 lg:w-[70px] lg:h-[70px] h-8 rounded-full overflow-hidden mr-2'>
                                                        <Image src={news.avatar_profile} alt="" layout='responsive' width={70} height={70} />
                                                    </div>
                                                    <div className='flex  flex-col'>
                                                        <p className='text-sm lg:mb-2 lg:text-[1.5rem]'>{news.by}</p>
                                                        <p className='text-sm lg:text-base'>{news.date}</p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-end items-end h-full'><a className='text-primary px-3 py-1 lg:mt-8 rounded-full text-sm lg:text-base hover:bg-opacity-90' target='_blank' href={news.link}>Read more</a></div>
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
