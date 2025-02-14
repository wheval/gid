import Image from "next/image"
import { teamSocials } from "../utils/constants"
import { H2 } from "@/components/ui/typography"

const TeamSection = () => {
return (
    <div className="w-full py-12 px-8 lg:py-16 lg:px-20 bg-[#EDF0FC] relative">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[rgba(247,195,56,0.5)] to-[rgba(255,75,89,0.5)] blur-[190px]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[rgba(247,195,56,0.5)] to-[rgba(255,75,89,0.5)] blur-[190px]"></div>
            <div className="max-w-screen-2xl mx-auto text-center relative z-10">
                    <H2 className="text-black">MEET THE TEAM</H2>
                    <p className="font-lato lg:text-[1.5rem] mb-10">Get familiar with the power house making things happen at GIDA</p>
                    <div className="flex md:flex-row md:flex-wrap xl:flex-nowrap flex-col gap-6 justify-between items-center">
                            {
                                    teamSocials.map((teamMember) => (
                                            <MemberCard key={teamMember.name} {...teamMember} />
                                    ))
                            }
                    </div>
                    <div className="flex justify-center lg:justify-end mt-8">
                            <div className="flex flex-col gap-2 items-center justify-center">
                                    <Image src="/assets/team/others.png" className="w-[150px] h-auto lg:w-[277px]" alt="" width={277} height={57} />
                                    <div className="flex items-center justify-center gap-2 text-primary">
                                            <p className="lg:text-[1.25rem]">Meet the rest of us</p>
                                            <Image src="/assets/icons/arrow_right.svg" width={10} height={5} alt="" />
                                    </div>
                            </div>
                    </div>        
            </div>
    </div>
)
}

export default TeamSection


const MemberCard = ({name, role, image, socials}) => {
    return (
    <div className="rounded-[40px] bg-accent relative overflow-hidden h-[400px] md:max-h-[600px] md:h-[550px]">
        <Image src={`/assets/team/${image}`} className="relative z-20" alt={`${name}'s photo`} width={487} height={600} />
        <Image src="/assets/icons/bg_box.svg" className="absolute top-[-6%] left-[-5%] z-10" alt="" width={483} height={374} />
        <div className="absolute bottom-0 bg-primary flex flex-col items-center z-30 gap-2 w-full px-2 pt-1 pb-4 text-white">
            <p className="uppercase text-[1.275rem] xl:text-[1.75rem] font-semibold">{name}</p>
            <img alt="" src="/assets/icons/long_line.svg" width={324} />
            <p className="font-lato font-semibold lg:text-[1.25rem]">{role}</p>
            <img alt="" src="/assets/icons/short_line.svg" width={201} />
            <div className="flex items-center justify-center gap-2">
                <a target="_blank" rel="noopener noreferrer" href={`https://x.com/${socials.x}`}>
                    <Image src="/assets/icons/x.svg" alt="X/Twitter" width={30} height={30} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href={`https://t.me/${socials.tg}`}>
                    <Image src="/assets/icons/tg.svg" alt="Telegram" width={30} height={30} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href={`https://linkedin.com/in/${socials.ln}`}>
                    <Image src="/assets/icons/ln.svg" alt="LinkedIn" width={30} height={30} />
                </a>
            </div>
        </div>
    </div>
    )
}