"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const images = [
  "/assets/throwback1.jpg",
  "/assets/throwback2.jpg",
  "/assets/throwback3.jpg",
  "/assets/throwback4.jpg",
  "/assets/throwback5.jpg",
  "/assets/throwback6.jpg",
  "/assets/throwback7.jpg",
];

const Throwback = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
    loop: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

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

  return (
    <section className="bg-gradient-to-r from-[#FF4B59] to-[#F7C338] text-black px-4 md:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">Throw Back To Cairo Bootcamp 1.0</h1>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
            >
              <Image
                src={image}
                alt={`Throwback ${index + 1}`}
                width={500}
                height={500}
                className="rounded-lg w-full h-[300px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls Container */}
      <div className="flex items-center justify-center gap-16 mt-8">
        {/* Previous Button */}
        <button
          className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md"
          onClick={scrollPrev}
        >
          <span className="text-5xl">&lsaquo;</span>
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-6 bg-white"
                  : "w-2 bg-white/50"
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md"
          onClick={scrollNext}
        >
          <span className="text-5xl">&rsaquo;</span>
        </button>
      </div>
    </section>
  );
};

export default Throwback;