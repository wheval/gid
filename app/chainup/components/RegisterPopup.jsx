"use client";
import { useState } from "react";
import { FaBuilding } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const RegisterPopup = ({ className = "", buttonClassName = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const locations = [
    { name: "Chain Up Ibadan", href: "/register/ibadan" },
    { name: "Chain Up Kaduna", href: "/register/kaduna" },
    { name: "Chain Up Anambra", href: "/register/anambra" },
    { name: "Chain Up Benin", href: "/register/benin" },
    { name: "Chain Up Enugu", href: "/register/enugu" },
  ];

  return (
    <div className={` ${className}`}>
      <button
        onClick={() => setIsOpen(true)}
        className={`mt-5 w-[165px] hover:bg-white  hover:outline hover:outline-2  text-white font-semibold py-2 px-4 rounded-[2rem] transition-all ${buttonClassName}`}
      >
        Register
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-lg shadow-xl w-[90%] max-w-md">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold text-[#A20812]">
                Select A Roadshow To Register
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <IoClose className="text-2xl" />
              </button>
            </div>

            <div className="p-4">
              {locations.map((location, index) => (
                <Link
                  key={index}
                  href={location.href}
                  className="flex group items-center gap-2 px-4 py-3 hover:bg-[#A20812] hover:text-white text-black rounded-lg transition-colors mb-2 last:mb-0"
                >
                  <FaBuilding className="text-lg text-red-500 group-hover:text-white" />
                  <span className=" group-hover:text-white font-medium">{location.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterPopup;
