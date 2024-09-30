import React from 'react'

const Page1 = () => {
    return (
        <main className='bg-blue-950 p-3 text-sm mt-10'>

            <section className='pagePointsSection'>
                <u className='text-center'>
                    The Problem
                </u>

                <div className='pagePointBlock'>

                    <div>
                        <b>Minerals are in High Demand</b>

                        <p className='font-light'>
                            The world is heavily reliant on minerals like sodium, magnesium, calcium, bromine, lithium, and potassium. Many of these industries, such as magnesium and bromine, are struggling to keep up with current demand. These minerals can be found in large amounts in different brine (sea water, geothermal brine, oil&gas co-produce).
                        </p>
                    </div>
                    <div>
                        <b>Potable Water Needs are Ever-Increasing</b>
                        <p className='font-light'>
                            Many places in the world don't have access to enough naturally potable water and require desalinated water. In the MENA region, for example, water consumption is higher than average, but access to potable running water is scarce in many countries. In the U.S., many regions are already experiencing water shortage,
                        </p>
                    </div>

                </div>
            </section>

            <section className='pagePointsSection'>
                <u className='text-center'>
                    The Solution
                </u>
                <div className='pagePointBlock'>

                    <div className='leading-normal'>
                        <b>Zero Liquid Discharge (ZLD) & Mineral Extraction System</b>

                        <p>
                            Circular H2O's Zero Liquid Discharge (ZLD) and Mineral Extraction System has made mineral extraction from seawater and other brines more cost-competitive and more energy-efficient than traditional mining processes. Coupled in the right sequence, this solution is intended to form a full downstream brine processing sequence.
                        </p>
                    </div>
                    <div className='leading-normal'>
                        <b>Potable Water Needs are Ever-Increasing</b>
                        <p className='font-light'>
                            In this system, brine is mixed with the miscible organic solvent, removing water and concentrating the brine phase ultimately precipitation of solutes from the brine solution. The solid precipitates and other soluble are separated before the mixture is decomposed to drive the vaporization of miscible organic solvent.
                        </p>

                    </div>


                    <div className='leading-normal'>
                        <b>Switchable Solvent Fractional Precipitation</b>
                        <p className='font-light'>

                            In this system, hard water or high concentration brine mixes in the system as a gas or liquid, driving the fractional precipitation of solutes from the saline brine solution. Solid precipitates are separated before the mixture is decomposed or heated to drive the vaporization of the gas. The gas then undergoes compression and liquefaction before being recycled.
                        </p>

                    </div>
                </div>
            </section>

            <section className='pagePointsSection'>
                <u className='text-center'>
                    What can we extract?
                </u>
                <div className='text-white grid gap-3 grid-cols-3 mt-10'>

                    <div className='leading-normal'>
                        <b>Lithium Li</b>
                        <p>

                            The most important use of lithium is rechargeable batteries for mobile phones, electric vehicles, and many other electronics. Lithium chloride is used in air conditioning and industrial drying systems.
                        </p>
                    </div>
                    <div className='leading-normal'>
                        <b>Bromine Br</b>
                        <p className='font-light'>
                            Many over-the-counter life-saving drugs have bromine compounds as a major ingredient. Other than the pharmaceutical applications, bromine is also used in pesticides, and aesthetic applications.
                        </p>
                    </div>
                    <div className='leading-normal'>
                        <b> Calcium Ca++</b>
                        <p className='font-light'>
                            Calcium can be used in the production of some metals, cement and mortar, as well as in the glass industry.
                        </p>
                    </div>
                    <div className='leading-normal'>
                        <b>Sodium Na+</b>
                        <p className='font-light'>

                            Along with chloride, sodium accounts for the majority of the seawater ions. Sodium has multiple uses in the energy sector, and sodium salts have more uses cases, including table salt. </p>
                    </div>
                    <div className='leading-normal'>
                        <b> Magnesium Mg2+</b>
                        <p className='font-light'>
                            After sodium, it is the most commonly found mineral in oceans. Magnesium salts have a wide range of industrial and dietary use cases. </p>
                    </div>
                    <div className='leading-normal'>
                        <b>  Sulfate SO4</b>
                        <p className='font-light'>


                            Sulphate-based salts are used as foaming agents, care products, construction, and other industrial applications. </p>
                    </div>

                    <div className='leading-normal'>
                        <b>  Potassium K+</b>
                        <p className='font-light'>

                            Potassium is the sixth most abundant element dissolved in seawater. Potassium has many dietary benefits and agriculture uses. </p>
                    </div>

                    <div className='leading-normal'>
                        <b>  Chloride Cl-</b>
                        <p className='font-light'>

                            Common salt can be separated from sea water by evaporation as NaCl. </p>
                    </div>

                </div>
            </section>

            <section className='pagePointsSection'>
                <u className='text-center'>
                    MORE ELEMENTS
                </u>
                <div className='text-white grid gap-2 grid-cols-5 mt-10'>
                    <span>
                        Ammonium (NH4+)
                    </span>
                    <span> Iron (Fe++)</span>
                    <span>Boron (as B+++)</span>
                    <span>Arsenic (As)</span>
                    <span>Copper (Cu)</span>
                    <span>Molybdenum (Mo)</span>
                    <span>Silica (SiO2)</span>
                    <span>Nitrate (NO3)</span>
                    <span>Nitrite (N)</span>
                </div>
            </section>
        </main>
    )
}

export default Page1
