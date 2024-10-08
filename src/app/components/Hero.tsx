import Button from "./Button";
import waterSplash from "../../../assets/images/water-splashes-drop-vortex-background 1.svg";
import realisticWaterDrop from "../../../assets/images/realistic-water-drop-with-ecosystem.png";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="lg:flex w-full">
      <section className="left">
        <h1 className="primary-text-color text-5xl my-8 tracking-tight w-full md:text-7xl">
          Solutions to meet the world's mineral needs
        </h1>

        <div className="text-sm my-5 lg:text-lg">
          As the world shifts towards a more sustainable future, our focus has
          become centered around our most significant challenges: mineral
          extraction, water accessibility, and energy efficiency. Our novel Zero
          Liquid Discharge (ZLD) and Mineral Extraction System optimizes the
          water desalination process, enabling a more cost- and
          resource-efficient extraction process of rare earth.
        </div>
        <div className="flex mt-5">
          <div className="mx-5 ml-0">
            <Button
              bgcolor="bg-blue-600"
              textcolor="text-white"
              action="Let's Get Started"
            />
          </div>
          <div className="mx-5">
            <Button
              bgcolor="bg-white"
              textcolor="text-blue-600"
              action="Learn More"
            />
          </div>
        </div>

        <div className="mt-40 smallCard w-full hidden lg:flex">
          <div className="imgBlock">
            <Image
              className="w-full"
              alt="realistic-water-drop"
              src={realisticWaterDrop}
            />
          </div>
          <div>
            <div className="ml-2 mt-2 font-bold primary-text-color">
              <h1>Why Circular H2O?</h1>
            </div>
            <p className="pt-2 sm:ml-2 sm:w-8/12 primary-text-color">
              As the world shifts towards a more sustainable future,
            </p>
          </div>
        </div>
      </section>
      <section className="right hidden lg:flex pt-40 w-full">
        <div>
          <Image width={400} alt="water-splash-image" src={waterSplash} />
        </div>
      </section>
    </main>
  );
};

export default Hero;
