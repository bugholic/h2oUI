import Image from "next/image";
import tick from "../../../assets/icons/tick.svg";
import learnmorearrow from "../../../assets/icons/learnmorearrow.svg";
import React, { FC } from "react";
import Heading from "./Heading";

const pageData = {
  dataSet1: {
    heading: "Seawater Desalination",
    para1:
      "Seawater desalination plants produce large quantities of high-salinity brine, which is discharged back into the sea, harming marine ecosystems and increasing local salinity. This makes the process environmentally unsustainable and economically challenging for widespread adoption, especially in water-scarce regions.",
    para2:
      "The proposed technology extracts valuable minerals from desalination brine, creating additional revenue streams. This offsets operational costs, reducing or potentially eliminating the cost of desalination. By minimizing brine discharge, it also reduces environmental damage, making the process more sustainable and viable.",
  },
  dataSet2: {
    heading: "Geothermal Brine",
    para1:
      "Geothermal energy production generates brine that can yield valuable minerals like lithium, but high capital costs prevent widespread extraction. Only one plant in the U.S. is currently recovering lithium from geothermal brine, limiting its potential use.",
    para2:
      "The proposed technology integrates with geothermal brine systems post-heat exchanger to optimize energy use and efficiently extract lithium and magnesium. The remaining brine is reinjected to maintain reservoir pressure, enhancing sustainability while maximizing mineral extraction.",
  },
  dataSet3: {
    heading: "Oil and Gas Brine",
    para1:
      "Oil and gas extraction produces large volumes of contaminated wastewater, containing salts, heavy metals, and radioactive elements, posing environmental risks if not properly treated or disposed of. Current disposal methods involve subsurface injection, which has limitations.",
    para2:
      "The proposed technology can sequentially extract heavy metals and valuable minerals from wastewater, creating revenue streams while enabling more sustainable water management in the oil and gas industry. Extracted minerals like bromine, potassium chloride, and lithium can be recycled or sold.",
  },
  dataSet4: {
    heading: "Industrial Wastewater",
    para1:
      "Industrial wastewater, resulting from manufacturing processes, contains dissolved or suspended substances. Current treatment methods clean the water for reuse but fail to extract valuable substances, missing opportunities for resource recovery.",
    para2:
      "The proposed technology adds a mineral extraction stage to existing treatments, recovering up to 95% of valuable minerals like lithium from waste streams. This enhances water purification and creates an additional stream of purified minerals for reuse or sale.",
  },
};

type Data = {
  heading: String;
  para1: String;
  para2: String;
};

interface PageContentProto {
  data: Data;
}

// In page component

const PageContent: FC<PageContentProto> = ({ data }) => {
  return (
    <section className="pagePointsSection font-normal text-sm md:grid gap-2 grid-flow-col grid-cols-3">
      <div className="flex flex-col items-start mt-7">
        <div className="flex">
          <Image src={tick} alt="verified tick" />
          <div className="pl-2 text-2xl font-semibold">{data.heading}</div>
        </div>
        <div className="flex mt-5">
          <div className="border-b-2 border-gray-400 my-5">Learn More</div>
          <Image src={learnmorearrow} alt="learnmorearrow" />
        </div>
      </div>
      <div>
        <div className="my-5 font-bold text-lg">The Problem</div>
        <p className="font-light leading-6">{data.para1}</p>
      </div>
      <div>
        <div className="my-5 font-bold text-lg">The Solution</div>
        <p className="font-light leading-6">{data.para2}</p>
      </div>
    </section>
  );
};

const Page3 = () => {
  return (
    <main className="mt-20 border-b-2 border-gray-600 pb-5">
      <div className="mb-14">
        <Heading head1={"Market Appplications"} />
      </div>
      <div className="mb-14">
        <Heading head2={"Circular H2O Zero-Waste Water"} />
      </div>

      <div>
        {Object.values(pageData).map((data, index) => (
          <PageContent key={index} data={data} />
        ))}
      </div>
    </main>
  );
};

export default Page3;
