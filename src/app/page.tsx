import React from "react";
import Hero from "./components/Hero";
import PartnersBand from "./components/PartnersBand";
import About from "./components/About";
import Information from "./components/Information";
import TechnologyPage from "./components/TechnologyPage"

const page = () => {
  return (
    <>
    <Hero />
    <PartnersBand />
    <About />
    <Information />
    <TechnologyPage />
    </>
  );
};

export default page;
