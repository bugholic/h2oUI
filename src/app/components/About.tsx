import Image from "next/image";
import pageImage from "../../../assets/images/hyper-realistic-photo-hovering-sphere-water-splashes-everywhere-hand-natural.svg";
import Button from "./Button";
import Heading from "./Heading";
const About = () => {
  return (
    <main className="lg:flex gap-10 mt-10">
      <section className="left">
        <Heading
          head1={"About"}
          head2={["Circular ", "H", <sub>2</sub>, "O"]}
          pl={"pl-10"}
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
        <p className="sm:w-3/4">
          The company aims to mature downstream brine processing, by enabling a
          high purity selective mineral precipitation - leading to more control
          over the separation for the first time.
        </p>
        <div className="my-10">
          <Button action="Lets Get Started" />
        </div>
      </section>
      <section className="right">
        <Image width={100} className="w-full rounded-md" src={pageImage} alt="about" />
      </section>
    </main>
  );
};

export default About;
