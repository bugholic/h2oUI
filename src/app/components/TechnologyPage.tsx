import Image from "next/image";
import pageImage from "../../../assets/images/plant image.svg";
import Heading from "./Heading";

const listItem = [
  "Selective mineral Precipitation",
  "Up to 99% mineral purity extraction",
  "30% reduction in energy",
  "95% water recovery",
];

const TechnologyPage = () => {
  return (
    <main className="block sm:flex w-full mt-10">
      <section className="left">
        <div className="mb-14">
          <Heading
            head1={"Technology"}
            head2={"Circular H2O is commercializing"}
          />
        </div>
        <div className="md:flex w-full">
          <div className="leading-6 mt-2 hidden md:block">
            <h6 className="font-bold text-lg">Some benefits</h6>
            <br />
            <ul className="list-disc ml-10">
              {listItem.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="md:w-1/2 md:ml-auto">
            <p className="text-lg leading-8">
              Circular H2O is commercializing a patent-protected, membrane-free,
              energy-efficient Zero Liquid Discharge (ZLD) and Mineral
              Extraction System. This technology has the ability to integrate as
              a multiple-step solution within existing systems (e.g., reverse
              osmosis (RO) plants), allowing it to operate on top of any
              existing water desalination facility.
            </p>
          </div>
          <div className="mt-10 md:hidden">
            <h6 className="font-bold text-lg">Some benefits</h6>
            <br />
            <ul className="list-disc ml-10">
              {listItem.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-gray-400 text-sm">
            Evaporating pongs (massive in size, large footprint, and an ancient
            method for extracting salt)
          </p>
          <div className="">
            <Image className="w-full" src={pageImage} alt="plant Image" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default TechnologyPage;
