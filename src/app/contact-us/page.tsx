import React from "react";
import Heading from "../components/Heading";

const page = () => {
  return (
    <main className="mt-10">
      <div className="text-center">
        <Heading head1={"Contact Us"} />
      </div>
      <p className="primary-text-color text-center mt-5 md:text-xl">Home/Contact Us</p>
      <section className="mt-28">
        <h3 className="primary-text-color text-center lg:text-5xl my-8 tracking-tighter">
          Send us a Message
        </h3>
        <form action="" className="formForContactPage leading-loose m-auto">
          <section className="sm:flex justify-between">
            <div>
              <label className="labelForContactPage" htmlFor="">
                First name
              </label>
              <br />
              <input
                type="text"
                placeholder="First name"
                className="inputForContactPage inputName "
              />
            </div>
            <div>
              <label className="labelForContactPage" htmlFor="">
                Last name
              </label>{" "}
              <br />
              <input
                type="text"
                placeholder="Last name"
                className="inputForContactPage inputName "
              />
            </div>
          </section>
          <div>
            <label className="labelForContactPage" htmlFor="">
              Email
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="your@email.com"
              className="inputForContactPage w-full"
            />
          </div>

          <div>
            <label className="labelForContactPage" htmlFor="">
              Phone number
            </label>
            <br />
            <div className="flex">
              <select
                name="country"
                className="selectContactPage"
                id="contry-code"
              >
                <option value="US">US</option>
                <option value="IND">IND</option>
                <option value="UAE">UAE</option>
              </select>
              <input
                type="text"
                placeholder="+1(555) 000-0000"
                className="inputForContactPage phoneNumberContactPage"
              />
            </div>
          </div>
          <div>
            <label className="labelForContactPage" htmlFor="">
              Message
            </label>
            <br />
            <textarea
              placeholder="Type here"
              className="textareaContactPage w-full h-52 p-2"
            ></textarea>
          </div>
          <div className="w-full m-auto my-10">
            <button className="bg-blue-700 text-white p-2 w-full rounded-lg">
              Send Message
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default page;
