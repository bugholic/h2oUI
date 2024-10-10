import Image from "next/image";

import partner1 from "../../../assets/images/partnersLogos/partner1.svg";
import partner2 from "../../../assets/images/partnersLogos/partner2.svg";
import partner3 from "../../../assets/images/partnersLogos/partner3.svg";
import partner4 from "../../../assets/images/partnersLogos/partner4.svg";
const PartnersBand = () => {
  return (
    <main className="border-t border-b border-solid border-gray-300 mt-5 p-3 px-16 flex justify-between items-center w-full">
      <div className="primary-text-color font-bold">Our Partners:</div>
      <div className="grid grid-cols-4 gap-14">
        <Image src={partner1} alt="partner1" />
        <Image src={partner2} alt="partner2" />
        <Image src={partner3} alt="partner3" />
        <Image src={partner4} alt="partner4" />
      </div>
    </main>
  );
};

export default PartnersBand;
