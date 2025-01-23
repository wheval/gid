import React from "react";
import ChainUpHeroBg from "../../../public/assets/chain-up-hero-bg.png";
import ChainUpRoadshows from "../../../public/assets/chainup/chainup-header.jpg";
import { MdLocationPin } from "react-icons/md";
import Image from "next/image";
import RegisterPopup from "./RegisterPopup";

const Hero = () => {
  return (
    <div className="relative w-full h-fit p-2 lg:p-10">
      <div 
        className="absolute top-0 left-0 w-full h-full blur-[4px] bg-cover bg-center"
        style={{ backgroundImage: `url(${ChainUpHeroBg.src})` }}
      ></div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full space-y-6 lg:space-y-0 lg:pt-20">
        <div className="text-white text-center lg:text-left p-6 mt-10 lg:mt-64">
          <h2 className="text-white pt-40 md:pt-0  text-4xl lg:text-5xl font-[550]">
            Chain Up Roadshows
          </h2>

          <div className="mt-10 flex flex-wrap justify-center lg:justify-start max-w-sm text-lg">
            {["Ibadan", "Kaduna", "Benin", "Anambra", "Enugu"].map(
              (location, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start">
                  <MdLocationPin className="text-white mr-2" />
                  <span className="text-white text-lg md:text-[1.7rem] pb-2 font-lato pr-4">
                    {location}
                  </span>
                </div>
              )
            )}
          </div>
          <div className="mx-auto text-center lg:text-left lg:mt-10">
            <RegisterPopup
              className=""
              buttonClassName="bg-[#A20812] hover:text-[#A20812] hover:outline-[#A20812]"
            />
          </div>
        </div>

        <div className="text-center lg:text-left w-fit lg:w-[40%] p-6 rounded-lg">
          <ChainUpRoadShowsCard />
        </div>
      </div>
    </div>
  );
};

const ChainUpRoadShowsCard = () => {
  return (
    <div className="w-full bg-white rounded-3xl p-4 md:p-8 shadow-lg overflow-hidden transition-transform transform">
      <div className="relative w-full h-56">
        <Image
          src={ChainUpRoadshows}
          alt="chain-up-hero-bg"
          layout="fill"
          objectFit="cover"
          className="rounded-3xl"
        />
      </div>

      <div className="pt-6">
        <h3 className="text-xl font-[550] uppercase text-gray-900">
          CHAIN UP ROADSHOWS
        </h3>
        <p className="text-gray-600 mt-4 font-lato text-lg">
          Learn, network, scale and create impactful solutions.
        </p>

        <div className="mt-6 flex justify-between gap-8">
          <div className="flex flex-col items-center w-full sm:w-auto">
            <p className="text-gray-400">Mission</p>
            <h2 className="text-black font-semibold text-4xl font-[family-name:var(--font-abhaya-libre)]">
              1
            </h2>
          </div>

          <div className="flex flex-col items-center w-full sm:w-auto">
            <p className="text-gray-400">Cities</p>
            <h2 className="text-black font-[family-name:var(--font-abhaya-libre)] font-semibold text-4xl">
              5
            </h2>
          </div>

          <div className="flex font-[family-name:var(--font-abhaya-libre)] flex-col items-center w-full sm:w-auto">
            <p className="text-gray-400">Attendees</p>
            <h2 className="text-black font-semibold text-4xl">500+</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
