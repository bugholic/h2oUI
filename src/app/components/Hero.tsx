import Button from "./Button";

const Hero = () => {
  return (
    <>
      <h1 className="primary-text-color pageHeading mb-4">
        Solutions to meet the world's mineral needs
      </h1>

      <div>
        As the world shifts towards a more sustainable future, our focus has
        become centered around our most significant challenges: mineral
        extraction, water accessibility, and energy efficiency. Our novel Zero
        Liquid Discharge (ZLD) and Mineral Extraction System optimizes the water
        desalination process, enabling a more cost- and resource-efficient
        extraction process of rare earth.
      </div>
      <div>
        <Button bgcolor="bg-blue-700" textcolor="text-white" />
        <Button bgcolor="bg-white" textcolor="#001E4F" />

      </div>
    </>
  );
};

export default Hero;
