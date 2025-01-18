"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
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
          pagination={{
            clickable: true,
            bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`,
            bulletActiveClass: `swiper-pagination-bullet-active swiper-pagination-bullet-active-main`,
          }}
          modules={[Autoplay, Pagination]}
          className="max-w-full pb-12"
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

        <style jsx global>{`
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #ccc;
            opacity: 0.6;
            margin: 0 4px;
          }

          .swiper-pagination-bullet-active {
            opacity: 1;
            background: #000;
          }

          .swiper-pagination {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 0;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Throwback;
