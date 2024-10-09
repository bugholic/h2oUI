import Image from "next/image";
import btnIcon from "../../../assets/icons/button Icons.svg";
import Link from "next/link";
import Button from "./Button";

const footer = () => {
  return (
    <footer className="p-10 w-full">
      <main className="sm:flex justify-between">
        <div className="sm:w-3/5">
          <div className="text-white text-3xl leading-9 font-normal tracking-tighter md:text-5xl">
            Our mission is to address challenges and accelerate change in
            mineral extraction and water desalination.
          </div>
          <div className="text-gray-300 mt-28 mb-5 leading-10 text-sm">
            EMAIL ADDRESS
            <p>info@cicularh2o.com</p>
          </div>
        </div>
        <div>
        <Link href="/contact-us">
          <div className="getInTouch w-full flex items-center justify-between px-10 py-3 text-white  bg-purple-600 rounded-full">
            <div>Get in touch:</div>
            <div>
              <Image src={btnIcon} alt="btnIcon" width={50} />
            </div>
          </div>
          </Link>
          <div className="bg-blue-950 mt-10 px-5 py-10 text-center rounded-3xl text-white">
            <h2 className="font-bold text-3xl pb-2 sm:text-4xl">
              Let's get started
            </h2>
            <p className="text-sm">We'd love to hear about your project.</p>

            <Link href="/contact-us">
              <div className="m-auto mt-16 py-3 text-gray-900 text-center bg-white rounded-full">
                Contact Us
              </div>
            </Link>
          </div>
        </div>
      </main>
      <br />
      <br />
      <hr />
      <div className="sm:flex justify-between text-white p-5 text-sm">
        <p>© 2024 Circular H2O. All rights reserved.</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default footer;
