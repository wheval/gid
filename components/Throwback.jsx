"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "/assets/646.jpg",
  "/assets/647.jpg",
  "/assets/648.jpg",
  "/assets/649.jpg",
  "/assets/650.jpg",
  "/assets/651.jpg",
  "/assets/652.jpg",
];

const Throwback = () => {
  // Create autoplay plugin instance
  const autoplayOptions = {
    delay: 2000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 508px)": { slidesToScroll: 1 },
        "(min-width: 768px)": { slidesToScroll: 1 },
        "(min-width: 1024px)": { slidesToScroll: 1 },
      },
      loop: true,
    },
    [Autoplay(autoplayOptions)]
  );

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
      <h1 className="text-3xl font-bold mb-8">
        Throw Back To Cairo Bootcamp 1.0
      </h1>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4 mx-auto"
            >
              <Image
                src={image}
                alt={`Throwback ${index + 1}`}
                width={500}
                height={500}
                className="rounded-2xl w-[300px] h-[300px] object-cover grayscale mx-auto"
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
                index === selectedIndex ? "w-6 bg-white" : "w-2 bg-white/50"
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
