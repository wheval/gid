import React from 'react';
import ChainUpHeroBg from '../../../public/assets/chain-up-hero-bg.png';
import ChainUpRoadshows from '../../../public/assets/chain-up-roadshows.png';
import { MdLocationPin } from 'react-icons/md';
import Image from 'next/image';

const Hero = () => {
    return (
        <div
            className="bg-cover bg-center h-screen w-full"
            style={{ backgroundImage: `url(${ChainUpHeroBg.src})` }}
        >
            <div className="flex flex-col lg:flex-row items-center justify-center h-full space-y-6 lg:space-y-0 lg:space-x-32">
                <div className="text-center text-white lg:text-left w-fit p-6 mt-50 lg:w-[30%]">
                    <h2 className="text-white text-3xl font-bold">Chain Up Roadshows</h2>

                    <div className="mt-10 flex flex-wrap justify-center lg:justify-start space-x-4">
                        {['Ibadan', 'Kaduna', 'Benin', 'Anambra', 'Enugu'].map((location, index) => (
                            <div key={index} className="flex items-center justify-center lg:justify-start">
                                <MdLocationPin className="text-white mr-2" />
                                <span className="text-white">{location}</span>
                            </div>
                        ))}
                    </div>

                    <button className="mt-5 w-[70%] bg-[#A20812] hover:bg-white hover:text-[#A20812] hover:outline hover:outline-2 hover:outline-[#A20812] text-white font-semibold py-2 px-4 rounded-[2rem] transition-all">
                        Register
                    </button>
                </div>

                <div className="text-center lg:text-left w-fit lg:w-[30%] p-6 rounded-lg">
                    <ChainUpRoadShowsCard />
                </div>
            </div>
        </div>
    );
};

const ChainUpRoadShowsCard = () => {
    return (
        <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform">
            <div className="relative w-full h-64">
                <Image
                    src={ChainUpRoadshows}
                    alt="chain-up-hero-bg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-3xl p-3"
                />
            </div>

            <div className="p-8">
                <h3 className="text-2xl font-bold uppercase text-gray-900">CHAIN UP ROADSHOWS</h3>
                <p className="text-gray-600 mt-4">Learn, network, scale and create impactful solutions.</p>

                <div className="mt-6 flex justify-between gap-8">
                    <div className="flex flex-col items-center w-full sm:w-auto">
                        <p className="text-gray-400">Mission</p>
                        <h2 className="text-black font-semibold text-lg">1</h2>
                    </div>

                    <div className="flex flex-col items-center w-full sm:w-auto">
                        <p className="text-gray-400">Cities</p>
                        <h2 className="text-black font-semibold text-lg">5</h2>
                    </div>

                    <div className="flex flex-col items-center w-full sm:w-auto">
                        <p className="text-gray-400">Attendees</p>
                        <h2 className="text-black font-semibold text-lg">500+</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
