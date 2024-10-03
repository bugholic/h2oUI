import Image from "next/image"
import btnIcon from "../../../assets/icons/button Icons.svg";

const footer = () => {
  return (
    <footer className='p-10 w-full footercontent  '>
      <main className="sm:flex justify-between">
        <div className="w-1/2">
          <div className='text-white sm:text-4xl'>
            Our mission is to address challenges and accelerate change in mineral extraction and water desalination.
          </div>
          <div className="text-gray-300 mt-28">
            EMAIL ADDRESS

            <p>info@cicularh2o.com</p>
          </div>
        </div>
        <aside>
          <div className="getInTouch w-full flex items-center justify-between px-10 py-3 text-white  bg-purple-600 rounded-full">
            <div>
              Get in touch:
            </div>
            <div>
              <Image
                src={btnIcon}
                alt="btnIcon"
                width={50}
              />
            </div>
          </div>
          <div className="bg-blue-950 mt-10 text-center rounded-3xl text-white h-60">
            <h2 className="font-bold p-10 pb-2 sm:text-4xl">
              Let's get started
            </h2>
            <p>
              We'd love to hear about your project.
            </p>

            <div className="m-auto my-10 py-3 sm:w-80 text-gray-900  text-center bg-white rounded-full">
              Contact Us
            </div>
          </div>
        </aside>
      </main>
      <br />
      <br />
      <hr />
      <div className="sm:flex justify-between text-white p-5">
        <p>
        © 2024 Circular H2O. All rights reserved.
        </p>
        <p>
        Privacy Policy
        </p>
      </div>
    </footer>
  )
}

export default footer
