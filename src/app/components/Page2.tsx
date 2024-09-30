import Image from "next/image"
import pageImage from "../../../assets/images/view-water-splash.svg"

const Page2 = () => {
    return (
        <main className="lg:flex w-screen gap-10 mt-10">
            <section className="left">
                <div className='mb-14 flex-col m-auto'>
                    <h1 className='primary-text-color text-7xl'>
                        How It Works
                    </h1>
                    <h1 className='pl-10 primary-text-color text-7xl'>
                        In Mineral Extraction System optimizes
                    </h1>
                </div>

                <div className="w-full">
                    <div className="pageImage">

                    <Image
                        alt="image"
                        src={pageImage}
                        />
                        </div>
                    <div className="w-1/2">
                        <div className="bg-gray-300 rounded-full w-7 p-2 text-center">
                            1
                        </div>
                        <div className="font-semibold">
                            Initial Step
                        </div>
                        <div className="w-4/5">
                            In the first stage of the system, the liquid DME comes into contact with the brine or aqueous (fluid to be treated) at a selected controlled pressure and temperature point, which induces the precipitation of salts.
                        </div>
                    </div>

                    <div className="w-1/2 ml-auto">
                        <div className="bg-gray-300 rounded-full w-7 p-2 text-center">
                            2
                        </div>
                        <div className="font-semibold">
                            Salt Settling
                        </div>
                        <div className="w-4/5">
                            The salts settle at the bottom of the container and are removed as a slurry. The slurry can be fed into a selective precipitation system where specific byproducts can be extracted.
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Page2
