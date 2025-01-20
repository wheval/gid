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
        "THe Cairo web3 Developers bootcamp is an intensive training programme designed to equip web2 developers with the skills and knowledge needed to transition into web3 development, focusing on blockchain technology.",
    },
    {
      question: "Who is this bootcamp for?",
      answer:
        "The target audience for the bootcamp is web2 developers with 1+ years of experience looking to transition into web3 development.",
    },
    {
      question: "How long is the bootcamp?",
      answer:
        "The bootcamp is going to last for 8 weeks - From 24th February to 14th April.",
    },
    {
      question: "What is the cost of the bootcamp?",
      answer:
        "The tuition for the bootcamp is fully spondored by starknet Foundation.",
    },
    {
      question:
        "what are the basic criteria for participating in  this FREE developer Bootcamp? ",
      answer: "  ",
    },
    {
      question: "What is the nature of the class schedule?",
      answer: " ",
    },
    {
      question: "Is there certification upon completion of the bootcamp?",
      answer: " ",
    },
    {
      question: "How does the hybrid system  of this bootcamp work?",
      answer: " ",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div>
        <h1 className="text-3xl font-extrabold mb-8 text-gray-800">FAQ</h1>
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
                <p className="mt-4 text-gray-300 transition-opacity duration-300 capitalize">
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
