import React from "react";
import Hero from "./components/Hero";
import PartnersBand from "./components/PartnersBand";
import About from "./components/About";
import Information from "./components/Information";
import TechnologyPage from "./components/TechnologyPage"
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import NewsUpdate from "./components/NewsUpdate";

const page = () => {
  return (
    <>
    <Hero />
    <PartnersBand />
    <About />
    <Information />
    <TechnologyPage />
    <Page1 />
    <Page2 />
    <Page3 />
    <div className="bg-white py-5">
    <NewsUpdate />
    </div>
    </>
  );
};

export default page;
