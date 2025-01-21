"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Curriculum = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const weeks = [
    {
      week: "Week 1",
      title: "Getting Started With The Starknet Ecosystem",
      details: [
        "Introduction to Starknet",
        "- Overview of Starknet",
        "- STARK vs SNARK",
        "- Starknet Architecture",
        "- Transaction Types and Lifecycle",
        "- Finality and Consensus in Starknet",
        "Cairo: The Language of Starknet",
        "- Why Cairo?",
        "- Cairo Syntax Overview",
        "- Cairo Program Structure",
        "- Setting up the Development Environment",
        "- Installing Argent and Bravos Wallets",
        "- Installing Scarb",
        "- Accessing Testnet via Faucets",
      ],
    },
    {
      week: "Week 2",
      title: "Deep Dive Into Cairo Programming",
      details: [
        "Understanding Cairo Programs",
        "- Writing Your First Cairo Program",
        "- Data Types and Structures in Cairo",
        "- Control Flow and Functions in Cairo",
        "Advanced Concepts",
        "- Memory Management in Cairo",
        "- Cairo Data Structures: Arrays, Tuples, and Structs",
        "- Solving Starkling Exercises",
      ],
    },
    {
      week: "Week 3",
      title: "Building On Starknet",
      details: [
        "Introduction to Starknet Contracts",
        "- Cairo Programs vs Starknet Contracts",
        "- Contract Class vs Instance",
        "- Functions and Interfaces in Starknet",
        "Contract Development",
        "- Writing and Deploying a Simple Storage Contract",
        "- Understanding Events, Traits, and Syscalls",
        "- Cross-Contract Interactions and Libraries",
        "- Modules and Scope in Starknet",
      ],
    },
    {
      week: "Week 4",
      title: "StarkNet Development Tools And Frameworks",
      details: [
        "Tools and Frameworks",
        "- Introduction to Development Tools",
        "- Overview of Scarb, Starkli (Starknet CLI)",
        "- Starknet Devnet and Katana",
        "- Starknet Foundry",
        "Building with Foundry",
        "- Writing and Deploying an ERC20 Contract on Starknet",
        "- Declaring vs Deploying Contracts",
      ],
    },
    {
      week: "Week 5",
      title: "Advanced Starknet Contract Development",
      details: [
        "Contract Development",
        "- Cross-Contract Interactions",
        "- Introduction to Composability and Components in Starknet",
        "- Building a Token Sale Contract",
        "Advanced Contract Techniques",
        "- Upgradable Contracts",
      ],
    },
    {
      week: "Week 6",
      title: "Testing In Starknet",
      details: [
        "Introduction to Testing in Starknet",
        "- Web3 Testing Fundamentals",
        "- Unit Testing, Integration Testing, and Mocking in Starknet",
        "- Writing tests for ERC20 contract",
        "Advanced Testing Techniques",
        "- Automated Testing and Cheatcodes",
        "- Testing Upgradable Contracts",
        "- Introduction to Fuzz Testing",
      ],
    },
    {
      week: "Week 7",
      title: "Frontend Integration With Starknet",
      details: [
        "Introduction to Frontend Integration",
        "- Overview of Starknet.js and Starknet kit",
        "- APIs: Provider, Signer, Account",
        "- ABI and Contract Interaction",
        "- Using starknet-react for Frontend Development",
        "- Introduction to Starknet Scaffold",
        "- Building a Frontend for a Simple Contract (e.g., ToDo contract) using starknet scaffold",
      ],
    },
    {
      week: "Week 8",
      title: "Open Source Contribution on Starknet",
      details: [
        "Earning Opportunities on Starknet",
        "- Introduction to Only Dust and OD Hacks",
        "- Contributing to open source on Starknet",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Curriculum</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {weeks.map((item, index) => (
          <div
            key={index}
            className="bg-yellow-500 text-black p-4 rounded-md shadow-md"
          >
            <h2
              className="font-[550] cursor-pointer flex justify-between"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              {item.week}
              <span className="font-[100]">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </h2>
            <p
              className="mb-2 cursor-pointer"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              {item.title}
            </p>
            {activeIndex === index && (
              <ul className="mt-2 px-4">
                {item.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className={detail.startsWith("-") ? "" : "font-[550]"}
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
