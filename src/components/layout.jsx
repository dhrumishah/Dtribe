import React from "react";
import Footer from "./Footer";
import HomePage from "./Home";
import Security from "./Security";
import Faq from "./Faq";
import Nabvar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex h-screen flex-col">
      <div>
        <Nabvar />
        {window.location.pathname === "/" && <HomePage />}
        {window.location.pathname === "/security" && <Security />}
        {window.location.pathname === "/faq" && <Faq />}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
