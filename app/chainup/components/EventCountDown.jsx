"use client";
import { useState } from "react";
import { FaClock } from "react-icons/fa6";

const EventCountDown = ({ newDate }) => {
  const calculateTimeLeft = () => {
    const targetDate = new Date(`${newDate}T10:00:00`).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
  
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Update the countdown every second
  setTimeout(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  const padNumber = (num) => num.toString().padStart(2, "0");

  return (
    <div className="flex font-lato justify-start  gap-4 mb-4">
      <div className="text-center flex items-center gap-2">
        <FaClock className="border p-1.5 rounded-lg bg-gray-100 text-3xl" />
      </div>
      <div className="text-center">
        <div className="text-sm mt-1">Days</div>
        <div className=" p-2 rounded">
          <span className="text-lg font-[family-name:var(--font-abhaya-libre)]">
            {timeLeft.days}
          </span>
        </div>
      </div>
      <div className="text-center">
        <div className="text-sm mt-1">Hours</div>
        <div className=" p-2 rounded">
          <span className="text-lg font-[family-name:var(--font-abhaya-libre)]">
            {padNumber(timeLeft.hours)}
          </span>
        </div>
      </div>
      <div className="text-center">
        <div className="text-sm mt-1">Minutes</div>
        <div className=" p-2 rounded">
          <span className="text-lg font-[family-name:var(--font-abhaya-libre)]">
            {padNumber(timeLeft.minutes)}
          </span>
        </div>
      </div>
      <div className="text-center">
        <div className="text-sm mt-1">Seconds</div>
        <div className=" p-2 rounded">
          <span className="text-lg font-[family-name:var(--font-abhaya-libre)]">
            {padNumber(timeLeft.seconds)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCountDown;
