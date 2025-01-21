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
        "The Cairo web3 Developers bootcamp is an intensive training programme designed to equip web2 developers with the skills and knowledge needed to transition into web3 development, focusing on blockchain technology.",
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
        "The tuition for the bootcamp is fully sponsored by starknet Foundation.",
    },
    {
      question:
        "what are the basic criteria for participating in  this FREE developer Bootcamp? ",
      answer: " A good PC/Laptop is compulsory (not phone), Strong Internet connection, Zeal to learn and Consistency in attending classes and practicing what is taught, Must be Present in all classes within the 8 weeks learning period (don't miss classes) ",
    },
    {
      question: "What is the nature of the class schedule?",
      answer: "Classes holds online/virtually 2 times a week (Mondays & Wednesdays) only, with a test/assignment day every Friday. And runs for 8 weeks. ",
    },
    {
      question: "Is there certification upon completion of the bootcamp?",
      answer: "We will be giving Certificates by end of the Bootcamp only to those who actively participated in the Training. Active participation implies - attending classes without missing, doing the weekly assignments, doing the weekly tests.",
    },
    {
      question: "How does the hybrid system  of this bootcamp work?",
      answer: " We intend to have weekly physical/IRL meetups for learners every Sundays in 20 cities where we have the most bootcamp participants domiciled in. This hybrid model (online classes + physical meetups) will help ensure for a collaborative learning experience. ",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div>
        <h1 className="text-3xl font-bold mb-8 text-gray-800">FAQ</h1>
        <div className="flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#900A15] text-white rounded-md p-4 shadow-lg transition-all duration-300"
            >
              <h1
                onClick={() => toggleFAQ(index)}
                className="text-lg font-[550] cursor-pointer flex justify-between items-center capitalize"
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
