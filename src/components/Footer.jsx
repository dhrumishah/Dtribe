import React from "react";
import Twitter from "./../assets/twitter.svg";
import Discord from "./../assets/discord.svg";
import Etherscan from "./../assets/etherscan-grey.svg";
import Vector from "./../assets/vector.svg";
const Footer = () => {
  return (
    <div className="w-full h-fit md:-mt-[1px] text-white bg-[#121212] px-12 pb-16 pt-12 md:pt-0 lg:pt-24 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
        <div className="flex flex-row items-center gap-8">
          <a href="https://twitter.com/DtribeNFT?t=yV2GKQL9b0wMWGHuHcJVqA&s=08">
            <img src={Twitter} />
          </a>
          <a href="#">
            <img src={Discord} />
          </a>
          <a href="https://etherscan.io/address/0x6bb33c67ba6314d1cf9a7732e0fc8ca4b1a0dc5a">
            <img src={Etherscan} alt="" />
          </a>
          <a href="https://opensea.io/collection/dtribenft">
            <img src={Vector} alt="" />
          </a>
        </div>
        <div className="items-center text-center justify-center">
          <p className="text-[#9BA1A7] font-bold text-sm">
            All Rights Reserved © 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
