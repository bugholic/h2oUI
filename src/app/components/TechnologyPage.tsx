import Image from "next/image"
import pageImage from "../../../assets/images/plant image.svg"


const TechnologyPage = () => {
    return (
        <main className="block sm:flex w-full mt-10">
            <section className="left">
                <div className='mb-14 flex-col m-auto'>
                    <h1 className='primary-text-color text-7xl'>
                        Technology
                    </h1>
                    <h1 className='pl-10 primary-text-color text-7xl'>
                        Circular H2O is commercializing
                    </h1>
                </div>
                <div className="flex">
                    <div>
                        <h6 className="font-bold">Some benefits</h6>
                        <br />
                        <ul className="ml-8">
                            <li>Selective mineral Precipitation</li>
                            <li>Up to 99% mineral purity extraction</li>
                            <li>30% reduction in energy</li>
                            <li> 95% water recovery</li>
                        </ul>
                    </div>
                    <div className="ml-auto w-3/4">
                        <p className="w-3/4 ml-auto">
                            Circular H2O is commercializing a patent-protected, membrane-free, energy-efficient Zero Liquid Discharge (ZLD) and Mineral Extraction System. This technology has the ability to integrate as a multiple-step solution within existing systems (e.g., reverse osmosis (RO) plants), allowing it to operate on top of any existing water desalination facility.
                        </p>
                    </div>
                </div>
                <div className="mt-10">
                    <p className="text-gray-400 text-sm">
                        Evaporating pongs (massive in size, large footprint, and an ancient method for extracting salt)
                    </p>
                    <div className="hidden sm:block">
                        <Image
                            className="w-full hidden sm:block" src={pageImage}
                            alt="plant Image"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default TechnologyPage
