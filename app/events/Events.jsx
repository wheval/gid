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
        <div className="p-2 md:p-20">
            <h2 className="font-bold text-white text-4xl mb-8 text-center">Events</h2>
            <div className="flex gap-6 flex-wrap justify-center">
                {events.map((each, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full sm:w-[80%] md:w-[60%] lg:w-[30%]">
                        <EventCard
                            eventImage={each.eventImageSrc}
                            eventTitle={each.eventTitle}
                            eventDescription={each.eventDescription}
                            eventTags={each.eventTags}
                            eventTimeline={each.eventTimeline}
                            eventLocation={each.eventLocation}
                        />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Events;