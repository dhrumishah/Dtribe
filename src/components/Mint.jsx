import Logo from "./../assets/logo.png";
const Mint = () => {
  return (
    <div className="flex flex-col h-screen relative">
      <div className="bg-[#121212] items-center fixed w-full h-[15vh] flex flex-row justify-between pt-4 px-4 md:pt-8 lg:px-24">
        <div className="py-6">
          <img
            src={Logo}
            className="h-[80px] animate__animated animate__fadeInDown"
            alt="logo"
          />
        </div>
        <div className="">
          <button className="text-white bg-transparent rounded-lg border-2 border-white mx-auto text-2xl px-4 py-2 font-bold hover:bg-white hover:text-black">
            Connect Wallet
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full items-center absolute top-[50%]">
        <div className="flex flex-row gap-4 items-center">
          <button className="text-black bg-[#9BA1A7] px-4 py-1 text-3xl hover:bg-[#888e94] w-fit rounded-lg">
            +
          </button>
          <input className="border-1 border-[#9BA1A7] bg-white rounded-md text-black p-2" />
          <button className="text-black bg-[#9BA1A7] hover:bg-[#888e94] px-4 py-1 text-3xl w-fit rounded-lg">
            -
          </button>
        </div>
        <div className="flex justify-center">
          <button className="text-black bg-[#9BA1A7] px-12 py-3 text-3xl hover:bg-white w-fit rounded-lg">
            MINT
          </button>
        </div>
        <div className="flex justify-center">
          <p className="text-2xl text-[#cbcdcf] font-semibold">
            Supply left:{" "}
            <span className="text-2xl font-normal text-white">200/10000</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mint;
