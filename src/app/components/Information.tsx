import Image from "next/image";
import pageImage from "../../../assets/images/Group 7.svg";
import Button from "./Button";
import Heading from "./Heading";

const Information = () => {
  return (
    <main className="flex w-full gap-10 my-20">
      <section className="left">
        <Heading
          head1={"Who We Are"}
          head2={"Mineral Extraction System optimizes"}
        />
        <p className="font-sm leading-8">
          Circular H2O, an Eden company, was founded with a mission to address
          the challenges surrounding energy-efficient mineral extraction and
          water accessibility. Along with global innovation leaders, we are
          commercializing a technology that aim to enable an economical path
          toward a full and circular journey for water and brine processing. The
          goal is a process where the value is extracted from the brine,
          virtually leading to a zero-waste process.
        </p>
        <br />
        <div className="sm:flex">
          <div className="hidden md:flex">
            <Image priority={false} src={pageImage} width={400} alt="who are we" />
          </div>
          <div className="">
            <div className="font-sm leading-8 md:ml-auto md:w-1/2">
              The company aims to mature downstream brine processing, by
              enabling a high purity selective mineral precipitation - leading
              to more control over the separation for the first time.
              <br />
            <div className=" my-5">
              <Button action="Lets Get Started" />
            </div>
            </div>
            <div className="mt-10">
              <h6 className="font-bold text-lg">Technology</h6>
              <div className=" mt-5 gap-16 pl-8 text-sm leading-6 md:flex">
                <ul className="list-disc">
                  <li>Evaporation and membrane free recovery</li>
                  <li>Improves efficiency in recovery rate</li>
                </ul>
                <br />
                <ul className="list-disc">
                  <li>Target selective precipitation of minerals</li>
                  <li>Increases purity and value of extracted minerals</li>
                  <li>Minimizes energy consumption</li>
                </ul>
                <br />
                <ul className="list-disc">
                  <li>Minimizes energy consumption</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Information;
