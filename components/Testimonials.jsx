"use client";
import { useState } from "react";
import Image from "next/image";
import { LiaGreaterThanSolid, LiaLessThanSolid } from "react-icons/lia";

const testimonials = [
  {
    id: 1,
    name: "Ayo Festus",
    image: "/assets/testimonial1.png",
    testimonial:
      "It was amazing journey. I learned from various well skilled tutor. I got so much value and am glad i did not miss this opportunity",
  },
  {
    id: 2,
    name: "Gideon Bature",
    image: "/assets/testimonial4.jpeg",
    testimonial:
      "My name is Gideon Bature, a Software Engineer. I learnt a lot in the GIDA Starknet-Cairo bootcamp,  the community (GIDA) and tutors were super helpful, always answering our questions and helpful, giving us assignments for us to apply what we have learnt inorder to have a much better understanding of it. Thank you so much for this opportunity GIDA.",
  },
  {
    id: 3,
    name: "Femi Oje",
    image: "/assets/testimonial5.jpeg",
    testimonial:
      "The GIDA x Starknet Bootcamp was my gateway into the world of Web3, as my prior experience was primarily in Web2. The program provided exceptional support in bridging this gap. The mentors were incredibly helpful, offering all the necessary resources and patiently answering every question I had, ensuring a seamless learning experience. While I had to dedicate personal time to studying (as expected), their guidance made the transition both smooth and enjoyable. My advice to anyone considering this bootcamp is simple: stay consistent, and the results will follow.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="px-4 py-12">
      <div className="md:max-w-3xl md:mx-auto md:px-0 relative">
        <div className="mx-4 mb-4">
          <h1 className="font-bold text-2xl mb-2">Testimonials</h1>
          <p>See what other beneficiaries has to say</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 md:flex md:items-center md:justify-between md:text-left md:p-8 mx-16">
          {/* Mobile View */}
          <div className="text-center md:hidden">
            <div className="flex justify-center">
              <Image
                src={testimonials[currentIndex].image}
                height={1000}
                width={1000}
                alt={`${testimonials[currentIndex].name}'s avatar`}
                className="w-32 h-32 rounded-full border-2 border-gray-200 shadow-md"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              {testimonials[currentIndex].testimonial}
            </p>
            <h3 className="text-gray-800 text-lg font-semibold mt-4">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-gray-500 text-sm">BlockhChain Enthusiast</p>
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Image
              src={testimonials[currentIndex].image}
              height={1000}
              width={1000}
              alt={`${testimonials[currentIndex].name}'s avatar`}
              className="w-48 min-w-48 h-48 rounded-full border-4 border-gray-200 shadow-md"
            />
            <div>
              <p className="text-gray-600 text-base leading-relaxed">
                {testimonials[currentIndex].testimonial}
              </p>
              <h3 className="text-gray-800 text-lg font-semibold mt-4">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-500 text-sm">GIDA Member</p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons - Now absolutely positioned */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 pointer-events-none">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition shadow pointer-events-auto"
            aria-label="Previous testimonial"
          >
            <LiaLessThanSolid className="text-gray-700 w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition shadow pointer-events-auto"
            aria-label="Next testimonial"
          >
            <LiaGreaterThanSolid className="text-gray-700 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
