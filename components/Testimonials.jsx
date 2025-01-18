"use client";
import { useState } from "react";
import Image from "next/image";
import { LiaGreaterThanSolid } from "react-icons/lia";

const testimonials = [
  {
    id: 1,
    name: "Ayo Festus",
    image: "/assets/testimonial1.png",
    testimonial: [
      "It Was Amazing Journey",
      "I Learned From Various Well Skilled Tutor",
      "I Got So Much Value And I'm Glad I Didn't Miss This Opportunity",
    ],
  },
  {
    id: 2,
    name: "Femi Oje",
    image: "/assets/testimonial1.png",
    testimonial: [
      "The GIDA Was Amazing Journey",
      "I Learned From Various Well Skilled Tutor",
      "I Got So Much Value And I'm Glad I Didn't Miss This Opportunity",
    ],
  },
  {
    id: 3,
    name: "Gideon Bature",
    image: "/assets/testimonial1.png",
    testimonial: [
      "My Name Is Gideon",
      "It Was Amazing Journey I Learned From Various Well Skilled Tutor",
      "I Got So Much Value And I'm Glad I Didn't Miss This Opportunity",
    ],
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
    <section className="max-w-6xl mx-auto px-8 py-12">
      <div className="flex items-center justify-between gap-8">
        {/* Testimonial Content */}
        <div className="flex gap-8 items-start animate-slideIn">
          <div>
            <Image
              src={testimonials[currentIndex].image}
              height={1000}
              width={1000}
              alt={`${testimonials[currentIndex].name}'s testimonial`}
              className="w-48 rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-semibold mb-4 text-gray-800">
              {testimonials[currentIndex].name}
            </h1>
            <div className="space-y-3">
              {testimonials[currentIndex].testimonial.map((line, index) => (
                <p
                  key={index}
                  className="text-lg text-gray-600 leading-relaxed"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="p-3 rounded-full transition-all shadow-md"
          aria-label="Next testimonial"
        >
          <LiaGreaterThanSolid className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
