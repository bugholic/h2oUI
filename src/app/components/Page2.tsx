import Heading from "./Heading";

const Page2 = () => {
  return (
    <main className=" lg:flex w-full gap-10 mt-10">
      <section className="left">
        <Heading
          head1="How It Works"
          head2="In Mineral Extraction System Optimizes"
        />
        <div className="w-full extractionPage">
          <div className="sm:w-1/2">
            <div className="bg-gray-300 rounded-full w-7 p-2 text-center">
              1
            </div>
            <div className="font-semibold">Initial Step</div>
            <div className="sm:w-4/5">
              In the first stage of the system, the liquid DME comes into
              contact with the brine or aqueous (fluid to be treated) at a
              selected controlled pressure and temperature point, which induces
              the precipitation of salts.
            </div>
          </div>

          <div className="sm:w-2/5 ml-auto">
            <div className="bg-gray-300 rounded-full w-7 p-2 text-center">
              2
            </div>
            <div className="font-semibold">Salt Settling</div>
            <div className="w-full">
              The salts settle at the bottom of the container and are removed as
              a slurry. The slurry can be fed into a selective precipitation
              system where specific byproducts can be extracted.
            </div>
          </div>
          <div className="sm:w-1/2">
            <div className="bg-gray-300 rounded-full w-7 p-2 text-center">
              3
            </div>
            <div className="font-semibold">Sequential Salt Precipitation</div>
            <div className="sm:w-4/5">
              In the sequential stages, as the DME encounters the salt slurry,
              it induces the precipitation of salt(s) near saturation. The solid
              salts may be separated via gravity methods, hydrocyclone, or
              ultrafiltration. 
            </div>
          </div>
          <div className="sm:w-1/2 ml-auto">
            <div className="bg-gray-300 rounded-full w-7 p-2 text-center">
              4
            </div>
            <div className="font-semibold">DME Gas Separation</div>
            <div className="w-4/5">
              The temperature and pressure are then adjusted, allowing the DME
              to become gas (and separate from the water) and be compressed back
              to gas to be re-used in a closed-loop cycle.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page2;
