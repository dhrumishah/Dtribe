import React from "react";
import MainImage from "./../assets/home_01.svg";

const HomePage = () => {
  return (
    <div className="bg-[#121212] h-fit w-full md:h-fit lg:h-fit -mt-[1px] pb-16 md:pb-40 md:pt-16 lg:pt-0 lg:px-24">
      <div className="justify-center lg:pt-2 mx-2 lg:mx-6 lg:w-[600px]">
        <p className="p-2 text-2xl text-[#EDEDED] leading-9">
          Dtribe is a stunning collection of 10,000 unique digital collectibles
          or NFTs programmatically generated from 200 plus possible traits. Our
          NFTs are stored as ERC 721 tokens on the Ethereum blockchain and
          hosted on IPFS. Own a piece and join forces with fellow tribe members.
          No roadmap, just vibes...
        </p>
      </div>
      <div className="mx-4 md:mx-6 pb-8">
        <img src={MainImage} className="w-full" alt="Home" />
      </div>
    </div>
  );
};

export default HomePage;
