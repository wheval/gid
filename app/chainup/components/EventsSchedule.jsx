import React from 'react';
import EventCard from './EventCard';

import KadunaImg from '../../../public/assets/chain-up-kaduna.png';
import KADImg from '../../../public/assets/kad.png';
import IbadanImg from '../../../public/assets/chain-up-ibadan.png';
import IBImg from '../../../public/assets/ib.png';
import BeninImg from '../../../public/assets/chain-up-benin.png';
import BNIImg from '../../../public/assets/bni.png';
import AnambraImg from '../../../public/assets/chain-up-anambra.png';
import ANImg from '../../../public/assets/an.png';
import EnuguImg from '../../../public/assets/chain-up-enugu.png';
import ENUImg from '../../../public/assets/enu.png';

const EventsSchedule = () => {
  const eventsScheduleData = [
    {
      date: "January 25, 2025",
      day: "Saturday",
      time: "10:00 AM",
      title: "CHAIN UP KADUNA",
      location: "The Budd, 19 Algeria Crescent, Barnawa, Kaduna",
      registered: 230,
      image: KadunaImg,
      loc: KADImg,
      registerUrl: "/",
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
      registerUrl: "/",
    },
    {
      date: "February 01, 2025",
      day: "Saturday",
      time: "10:00 AM",
      title: "CHAIN UP BENIN",
      location: "Opolo Innovation Hub, UNIBEN, Benin City, Edo State",
      registered: 230,
      image: BeninImg,
      loc: BNIImg,
      registerUrl: "/",
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
      registerUrl: "/",
    },
    {
      date: "February 15, 2025",
      day: "Tuesday",
      time: "10:00 AM",
      title: "CHAIN UP ENUGU",
      location:
        "Lion Science Park, Off Sullivan Chime Drive, Greenhouse Gate, UNN Campus, Enugu State",
      registered: 230,
      image: EnuguImg,
      loc: ENUImg,
      registerUrl: "/",
    },
  ];

  return (
    <div className="schedule-container bg-[#F0F0F0] md:p-10">
      <h1 className="schedule-title font-semibold text-2xl p-10">Events Schedule</h1>

      <div className="events-list">
        {eventsScheduleData.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}

      </div>
    </div>
  )
};

export default EventsSchedule;
