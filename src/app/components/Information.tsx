import Image from "next/image";
import pageImage from "../../../assets/images/Group 7.svg";
import Button from "./Button";
import Heading from "./Heading";

const Information = () => {
  return (
    <main className="flex w-full gap-10 mt-10">
      <section className="left">
        <Heading
          head1={"Who We Are"}
          head2={"  Mineral Extraction System optimizes"}
        />
        <p className="sm:w-3/4">
          Circular H2O, an Eden company, was founded with a mission to address
          the challenges surrounding energy-efficient mineral extraction and
          water accessibility. Along with global innovation leaders, we are
          commercializing a technology that aim to enable an economical path
          toward a full and circular journey for water and brine processing. The
          goal is a process where the value is extracted from the brine,
          virtually leading to a zero-waste process.
        </p>
        <br />
        <div className=" hidden sm:flex">
          <div>
            <Image src={pageImage} width={400} alt="who are we" />
          </div>
          <div className="ml-auto sm:w-3/4">
            <p className="sm:w-2/4 ml-auto">
              The company aims to mature downstream brine processing, by
              enabling a high purity selective mineral precipitation - leading
              to more control over the separation for the first time.
              <br />
            </p>
            <div className="mt-5 ml-auto sm:w-2/4">
              <Button action="Lets Get Started" />
            </div>
            <div className="mt-10">
              <h6 className="font-bold">Technology</h6>
              <div className=" mt-5 gap-16  block sm:flex page-list">
                <ul>
                  <li>Evaporation and membrane free recovery</li>
                  <li>Improves efficiency in recovery rate</li>
                </ul>
                <ul>
                  <li>Target selective precipitation of minerals</li>
                  <li>Increases purity and value of extracted minerals</li>
                  <li>Minimizes energy consumption</li>
                </ul>
                <ul>
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
