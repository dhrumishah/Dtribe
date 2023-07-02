import React from "react";
import Logo from "./../assets/logo.png";

const Mint = () => {
  return (
    <>
      <nav>
        <div className="bg-[#121212] items-center relative flex flex-row justify-between px-4 md:pt-8 lg:px-24">
          <div className="py-6">
            <img
              src={Logo}
              className="h-[80px] animate__animated animate__fadeInDown"
              alt="logo"
            />
          </div>
          <div className="">
            <button className="text-white bg-transparent border-2 border-white mx-auto text-2xl px-4 py-2 font-bold hover:bg-white hover:text-black ">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
      <div className="flex flex-col gap-6 items-center justify-center h-full w-full">
        <button className="text-black bg-[#9BA1A7] px-4 py-2 text-3xl hover:bg-white">
          MINT
        </button>
        <p className="text-2xl text-gray-200">Left supply: 29572</p>
      </div>
    </>
  );
};

export default Mint;
