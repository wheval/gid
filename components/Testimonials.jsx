"use client";
import { useState } from "react";
import Image from "next/image";
import { LiaGreaterThanSolid, LiaLessThanSolid } from "react-icons/lia";

const testimonials = [
  {
    id: 1,
    name: "Maxwell C. Ngwu",
    image: "/assets/testimonial2.jpg",
    role: "Blockchain Enthusiast",
    testimonial:
      "As a full stack web developer, I always wanted, at some point, to upskill into blockchain development. And that was when I came across GIDA Starknet / Cairo Bootcamp, and surprisingly it was free. I knew then that I had to grab the opportunity. Amidst the struggle and toil of 8 weeks of intensive and progressive learning, I was able to get a solid foundation on blockchain dev. GIDA is more than an Academy, it's a family of like minds. Thanks Starknet Africa!!! Thanks GIDA Academy!!!.",
  },
  {
    id: 2,
    name: "Ayo Festus",
    image: "/assets/testimonial1.png",
    role: "GIDA Member",
    testimonial:
      "It was amazing journey I learned from various well skilled tutor I got so much value and I’m glad i didn't miss this opportunity Thank you so much for this opportunity GIDA.",
  },
  {
    id: 3,
    name: "Gideon Bature",
    image: "/assets/testimonial4.jpeg",
    role: "GIDA Member",
    testimonial:
      "My name is Gideon Bature, a Software Engineer. I learnt a lot in the GIDA Starknet-Cairo bootcamp,  the community (GIDA) and tutors were super helpful, always answering our questions and helpful, giving us assignments for us to apply what we have learnt inorder to have a much better understanding of it. Thank you so much for this opportunity GIDA.",
  },
  {
    id: 4,
    name: "Femi Oje",
    image: "/assets/testimonial5.jpeg",
    role: "GIDA Member",
    testimonial:
      "The GIDA x Starknet Bootcamp was my gateway into the world of Web3, as my prior experience was primarily in Web2. The program provided exceptional support in bridging this gap. The mentors were incredibly helpful, offering all the necessary resources and patiently answering every question I had, ensuring a seamless learning experience. While I had to dedicate personal time to studying (as expected), their guidance made the transition both smooth and enjoyable. My advice to anyone considering this bootcamp is simple: stay consistent, and the results will follow.",
  },
  {
    id: 5,
    name: "Anih Wisdom Somadina",
    image: "/assets/testimonial3.jpg",
    role: "GIDA Member",
    testimonial:
      "About my experience, Really had a great learning experience during the Gida-cairo boot camp. Ranging from humane tutors  and friendly colleagues. The tutors took their time explaining every concept down to their least in a very passionate way. They give room for questions and answer them no matter how casual they may sound.",
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
          <h1 className="font-bold text-2xl mb-2 flex flex-col capitalize">
            <span>See what Our Alumini from</span>

            <span>cairo bootcamp 1.0 are saying</span>
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
            <div className="mt-4 h-24 overflow-y-auto custom-scrollbar">
              <p className="text-gray-600 text-sm leading-relaxed">
                {testimonials[currentIndex].testimonial}
              </p>
            </div>
            <h3 className="text-gray-800 text-lg font-semibold">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-gray-500 text-sm">
              {testimonials[currentIndex].role}
            </p>
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Image
              src={testimonials[currentIndex].image}
              height={1000}
              width={1000}
              alt={`${testimonials[currentIndex].name}'s avatar`}
              className="w-48 min-w-48 h-48 rounded-full border-4 border-gray-200 shadow-md object-cover"
            />
            <div className="flex-1">
              <div className="h-28 overflow-y-auto custom-scrollbar">
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

        {/* Navigation Buttons */}
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

      {/* Add custom scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e0 transparent;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e0;
          border-radius: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #a0aec0;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
