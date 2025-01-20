"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";

<style jsx global>{`
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: #ffffff;
    opacity: 0.6;
    margin: 0 5px;
    border-radius: 50%;
  }

  .swiper-pagination-bullet-active {
    background: #000000;
    opacity: 1;
  }

  .swiper-pagination {
    position: relative;
    bottom: -40px; /* Further pushed pagination down */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .custom-nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #000000;
    font-size: 24px;
    font-weight: bold;
    width: 40px;
    height: 40px;
    background: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  .custom-prev-btn {
    left: -50px; /* Positioning left arrow */
  }

  .custom-next-btn {
    right: -50px; /* Positioning right arrow */
  }
`}</style>;
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
  return (
    <section className="bg-gradient-to-tr from-[#FF4B59] to-[#F7C338] text-black px-8 md:px-12 py-20">
      <div>
        <h1 className="text-2xl font-bold mb-6">
          Throwback to Cairo Bootcamp 1.0
        </h1>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
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
          }}
          modules={[Autoplay, Pagination]}
          className="max-w-full pb-12 relative"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full">
                <Image
                  src={img}
                  alt={`Throwback image ${index + 1}`}
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg object-cover grayscale
                    w-full h-[300px]
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
