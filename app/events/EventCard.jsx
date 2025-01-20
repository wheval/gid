import React from 'react';
import Image from 'next/image';
import BlurImg from '../../public/assets/blurbg.png';
import CalendarIcon from '../../public/assets/calendar.svg';
import LocationIcon from '../../public/assets/location.svg';

const EventCard = ({
  eventImageSrc,
  eventTitle,
  eventDescription,
  eventTags,
  eventTimeline,
  eventLocation
}) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      {/* Event Image */}
      <div className="relative w-full h-56">
        <Image
          src={eventImageSrc || BlurImg}
          alt={eventTitle}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Event Details */}
      <div className="p-5">
        <h3 className="text-2xl font-bold text-gray-900">{eventTitle}</h3>
        <p className="text-gray-600 mt-2">{eventDescription}</p>

        {/* Event Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {eventTags?.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-semibold text-[#A20812] bg-[#f7cbce] px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Event Timeline & Location */}
        <div className="mt-4 text-gray-500 text-sm space-y-2">
          <div className="flex items-center gap-2">
            <Image src={CalendarIcon} alt="Calendar Icon" width={20} height={20} />
            <span>{eventTimeline}</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src={LocationIcon} alt="Location Icon" width={20} height={20} />
            <span>{eventLocation}</span>
          </div>
        </div>


        {/* Call to Action Button */}
        <button className="mt-5 w-full bg-[#A20812] hover:bg-[#bd3c45] text-white font-semibold py-2 px-4 rounded-md transition-all">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default EventCard;
