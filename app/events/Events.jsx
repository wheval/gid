import React from 'react';
import EventCard from './EventCard';
import BlurImg from '../../public/assets/blurbg.png';

const Events = () => {
    const events = [
        {
            eventImageSrc: BlurImg,
            eventTitle: "Event Title",
            eventDescription: "This is the event description",
            eventTags: ["HTML", "Frontend", "Backend"],
            eventTimeline: "10 days, March 01 - March 10",
            eventLocation: "Strictly Virtual"
        },
        {
            eventImageSrc: BlurImg,
            eventTitle: "Event Title",
            eventDescription: "This is the event description",
            eventTags: ["HTML", "Frontend", "Backend"],
            eventTimeline: "10 days, March 01 - March 10",
            eventLocation: "Strictly Virtual"
        },
        {
            eventImageSrc: BlurImg,
            eventTitle: "Event Title",
            eventDescription: "This is the event description",
            eventTags: ["HTML", "Frontend", "Backend"],
            eventTimeline: "10 days, March 01 - March 10",
            eventLocation: "Strictly Virtual"
        },
        {
            eventImageSrc: BlurImg,
            eventTitle: "Event Title",
            eventDescription: "This is the event description",
            eventTags: ["HTML", "Frontend", "Backend"],
            eventTimeline: "10 days, March 01 - March 10",
            eventLocation: "Strictly Virtual"
        },
    ]
    return (
        <div className='p-20'>
            <h2 className='font-bold text-white text-4xl'>Events</h2>
            <div className="flex flex-wrap">
                {events.map((each, index) => (
                    <EventCard
                        key={index}
                        eventImage={each.eventImageSrc}
                        eventTitle={each.eventTitle}
                        eventDescription={each.eventDescription}
                        eventTags={each.eventTags}
                        eventTimeline={each.eventTimeline}
                        eventLocation={each.eventLocation}
                    />
                ))}
            </div>
        </div>
    )
}

export default Events;