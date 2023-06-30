import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import HomePage from "./Home";
import Security from "./Security";
import Faq from "./Faq";
import Nabvar from "./Navbar";

const Layout = () => {
  const [count, setCount] = useState(0.0);

  useEffect(() => {
    const targetCount = 100.0;
    const duration = 1000;
    const increment = (targetCount - count) / (duration / 10);

    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + increment;

        if (newCount >= targetCount) {
          clearInterval(interval);
          return targetCount;
        }

        return newCount;
      });
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="flex h-screen flex-col">
      {count < 100.0 && window.location.pathname === "/home" ? (
        <div className="w-full flex-col gap-4 h-screen text-white items-center flex justify-center bg-black">
          <h4 className="text-4xl text-[#9BA1A7] font-bold">
            {count.toPrecision(4)} %
          </h4>
        </div>
      ) : (
        <div>
          <Nabvar />
          {window.location.pathname === "/home" && <HomePage />}
          {window.location.pathname === "/security" && <Security />}
          {window.location.pathname === "/faq" && <Faq />}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;
