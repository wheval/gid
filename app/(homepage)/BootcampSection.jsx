import Image from "next/image";
import Link from "next/link";

const bootcamps = [
  {
    title: "Cairo Bootcamp 2.0",
    description:
      "Level Up Your Skills With The Cairo Bootcamp! Master Programming, Explore Cutting-Edge Tools, And Excel In Modern Tech.",
    image: "cairo_bootcamp.png",
    status: "Upcoming",
    technologies: ["HTML", "Frontend", "Backend"],
    duration: "10 Days Mar 01 - Mar 10, 2025",
    type: "Strictly Virtual",
    sponsor_logo: "/assets/logos/snfoundation.svg",
  },
  {
    title: "MOT Bootcamp 2.0",
    description:
      "Elevate Your Trading By Mastering Trading Strategies And Market Analysis With The Masters Of Trading Bootcamp!",
    image: "mot_bootcamp.png",
    status: "Ongoing",
    technologies: ["XAU/USD", "Bitcoin", "Trading"],
    duration: "10 Days Mar 01 - Mar 10, 2025",
    type: "Strictly Virtual",
    sponsor_logo: "/assets/logos/bitget.svg",
  },
  {
    title: "GIDA Developer Bootcamp 1.0",
    description:
      "Level Up Your Skills With The GIDA Developer Bootcamp! Master Programming, Explore Cutting-Edge Tools, And Excel In Modern Tech.",
    image: "cairo_dev_bootcamp.png",
    status: "Ended",
    technologies: ["HTML", "Frontend", "Backend"],
    duration: "10 Days Sept 02 - Oct 26, 2024",
    type: "Strictly Virtual",
    sponsor_logo: "/assets/logos/snfoundation.svg",
  },
];

export default function BootcampSection() {
  return (
    <section className="py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h5 className="text-4xl md:text-5xl font-semibold mb-12">
          Learn Faster, Not Longer With
          <span className="block mt-2">Smarter Trainings At GIDA</span>
        </h5>

        <p className="text-2xl font-semibold mb-6">Our Bootcamps</p>

        <div className="grid gap-x-6 gap-y-4 md:grid-cols-2 lg:max-w-6xl lg:grid-cols-5 lg:grid-rows-2">
          {bootcamps.map((bootcamp, index) => (
            <div
              key={index}
              className={`bg-white ${index ===0 ? "lg:flex-col" : "lg:flex lg:gap-3"} rounded-[40px] p-4 gap-3 shadow-sm overflow-hidden border flex flex-col lg:flex-row justify-between border-gray-200 ${index === 0 ? "lg:row-start-1 lg:row-span-2 lg:col-span-2" : index === 1 ? "lg:col-start-3 lg:col-span-3" : index === 2 ? "lg:col-start-3 lg:col-span-3" : ""}`}
            >
              <div className="relative rounded-3xl overflow-hidden">
                <span
                  className={`absolute top-4 left-4 font-lato z-10 px-3 py-1 rounded-full text-sm font-medium text-white ${
                    bootcamp.status === "Upcoming"
                      ? "bg-yellow-500"
                      : bootcamp.status === "Ongoing"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {bootcamp.status}
                </span>
                <img
                  src={`/assets/flyers/${bootcamp.image || "cairo_bootcamp.png"}`}
                  alt={bootcamp.title}
                  className={`${index!==0 && "w-[480px]"} h-full min-w-full object-cover`}
                />
              </div>

              <div className="flex flex-col gap-3 justify-between">
                <div className="px-2">
                  <h3 className="text-xl font-semibold mb-2">{bootcamp.title}</h3>
                  <p className="text-gray-600 text-sm font-lato mb-4">{bootcamp.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {bootcamp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-0.5 bg-gray-100 font-lato font-light rounded-full text-xs lg:text-sm text-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2 text-sm font-lato text-gray-600">
                    <div className="flex items-center gap-2">
                      <Image src="/assets/icons/calendar.svg" className="w-[25px] h-[25px]" width={38} height={38} alt=""/>
                      {bootcamp.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Image src="/assets/icons/send.svg" className="w-[25px] h-[25px]" width={38} height={38} alt=""/>
                      {bootcamp.type}
                    </div>
                  </div>
                </div>
                <div className="p-2 pt-0">
                  <div className="w-full space-y-4">
                    { bootcamp.sponsor_logo && <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Sponsors:</span>
                      <Image 
                        src={bootcamp.sponsor_logo} 
                        alt="Sponsor logo" 
                        width={100} 
                        height={30} 
                        className="h-[20px] invert w-auto object-contain"
                      />
                    </div>}
                    <Link
                      href="#"
                      className="block w-full text-center font-medium rounded-full py-2 px-4 bg-primary hover:bg-red-900 text-white transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-right font-lato text-black">
          <Link
            href="#"
            className="inline-flex items-center gap-2 hover:text-red-900 font-medium"
          >
            See all
            <Image src="/assets/icons/arrow_right_bg.svg" className="w-[25px] h-[25px]" width={38} height={38} alt=""/>
          </Link>
        </div>
      </div>
    </section>
  );
}
