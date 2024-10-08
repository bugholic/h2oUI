import React from "react";
import Hero from "./components/Hero";
import PartnersBand from "./components/PartnersBand";
import About from "./components/About";
import Information from "./components/Information";
import TechnologyPage from "./components/TechnologyPage";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import NewsUpdate from "./components/NewsUpdate";

const page = () => {
  return (
    <>
      <div className="p-5 lg:px-10">
        <Hero />
      </div>
      <PartnersBand />
      <div className="elmentSize">
        <About />
      </div>
      <div className="elmentSize">
        <Information />
      </div>
      <div className="elmentSize">
        <TechnologyPage />
      </div>
      <div className="p-5 lg:p-0">
        <Page1 />
      </div>
      <div className="elmentSize">
        <Page2 />
      </div>
      <div className="elmentSize">
        <Page3 />
      </div>
      <div className="bg-white mt-5">
        <NewsUpdate />
      </div>
    </>
  );
};

export default page;
