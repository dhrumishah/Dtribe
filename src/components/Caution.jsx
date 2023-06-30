import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Caution = ({ toggleComponent }) => {
  const navigateTo = useNavigate();
  const redirectHomePage = () => {
    navigateTo('/home');
  };
  return (
    <div className="text-white z-40">
      <div
        aria-modal="true"
        role="dialog"
        className="fixed inset-0 overflow-y-auto z-modal"
      >
        <div className="flex min-h-screen items-center justify-center px-4">
          <div className="opacity-100" onClick={toggleComponent}>
            <div className="fixed inset-0 bg-black opacity-50"></div>
          </div>
          <div className="my-8 inline-block min-w-full transform text-left transition-all md:min-w-[420px] shadow-lg p-0 bg-black w-[800px] !overflow-visible opacity-100">
            <div className="flex flex-col border-2 border-[#9BA1A7] px-6 py-4 ">
              <h1 className="text-4xl font-bold">CAUTION!</h1>
              <p className="text-xl mt-2">
                Stay vigilant against phishing attempts.
              </p>
              <ul className="text-[#9BA1A7] mt-4 text-lg">
                <li className="mt-4">
                  &#9670; We will never drop a surprise or stealth mint.
                </li>
                <li className="mt-4">
                  &#9670; Our official giveaways will never request anyone to
                  visit a website and interact with their wallet.
                </li>
                <li className="mt-4">
                  &#9670; We will never tag or message anyone with links or
                  attachments.
                </li>
              </ul>
              <p className="text-lg text-white mt-8">
                To learn more, visit our security section.
              </p>
              <div className="flex flex-row mt-6 gap-2">
                <button
                  type="button"
                  className="text-[#9BA1A7] border-2 border-[#9BA1A7] hover:border-white hover:text-white hover:underline font-bold  text-sm px-8 py-2.5 text-center mb-2"
                  onClick={toggleComponent}
                >
                  DECLINE
                </button>
                <button
                  type="button"
                  className="text-black font-bold bg-[#9BA1A7] text-sm px-8 py-2.5 mr-2 mb-2 hover:bg-transparent hover:bg-white hover:underline"
                  onClick={redirectHomePage}
                >
                  ENTER SITE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caution;
