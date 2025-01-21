import Image from "next/image"
import Link from "next/link"

const UpcomingEvents = () => {
return (
    <div className="px-4 sm:px-8 py-8 sm:py-16 text-white bg-red-800">
            <div className="max-w-screen-2xl mx-auto flex flex-col gap-10 sm:gap-20 mb-10 sm:mb-20 items-center justify-center">
                    <div className="text-center">
                            <h3 className="font-semibold text-[1.5rem] sm:text-[2rem] lg:text-[3.125rem]">
                                    Upcoming Events
                            </h3>
                            <p className="font-lato text-sm sm:text-base lg:mt-[-20px] lg:text-[1.5rem] lg:w-[55ch] tracking-tighter capitalize">See all our events tailored to help you accelerate faster in your tech journey</p>
                    </div>
                    <Link href="/chainup">
                        <div className="relative scale-90 sm:scale-100">
                            <div className="w-full shadow-sm max-w-full lg:max-w-[850px] rounded-[28px] relative z-30 overflow-hidden flex flex-col items-center justify-center">
                                    <Image src="/assets/chain-up-roadshows-all-city.png" className="max-w-full w-full" width={800} height={600} alt="" />
                                    <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-12 bg-white text-black px-4 py-3 lg:px-4 lg:py-4 min-w-full">
                                            <div className="m-0 p-0 flex flex-col gap-1 lg:gap-4">
                                                    <p className="uppercase font-semibold m-0 text-xl sm:text-[2.5rem]">Chain Up Roadshows</p>
                                                    <p className="text-sm sm:text-[1.1rem] sm:w-[45ch] tracking-tight leading-snug text-black/60 font-lato">
                                                            The ChainUp Roadshows are series of events aimed at educating, engaging and empowering blockchain enthusiasts across 5 key cities in Nigeria - Kaduna, Ibadan, Benin City, Anambra, & Enugu
                                                    </p>
                                            </div>
                                            <div className="flex flex-col gap-2 justify-between min-h-full">
                                                    <div className="flex items-center justify-between gap-2 lg:gap-4 w-full">
                                                            <div className="flex flex-col justify-between lg:gap-4">
                                                                    <p className="font-lato text-sm sm:text-[1.1rem] text-gray-500">Mission</p>
                                                                    <p className="font-abhaya text-2xl sm:text-[3.125rem]">1</p>
                                                            </div>
                                                            <div className="flex flex-col justify-between lg:gap-4">
                                                                    <p className="font-lato text-sm sm:text-[1.1rem] text-gray-500">Cities</p>
                                                                    <p className="font-abhaya text-2xl sm:text-[3.125rem]">5</p>
                                                            </div>
                                                            <div className="flex flex-col justify-between lg:gap-4">
                                                                    <p className="font-lato text-sm sm:text-[1.1rem] text-gray-500">Attendees</p>
                                                                    <p className="font-abhaya text-2xl sm:text-[3.125rem]">500+</p>
                                                            </div>
                                                    </div>
                                                    <div className="flex justify-end w-full">
                                                            <Link href="/events" ><button className="bg-primary rounded-full px-4 font-lato py-1 hover:bg-red-600 font-semibold text-white text-sm sm:text-base">See All Events</button></Link>
                                                    </div>
                                            </div>
                                    </div>
                            </div>
                            <div className="absolute bg-[#F8F8F8] w-full h-[88%] shadow-sm sm:w-[800px] sm:h-[500px] z-20 rounded-[10px] top-[18%] left-[-3%]"></div>
                            <div className="absolute bg-[#EDEDED] w-full h-[84%] shadow-sm sm:w-[800px] sm:h-[470px] z-10 rounded-[15px] top-[28%] left-[-6%]"></div>
                            <div className="absolute bg-[#FFFFFF] hidden sm:block shadow-sm w-full h-[70%] sm:w-[800px] sm:h-[440px] z-0 rounded-[15px] top-[38%] left-[-9%]"></div>
                        </div>
                    </Link> 
            </div>
    </div>
)
}

export default UpcomingEvents