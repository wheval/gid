//sorry, i didnt use this card again

import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import TimeIcon from '../../../public/assets/timeIcon.svg';
import LocationIcon from '../../../public/assets/locationIcon.svg';

const EventCard = ({ event }) => {
    return (
        <div className="flex flex-col lg:flex-row items-center bg-[#FAF9F6] rounded-lg p-6 max-w-5xl mx-auto my-6 space-y-6 lg:space-y-0 lg:space-x-8">

            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-gray-700 text-lg font-semibold">{event.date}</span>
                <span className="text-gray-500 text-md">{event.day}</span>
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 hidden lg:block"></div>
            </div>

            <div className="flex flex-col md:flex-row rounded-lg p-6 w-full">
                <div className="text">
                    <h2 className="text-gray-500 font-light text-lg">{event.time}</h2>
                    <h3 className="text-black font-normal text-2xl mt-1">{event.title}</h3>

                    <div className="flex items-center mb-4">
                        <Image
                            src={TimeIcon}
                            alt="clock-icon"
                            width={'10px'}
                            height={'10px'}
                            className="p-2"
                        />
                        <div className="flex justify-start my-4 space-x-6 text-center">
                            <div>
                                <span className="block font-light text-gray-700">Days</span>
                                <span className="block font-normal text-black">2</span>
                            </div>
                            <div>
                                <span className="block font-light text-gray-700">Hours</span>
                                <span className="block font-normal text-black">12</span>
                            </div>
                            <div>
                                <span className="block font-light text-gray-700">Minutes</span>
                                <span className="block font-normal text-black">2</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center mb-4">
                        <Image
                            src={LocationIcon}
                            alt="location-icon"
                            width={'10px'}
                            height={'10px'}
                            className="p-2"
                        />
                        <span className="text-gray-600">{event.location}</span>
                    </div>

                    <div className="flex items-center">
                        <span className="bg-green-200 text-green-700 px-2 rounded-full font-normal">
                            Free Access
                        </span>
                        <span className="text-gray-500 pl-2"> | </span>
                        <span className="pl-3">{event.registered} Registered</span>
                    </div>

                    <Link href={`${event.registerUrl}`}>
                        <button className="bg-red-700 w-50 text-white font-bold px-6 py-3 rounded-full mt-4 hover:bg-red-800 transition">
                            Register For Event
                        </button>
                    </Link>
                </div>

                <div className='images md:ml-auto'>
                    <div className="flex flex-col m-auto md:ml-auto lg:flex-row items-center justify-center lg:space-x-4 h-full">
                        <div className="relative w-72 h-48 lg:w-56 lg:h-36 flex items-center">
                            <Image
                                src={event.image}
                                alt="Event banner"
                                layout="fill"
                                objectFit="cover"
                                className="p-2 rounded-xl"
                            />
                        </div>

                        <div className="relative w-72 h-48 lg:w-56 lg:h-36 flex items-center">
                            <Image
                                src={event.loc}
                                alt="Event location"
                                layout="fill"
                                objectFit="cover"
                                className="p-2 rounded-xl"
                            />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default EventCard;
