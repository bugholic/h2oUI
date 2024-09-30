import Image from "next/image"
import pageImage from "../../../assets/images/hyper-realistic-photo-hovering-sphere-water-splashes-everywhere-hand-natural.svg"
import Button from "./Button"
const About = () => {
    return (
        <main className="lg:flex w-screen gap-10 mt-10">
            <section className="left">
            <div className='mb-14 flex-col m-auto'>
            <h1 className='primary-text-color text-7xl'>
                About
            </h1>
            <h1 className='pl-10 primary-text-color text-7xl'>
                Circular H2O
            </h1>
            </div>
            <p className="w-3/4">
                Circular H2O, an Eden company, was founded with a mission to address the challenges surrounding energy-efficient mineral extraction and water accessibility. Along with global innovation leaders, we are commercializing a technology that aim to enable an economical path toward a full and circular journey for water and brine processing. The goal is a process where the value is extracted from the brine, virtually leading to a zero-waste process.
            </p>
            <br />
            <p className="w-3/4">
                The company aims to mature downstream brine processing, by enabling a high purity selective mineral precipitation - leading to more control over the separation for the first time.
            </p>
            <div className="mt-5">
            <Button action="Lets Get Started"/>
            </div>
            </section>
            <section className="right w-full">
                <Image 
                width={1000}
                src={pageImage}
                alt="about"
                />
            </section>
        </main>
    )
}

export default About
