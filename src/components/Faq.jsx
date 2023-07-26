import React from "react";

const Faq = () => {
  return (
    <div className="bg-[#121212] h-fit w-full text-white md:pt-36 md:pb-20 lg:pt-2 lg:px-24">
      <div className="md:pt-4 mx-4 md:mx-4 lg:mx-8 pb-20">
        <h1 className="font-bold text-5xl text-white">FAQs</h1>
        <ul className="text-[#9BA1A7] list-none list-inside mt-4 text-xl">
          <li className="mt-9">Q: What is the mint price?</li>
          <li className="mt-2 text-white">A: 0.0088 Eth</li>
          <li className="mt-8">
            Q: Is there a roadmap or utility for this project?
          </li>
          <li className="mt-2 text-white">
            A: Absolutely no. These are just cool looking monkey pictures that
            you can use as your profile picture.
          </li>
          <li className="mt-8">Q: Is there a discord?</li>
          <li className="mt-2 text-white">
            Yes. But due to security reasons, we will launch it only after the
            sale period ends.
          </li>
          <li className="mt-8">Q: What are the secondary royalties?</li>
          <li className="mt-2 text-white">A: 5% </li>
          <li className="mt-8">Q: Can holders use their NFTs commercially?</li>
          <li className="mt-2 text-white">
            A: Yes, holders are licensed to use their NFTs commercially.{" "}
          </li>
          <li className="mt-8">Q: How many NFTs are reserved by the team?</li>
          <li className="mt-2 text-white">
            A: 50 NFTs have been set aside for the team and future giveaways.
          </li>
          <li className="mt-8">Q: Will the NFTs be revealed instantly?</li>
          <li className="mt-2 text-white">A: Yes.</li>
          <li className="mt-8">Q: How can I contribute?</li>
          <li className="mt-2 text-white">
            A: Please contact us through twitter or visit our discord once it
            opens.
          </li>
        </ul>
      </div>
      <div className="bg-[#121212] h-10"></div>
    </div>
  );
};

export default Faq;
