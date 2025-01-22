"use client";
import { useState } from "react";
import Image from "next/image";
import { LiaGreaterThanSolid } from "react-icons/lia";

const testimonials = [
  {
    id: 1,
    name: "Maxwell C. Ngwu",
    image: "/assets/testimonial2.jpg",
    role: "Blockchain Enthusiast",
    testimonial:
      "The GIDA Starknet/Cairo Bootcamp was an incredible opportunity to upskill into blockchain development. The 8-week intensive learning provided a solid foundation, with tutors offering great support.",
  },
  {
    id: 2,
    name: "Ayo Festus",
    image: "/assets/testimonial1.png",
    role: "Blockchain Developer",
    testimonial:
      "The GIDA and Cairo bootcamp bootcamp was an amazing journey with well-skilled tutors who provided so much value. I’m glad I didn't miss this opportunity. Thanks, GIDA, for the experience and support!",
  },
  {
    id: 3,
    name: "Gideon Bature",
    image: "/assets/testimonial5.jpeg",
    role: "Smart Contract Developer",
    testimonial:
      "It was a great learning experience. The tutors and community were very helpful, always answering questions and providing assignments to deepen our understanding. Thanks, GIDA, for this opportunity!",
  },
  {
    id: 4,
    name: "Femi Oje",
    image: "/assets/testimonial4.jpeg",
    role: "Frontend Developer",
    testimonial:
      "Coming from a Web2 background, the GIDA x Starknet Bootcamp was my gateway into Web3. The mentors provided great support and resources, making the transition smooth and enjoyable. Consistency is key to success!",
  },
  {
    id: 5,
    name: "Anih Wisdom Somadina",
    image: "/assets/testimonial3.jpg",
    role: "Smart Contract Developer",
    testimonial:
      "The GIDA-Cairo bootcamp was an enriching experience with passionate tutors and friendly colleagues. Every concept was explained thoroughly, and all questions were welcomed. Thanks, GIDA, for this great opportunity!",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="px-4 py-12 -ml-6">
      <div className="md:max-w-3xl md:mx-auto md:px-0 relative">
        <div className="mx-4 mb-4">
          <h1 className="font-bold text-2xl mb-2 flex flex-col capitalize">
            See what Our Alumini from cairo bootcamp 1.0 are saying
          </h1>
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
                className="w-32 h-32 rounded-full border-2 border-gray-200 shadow-md object-cover"
              />
            </div>
            <div className="mt-4 overflow-y-auto ">
              <p className="text-gray-600 text-sm leading-relaxed">
                {testimonials[currentIndex].testimonial}
              </p>
            </div>
            <h3 className="text-gray-800 mt-2 text-lg font-[550]">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-gray-500 text-sm">
              {testimonials[currentIndex].role}
            </p>
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex md:items-center md:space-x-6 ">
            <Image
              src={testimonials[currentIndex].image}
              height={1000}
              width={1000}
              alt={`${testimonials[currentIndex].name}'s avatar`}
              className="w-48 min-w-48 h-48 rounded-full border-4 border-gray-200 shadow-md object-cover"
            />
            <div className="flex-1">
              <div>
                <p className="text-gray-600 text-base leading-relaxed">
                  {testimonials[currentIndex].testimonial}
                </p>
              </div>
              <h3 className="text-gray-800 text-lg font-semibold mt-4">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-500 text-sm">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Button */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-end px-2 pointer-events-none">
          <button
            onClick={handleNext}
            className="pointer-events-auto"
            aria-label="Next testimonial"
          >
            <LiaGreaterThanSolid className="text-gray-700 w-5 h-5 scale-y-[2]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
