import React from "react";
import BlockchainUniNigeriaSvg from "../../../public/assets/blockchain_unniversity_nigeria.svg";
import AnambraTechiesSvg from "../../../public/assets/anambra_techies.svg";
import UnizikBlockchainLabSvg from "../../../public/assets/unizik_blockchain_lab.svg";
import StarknetAfricaSvg from "../../../public/assets/starknet_africa.svg";
import BlockchainLautechSvg from "../../../public/assets/blockchain_lautech.svg";
import BlockchainClubUnibenSvg from "../../../public/assets/blockchain_club_uniben.svg";
import Web3NigeriaSvg from "../../../public/assets/web3_nigeria.svg";
import BlockHeaderWeb3Svg from "../../../public/assets/blockheader_web3.svg";
import GoogleDeveloperGroupsSvg from "../../../public/assets/google_developer_clubs.svg";
import Patner2 from "../../../public/assets/chainup/patner2.png";
import Patner3 from "../../../public/assets/chainup/patner3.jpg";
import WomenDefi1 from "../../../public/assets/chainup/women-defi-1.svg";
import WomenDefi2 from "../../../public/assets/chainup/women-defi-2.svg";
import Image from "next/image";

const Partners = () => {
  const partners = [
    { name: "BlockchainUniNigeriaSvg", url: BlockchainUniNigeriaSvg },
    { name: "WomenDefi1", url: WomenDefi1 },
    { name: "AnambraTechiesSvg", url: AnambraTechiesSvg },
    { name: "UnizikBlockchainLabSvg", url: UnizikBlockchainLabSvg },
    { name: "StarknetAfricaSvg", url: StarknetAfricaSvg },
    { name: "BlockchainLautechSvg", url: BlockchainLautechSvg },
    { name: "BlockchainClubUnibenSvg", url: BlockchainClubUnibenSvg },
    { name: "Web3NigeriaSvg", url: Web3NigeriaSvg },
    { name: "BlockHeaderWeb3Svg", url: BlockHeaderWeb3Svg },
    { name: "GoogleDeveloperGroupsSvg", url: GoogleDeveloperGroupsSvg },
    { name: "Patner2", url: Patner2 },
    { name: "Patner3", url: Patner3 },
    { name: "WomenDefi2", url: WomenDefi2 },
  ];
  return (
    <div className="text-center">
      <h1 className="font-semibold text-2xl m-10">Our Partners</h1>

      <div className="flex flex-wrap justify-center items-center m-10 p-5">
        {partners.map((partner) => {
          return (
            <Image
              src={partner.url}
              alt={partner.name}
              width={"10px"}
              height={"10px"}
              className="p-5 w-40"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
