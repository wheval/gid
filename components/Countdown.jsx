"use client";
import { useState } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-02-24").getTime();
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
    <div className="bg-[#BD1522] p-4 text-white">
      <div className="flex justify-center items-center gap-3 text-xl font-bold">
        <div className="flex items-center">
          <span className="text-center">{timeLeft.days}</span>
          <span className=" ml-1">Days</span>
        </div>

        <div className="flex items-center">
          <span className="text-center">{padNumber(timeLeft.hours)}</span>
          <span className=" ml-1">Hours</span>
        </div>

        <div className="flex items-center">
          <span className="text-center">{padNumber(timeLeft.minutes)}</span>
          <span className=" ml-1">Min.</span>
        </div>

        <div className="flex items-center">
          <span className="text-center">{padNumber(timeLeft.seconds)}</span>
          <span className=" ml-1">Sec</span>
        </div>
      </div>

      <h2 className="text-center  mt-4 font-bold">Until Class Starts</h2>
    </div>
  );
};

export default Countdown;
