"use client";

import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

import KadunaImg from "../../../public/assets/chainup/kaduna.jpg";
import KADImg from "../../../public/assets/chainup/Rectangle191.jpg";
import IbadanImg from "../../../public/assets/chainup/ibadan.jpg";
import IBImg from "../../../public/assets/chainup/Rectangle190.jpg";
import BeninImg from "../../../public/assets/chainup/benin.jpg";
import BNIImg from "../../../public/assets/chainup/Rectangle187.png";
import AnambraImg from "../../../public/assets/chainup/anambra.jpg";
import ANImg from "../../../public/assets/chainup/Rectangle188.png";
import EnuguImg from "../../../public/assets/chainup/enugu.jpg";
import ENUImg from "../../../public/assets/chainup/Rectangle189.png";
import Link from "next/link";
import EventCountDown from "./EventCountDown";

const EventsSchedule = () => {
  const eventsScheduleData = [
    {
      date: "January 25, 2025",
      day: "Saturday",
      time: "10:00 AM",
      title: "CHAIN UP KADUNA",
      location: "The Budl Grid, 19 Algeria Crescent, Barnawa, Kaduna",
      registered: 0,
      image: KadunaImg,
      loc: KADImg,
      registerUrl: "/register/kaduna",
      date2: "2025-01-25",
    },
    {
      date: "January 29, 2025",
      day: "Wednesday",
      time: "10:00 AM",
      title: "CHAIN UP IBADAN",
      location: "Seminar Room, ICC, University Of Ibadan Second Gate, Ibadan",
      registered: 230,
      image: IbadanImg,
      loc: IBImg,
      registerUrl: "/register/ibadan",
      date2: "2025-01-29",
    },
    {
      date: "February 01, 2025",
      day: "Saturday",
      time: "10:00 AM",
      title: "CHAIN UP BENIN",
      location:
        "FAGCOOP Restaurant (upstairs), University of Benin, Benin City, Edo State",
      registered: 230,
      image: BeninImg,
      loc: BNIImg,
      registerUrl: "register/benin",
      date2: "2025-02-01",
    },
    {
      date: "February 8, 2025",
      day: "Wednesday",
      time: "10:00 AM",
      title: "CHAIN UP ANAMBRA",
      location:
        "Nawé Schools, Fab Amich House, 89 Club Road, Regina, Opposite Obalaku/Awka, Anambra State",
      registered: 230,
      image: AnambraImg,
      loc: ANImg,
      registerUrl: "/register/anambra",
      date2: "2025-02-08",
    },
    {
      date: "February 15, 2025",
      day: "Tuesday",
      time: "10:00 AM",
      title: "CHAIN UP ENUGU",
      location:
        "Princess Alexandria Auditorium (PAA), University of Nigeria, Nsukka, Enugu State",
      registered: 230,
      image: EnuguImg,
      loc: ENUImg,
      registerUrl: "/register/enugu",
      date2: "2025-02-15",
    },
  ];

  return (
    <div className="schedule-container bg-[#F0F0F0] md:p-10">
      <h1 className="schedule-title font-semibold text-2xl p-10">
        Events Schedule
      </h1>

      <div className="">
        {eventsScheduleData.map((event, index) => (
          <div key={index} className=" p-6 mb-4">
            {/* date */}
            <div className="text-lg font-lato">
              {event.date}
              <span className="text-gray-500 px-4">{event.day}</span>
            </div>
            <div className=" flex flex-col mt-4 lg:flex-row w-full ">
              {/* this div contains all 3 main components */}

              <div className=" flex flex-col items-center justify-center md:justify-between md:flex-row bg-white rounded-lg shadow-md px-5">
                {/* Left Section */}
                <div className="p-6 flex-1 text-center md:text-left">
                  <div className="flex flex-col items-center md:items-start gap-4">
                    {/* Event time and title*/}
                    <div className="flex items-center md:items-start md:text-left gap-2  text-center">
                      <div className="">
                        <div className="text-xl mt-1 font-lato text-gray-500">
                          {event.time}
                        </div>
                        <h2 className="text-xl font-[550] mb-4">
                          {event.title}
                        </h2>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1 items-center md:items-start">
                      {/* Countdown Timer */}

                      <EventCountDown newDate={event.date2} />

                      {/* Location */}
                      <div className="flex items-start gap-2 font-lato">
                        <FaLocationDot className="text-gray-500 mt-1" />
                        <p className="text-gray-500 max-w-sm">
                          {event.location}
                        </p>
                      </div>

                      {/* Registration Info */}
                      <div className="mt-4 flex items-center justify-center md:justify-start gap-4">
                        <span className="text-green-500 rounded-xl bg-green-200 px-2 py-1 font-lato">
                          Free Access
                        </span>
                        <span className="text-gray-500">
                          <span className="font-[550] pr-2 font-[family-name:var(--font-abhaya-libre)] text-2xl ">
                            {event.registered}
                          </span>
                          Registered
                        </span>
                      </div>

                      {/* Register Button */}
                      <div className="mt-6">
                        <Link
                          href={event.registerUrl}
                          className=" bg-[#A20812] text-white px-6 py-3 rounded-full hover:bg-[#8a0710] transition-colors "
                        >
                          Register For Event
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section - 1 Image */}
                <div className="flex">
                  <Image
                    src={event.image}
                    alt={event.title}
                    className="scale-75 md:scale-100 object-cover rounded-lg !max-h[285px] w-[305px]"
                  />
                </div>
              </div>
              <div className="flex ml-0 lg:ml-12 items-center  lg:justify-end justify-center mt-2 lg:mt-0">
                {/* absolute right - last image */}
                <Image
                  src={event.loc}
                  alt={`${event.title} Location`}
                  className=" w-[500] lg:w-[390px] scale-75 md:scale-100 object-cover rounded-lg !max-h-[285px] h-[285px] hidden md:flex"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsSchedule;
