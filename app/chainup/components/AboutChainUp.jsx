import React from 'react';
import Image from 'next/image';
import AboutChainUpImg from '../../../public/assets/about-chain-up.png';

const AboutChainUp = () => {
    return (
        <div className="flex flex-col space-between p-2 md:p-20 md:flex-row bg-[#FAB622]">
            <div className="relative w-full h-64 md:px-10">
                <Image
                    src={AboutChainUpImg}
                    alt="about-chain-up"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-3xl p-3"
                />
            </div>

            <div className="about-chain-up md:px-10">
                <h2 className="font-bold">Chain Up</h2>
                
                <p>The GIDA Chain-Up Roadshows are a series of blockchain-focused events aimed at educating, engaging and empowering blockchain enthusiasts across 5 cities in Nigeria - Kaduna, Ibadan, Benin City, Anambra and Enugu.</p>
                <br />
                
                <p>The event offers you a chance to network with techies, blockchain enthusiasts and like-minded individuals, and we would provide you with a scholarship opportunity to learn the skill of Blockchain/Web3 development on Starknet through our 8 weeks Cairo bootcamp happening few weeks after the event.</p>
                <br />
                
                <p>Anyone can attend - both Technical and non-technical people alike.. Whether you’re just starting out on your blockchain journey, Into the ecosystem already or a Pro, you’re welcome!</p>
                <br />

                <button className="bg-black text-white font-semibold rounded-full p-3 transition-all hover:bg-white hover:text-black hover:outline hover:outline-2 hover:outline-black">Register</button>
            </div >
        </div >
    )
}

export default AboutChainUp;