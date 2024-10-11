"use client";

import React, { useRef } from "react";
import Hero from "./components/Hero";
import PartnersBand from "./components/PartnersBand";
import About from "./components/About";
import Information from "./components/Information";
import TechnologyPage from "./components/TechnologyPage";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import NewsUpdate from "./components/NewsUpdate";
import BackToTopButton from "./components/BackToTop";
import Navbar from "./components/Navbar";

const page = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const informationRef = useRef<HTMLDivElement>(null);
  const technologyRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const marketApplicationsRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Navbar
        heroRef={heroRef}
        aboutRef={aboutRef}
        informationRef={informationRef}
        technologyRef={technologyRef}
        howItWorksRef={howItWorksRef}
        marketApplicationsRef={marketApplicationsRef}
      />
      <div className="p-5 lg:px-10" ref={heroRef}>
        <Hero howItWorksRef={howItWorksRef} />
      </div>
      <PartnersBand />
      <div className="elmentSize" ref={aboutRef}>
        <About />
      </div>
      <div className="elmentSize" ref={informationRef}>
        <Information />
      </div>
      <div className="elmentSize" ref={technologyRef}>
        <TechnologyPage />
      </div>
      <div className="p-5 lg:p-0">
        <Page1 />
      </div>
      <div className="elmentSize" ref={howItWorksRef}>
        <Page2 />
      </div>
      <div className="elmentSize" ref={marketApplicationsRef}>
        <Page3 />
      </div>
      <div className="bg-white mt-5">
        <NewsUpdate />
      </div>
      <BackToTopButton />
    </>
  );
};

export default page;
