import React, { useState } from "react";
import NavbarLanding from "./NavbarLanding";
import Caution from "./Caution";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleComponent = () => {
    setIsOpen(!isOpen);
  };

  return (
    // object-fill
    <div className="p-12 bg-landingSmall md:bg-landingMedium lg:bg-landing bg-cover bg-no-repeat min-h-screen">
      <NavbarLanding />
      <div className="flex flex-col lg:flex-row bg-transparent h-[80vh] md:h-[70vh] lg:h-[50vh] my-auto items-center justify-around flex-wrap lg:justify-between relative mx-4 lg:ml-12 lg:mr-48 mt-0 md:mt-6 ">
        <h1 className="text-white bg-transparent font-bold lg:text-5xl md:text-4xl text-3xl ">
          Embrace the call <br />
          of our tribe, unite.
        </h1>

        <button class="btn-4 button1 lg:mt-0" onClick={toggleComponent}>
          <span className="span1">
            <div className="-rotate-45 hover:text-white">LAUNCH</div>
          </span>
        </button>
      </div>
      {isOpen && <Caution toggleComponent={toggleComponent} />}
    </div>
  );
};

export default LandingPage;
