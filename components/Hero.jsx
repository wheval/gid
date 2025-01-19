import Image from "next/image";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { SiGooglemeet } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pt-20 text-white relative min-w-full h-screen max-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/blurbg.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-neutral-950/50"></div>
      </div>

      {/* Foreground Images */}
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex items-center gap-8 my-10">
          <Image
            src="/assets/gidaLogo.svg"
            width={5000}
            height={5000}
            alt="Foreground Image 2"
            className="w-28 hidden md:inline-block"
          />
          <span className="hidden md:inline-block">X</span>
          <Image
            src="/assets/starknet.svg"
            width={5000}
            height={5000}
            alt="Foreground Image 2"
            className="w-28"
          />
        </div>
        <Image
          src="/assets/gidaxstark.png"
          width={500}
          height={500}
          alt="Foreground Image 1"
          className="mb-4 w-[300px] md:w-[500px] "
        />
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 max-w-3xl text-xs capitalize">
          <div className="bg-[#101114] rounded-md px-6 md:px-8 py-3 md:py-4 hover:bg-[#1a1b1f] hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg">
            Mentorship Opportunities
          </div>
          <div className="bg-[#101114] rounded-md px-6 md:px-8 py-3 md:py-4 hover:bg-[#1a1b1f] hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg">
            Understand Rust And Cairo
          </div>
          <div className="bg-[#101114] rounded-md px-6 md:px-8 py-3 md:py-4 hover:bg-[#1a1b1f] hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg">
            learn web3/blockchain development
          </div>
          <div className="bg-[#101114] rounded-md px-6 md:px-8 py-3 md:py-4 hover:bg-[#1a1b1f] hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg">
            Hybrid - virtual classes & physical meet ups
          </div>
          <div className="bg-[#101114] rounded-md px-6 md:px-8 py-3 md:py-4 hover:bg-[#1a1b1f] hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg">
            Network with fellow developers and build projects
          </div>
        </div>
        <div className="text-sm md:text-base bg-black flex items-center justify-center w-full text-center py-4 mt-12 gap-8">
          <div className="flex items-center gap-2">
            <MdOutlineCalendarMonth className="inline ml-2" />
            <span>14th Jan - 14th Feb 2025</span>
          </div>

          <div className="flex items-center gap-2">
            <CiLocationOn />
            <span>
              Virtual <SiGooglemeet className="inline  mx-1 text-red-500" /> and
              <FaYoutube className="inline text-red-500 ml-2" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
