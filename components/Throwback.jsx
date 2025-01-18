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
          slidesPerView="3"
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="max-w-full">
          {images.map((img, index) => (
            <SwiperSlide key={index} style={{ width: "auto" }}>
              <Image
                src={img}
                alt={`Throwback image ${index + 1}`}
                width={500}
                height={500}
                className="rounded-lg shadow-lg w-48 h-48 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Throwback;
