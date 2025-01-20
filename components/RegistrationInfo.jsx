import Image from "next/image";
import Link from "next/link";
import Countdown from "./Countdown";

const RegistrationInfo = () => {
  return (
    <section>
      <div className="bg-[#BD1522] w-full flex justify-evenly items-center py-16 flex-col md:flex-row">
        <div className="font-bold text-center text-white">
          <div className=" text-2xl md:text-5xl">000</div>
          <div className="text-lg">Registrants</div>
        </div>
        <div className="text-gray-400 hidden md:block">|</div>
        <div className="text-gray-400 block md:hidden">___</div>
        <Countdown /> 
        <div className="text-gray-400 hidden md:block">|</div>
        <div className="text-gray-400 block md:hidden">___</div>
        <Link
          href="/register"
          className="bg-white rounded-full px-12 md:px-28 py-2 md:py-3 text-[#BD1522] font-bold text-base md:text-lg mt-4 md:mt-0"
        >
          Register
        </Link>
      </div>
      <div className="bg-white text-black flex items-center justify-between p-8 lg:p-12 flex-col lg:flex-row gap-12 font-[400]">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-6">Bootcamp Overview</h1>
          <div className="text-sm md:text-xl text-justify">
            <p className="mb-4">
              GIDA in collaboration with Starknet Foundation presents an
              exciting Web3 developer Bootcamp opportunity for you to learn
              everything there about building Web3 apps on Starknet using Cairo
              for FREE.
            </p>
            <p className="mb-4">
              This program is mainly for existing developers, either Web2 (HTML,
              CSS, Js, React, Node, etc) or Web3 (Solidity, Rust), or just
              anyone who has some coding knowledge and looking to navigate
              further into Web3/blockchain development.
            </p>
            <p>
              It runs for 8 weeks and we will have weekly IRL meetups for
              learners every weekend in several cities where we have more
              attendees domiciled in, for a collaborative learning experience.
              Classes holds online/virtually 2 times a week (Mondays &
              Wednesdays) only, with an assignment given every Friday.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 flex-1">
          <Image
            src="/assets/cairo.png"
            width={2000}
            height={2000}
            alt="hero"
            className="w-full rotate-12 scale-75 md:scale-100"
          />
        </div>
      </div>
    </section>
  );
};
export default RegistrationInfo;
