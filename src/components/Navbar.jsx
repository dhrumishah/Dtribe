import { navLinks } from "./navLinks";
import Menu from "./../assets/menu.svg";
import Logo from "./../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "animate.css";

const Nabvar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigateTo = useNavigate();

  const goToMintPage = () => {
    navigateTo("/mint");
  };

  const openToggle = () => {
    setIsOpen(true);
  };
  const closeToggle = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {!isOpen ? (
        <nav>
          <div className="bg-[#121212] relative flex flex-row justify-between px-4 md:pt-8 lg:px-24">
            <div className="py-6">
              <img
                src={Logo}
                className="h-[80px] animate__animated animate__fadeInDown"
                alt="logo"
              />

              <img
                src={Menu}
                alt="Menu"
                className="top-0 right-0 absolute mr-4 mt-9 w-8 lg:hidden flex hover:cursor-pointer"
                onClick={openToggle}
              />
            </div>

            <div className="hidden lg:flex">
              <ul className="list-none sm:flex gap-12 items-center text-center">
                {navLinks.map(({ link, title, id }) => (
                  <a
                    href={link}
                    className={`hover:text-gray-400 ${
                      window.location.pathname === link
                        ? "text-[#EDEDED] underline"
                        : "text-gray-500"
                    }`}
                    key={id}
                  >
                    <span className="text-sm">{title}</span>
                  </a>
                ))}
                <button
                  className="text-black bg-[#9BA1A7] py-3 px-8 font-bold hover:bg-white"
                  onClick={goToMintPage}
                >
                  MINT
                </button>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <div className=" fixed right-0 z-10">
          <div class="flex flex-col w-screen h-screen justify-start  items-center bg-[#EDEDED] overflow-auto">
            <div className="flex flex-row justify-between w-full items-center p-4 bg-[#EDEDED]">
              <img src={Logo} className="h-[80px]" alt="" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                onClick={closeToggle}
                className="w-12 h-12 bg-[#EDEDED] -mt-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className=" mt-28">
              <ul className="list-none flex flex-1 flex-col bg-[#EDEDED]">
                {navLinks.map(({ id, link, title }) => (
                  <a
                    href={link}
                    onClick={closeToggle}
                    className={`font-bold mb-8 cursor-pointer bg-[#EDEDED] text-center ${
                      window.location.pathname === link
                        ? "text-black"
                        : "text-[#9BA1A7]"
                    }`}
                    key={id}
                  >
                    <span className="bg-[#EDEDED] text-3xl tracking-widest">
                      {title}
                    </span>
                  </a>
                ))}
                <button
                  className="text-black bg-white mx-auto tracking-widest text-3xl px-2 py-4 mb-8 font-bold"
                  onClick={goToMintPage}
                >
                  MINT
                </button>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nabvar;
