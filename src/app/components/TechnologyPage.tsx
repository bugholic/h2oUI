import Image from "next/image";
import pageImage from "../../../assets/images/plant image.svg";
import Heading from "./Heading";

const TechnologyPage = () => {
  return (
    <main className="block sm:flex w-full mt-10">
      <section className="left">
        <Heading
          head1={"Technology"}
          head2={"Circular H2O is commercializing"}
        />
        <div className="sm:flex">
          <div className="hidden md:block">
            <h6 className="font-bold">Some benefits</h6>
            <br />
            <ul className="sm: ml-8">
              <li>Selective mineral Precipitation</li>
              <li>Up to 99% mineral purity extraction</li>
              <li>30% reduction in energy</li>
              <li> 95% water recovery</li>
            </ul>
          </div>
          <div className="">
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
              <li>Selective mineral Precipitation</li>
              <li>Up to 99% mineral purity extraction</li>
              <li>30% reduction in energy</li>
              <li> 95% water recovery</li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-gray-400 text-sm">
            Evaporating pongs (massive in size, large footprint, and an ancient
            method for extracting salt)
          </p>
          <div className="">
            <Image
              className="w-full"
              src={pageImage}
              alt="plant Image"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default TechnologyPage;
