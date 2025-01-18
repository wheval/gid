"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the Cairo Web3 Developers Bootcamp?",
      answer:
        "It is a comprehensive program designed to train developers in Web3 technologies using Cairo.",
    },
    {
      question: "Who is this bootcamp for?",
      answer:
        "The bootcamp is for developers, blockchain enthusiasts, and anyone interested in Web3 development.",
    },
    {
      question: "How long is the bootcamp?",
      answer:
        "The bootcamp lasts for 8 weeks, with flexible schedules to accommodate participants.",
    },
    {
      question: "What is the cost of the bootcamp?",
      answer:
        "The bootcamp is free for selected participants, with funding from sponsors.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div>
        <h1 className="text-3xl font-extrabold mb-8 text-gray-800">
          FAQ
        </h1>
        <div className="flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#900A15] text-white rounded-md p-4 shadow-lg transition-all duration-300"
            >
              <h1
                onClick={() => toggleFAQ(index)}
                className="text-lg font-bold cursor-pointer flex justify-between items-center"
              >
                {faq.question}
                <span className="text-lg">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </h1>
              {openIndex === index && (
                <p className="mt-4 text-gray-300 transition-opacity duration-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
