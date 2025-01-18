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
      "It was an amazing journey. I learned from various well-skilled tutors. I got so much value, and I'm glad I didn't miss this opportunity.",
  },
  {
    id: 2,
    name: "Femi Oje",
    image: "/assets/testimonial1.png",
    testimonial:
      "The GIDA experience was an amazing journey. I learned from various well-skilled tutors. I got so much value, and I'm glad I didn't miss this opportunity.",
  },
  {
    id: 3,
    name: "Gideon Bature",
    image: "/assets/testimonial1.png",
    testimonial:
      "My name is Gideon. It was an amazing journey. I learned from various well-skilled tutors. I got so much value, and I'm glad I didn't miss this opportunity.",
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
      <div className="md:max-w-3xl md:mx-auto md:px-0">
        <div className="bg-white shadow-lg rounded-xl p-6 md:flex md:items-center md:justify-between md:text-left md:p-8">
          {/* Mobile View */}
          <div className="text-center md:hidden">
            <div className="flex justify-center">
              <Image
                src={testimonials[currentIndex].image}
                height={80}
                width={80}
                alt={`${testimonials[currentIndex].name}'s avatar`}
                className="w-20 h-20 rounded-full border-4 border-gray-200 shadow-md"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              {testimonials[currentIndex].testimonial}
            </p>
            <h3 className="text-gray-800 text-lg font-semibold mt-4">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-gray-500 text-sm">Executive Engineer</p>
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Image
              src={testimonials[currentIndex].image}
              height={100}
              width={100}
              alt={`${testimonials[currentIndex].name}'s avatar`}
              className="w-24 md:w-48 h-24 md:h-48 rounded-full border-4 border-gray-200 shadow-md"
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

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6 md:mt-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition shadow"
            aria-label="Previous testimonial"
          >
            <LiaLessThanSolid className="text-gray-700 w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition shadow"
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
