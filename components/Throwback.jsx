"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

const images = [
  "/assets/throwback1.jpg",
  "/assets/throwback2.jpg",
  "/assets/throwback3.jpg",
  "/assets/throwback1.jpg",
  "/assets/throwback2.jpg",
  "/assets/throwback3.jpg",
  "/assets/throwback2.jpg",
];

const Throwback = () => {
  return (
    <section className="bg-white text-black p-8 md:p-12">
      <div>
        <h1 className="text-2xl font-bold mb-6">
          Throwback to Cairo Bootcamp 1.0
        </h1>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              // mobile
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              // tablet
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              // desktop
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="max-w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full">
                <Image
                  src={img}
                  alt={`Throwback image ${index + 1}`}
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg object-cover 
                    w-full h-[200px]
                    md:h-[300px] 
                    lg:h-[400px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Throwback;
