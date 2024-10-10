import Image from "next/image";

import partner1 from "../../../assets/images/partnersLogos/partner1.svg";
import partner2 from "../../../assets/images/partnersLogos/partner2.svg";
import partner3 from "../../../assets/images/partnersLogos/partner3.svg";
import partner4 from "../../../assets/images/partnersLogos/partner4.svg";
const PartnersBand = () => {
  return (
    <main className="border-t border-b border-solid border-gray-300 mt-5 p-3 md:px-16 flex justify-between items-center w-full">
      <div className="primary-text-color font-bold text-sm md:text-lg">Our Partners:</div>
      <div className="grid grid-cols-4 gap-5 md:gap-14 ">
        <Image src={partner1} alt="partner1" className="w-10 md:w-full"/>
        <Image src={partner2} alt="partner2" className="w-10 md:w-full"/>
        <Image src={partner3} alt="partner3" className="w-10 md:w-full"/>
        <Image src={partner4} alt="partner4" className="w-10 md:w-full"/>
      </div>
    </main>
  );
};

export default PartnersBand;
