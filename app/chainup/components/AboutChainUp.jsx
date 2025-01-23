import React from "react";
import Image from "next/image";
import AboutChainUpImg from "../../../public/assets/about-chain-up.png";
import BackgroundDesign from "../../../public/assets/chainup/background-design.png";
import RegisterPopup from "./RegisterPopup";

const AboutChainUp = () => {
  return (
    <div className="flex flex-col space-between p-10 lg:p-20 md:flex-row bg-[#FAB622]">
      <h2 className="font-bold text-4xl block md:hidden">Chain Up</h2>

      <div className="w-full md:min-w-[48%]">
        <Image
          src={AboutChainUpImg}
          alt="about-chain-up"
          objectFit="cover"
          className="rounded-3xl p-3 w-full"
        />
      </div>
      {/* Div with background image */}
      <div
        className="about-chain-up md:px-10 pt-12 md:pt-0 text-justify"
        style={{
          backgroundImage: `url(${BackgroundDesign.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="font-bold text-4xl  hidden md:block">Chain Up</h2>

        <p>
          The GIDA Chain-Up Roadshows are a series of blockchain-focused events
          aimed at educating, engaging and empowering blockchain enthusiasts
          across 5 cities in Nigeria - Kaduna, Ibadan, Benin City, Anambra and
          Enugu.
        </p>
        <br />

        <p>
          The event offers you a chance to network with techies, blockchain
          enthusiasts and like-minded individuals, and we would provide you with
          a scholarship opportunity to learn the skill of Blockchain/Web3
          development on Starknet through our 8 weeks Cairo bootcamp happening
          few weeks after the event.
        </p>
        <br />

        <p>
          Anyone can attend - both Technical and non-technical people alike..
          Whether you’re just starting out on your blockchain journey, Into the
          ecosystem already or a Pro, you’re welcome!
        </p>
        <br />
        <RegisterPopup
          className=""
          buttonClassName="bg-black hover:text-black hover:outline-black"
        />
      </div>
    </div>
  );
};

export default AboutChainUp;
