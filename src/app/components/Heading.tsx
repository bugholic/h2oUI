import React from "react";
import { FC } from "react";

type headingProto = {
  head1?: String;
  head2?: any;
  pl?: String;
};

const Heading: FC<headingProto> = ({ head1, head2, pl }) => {
  return (
    <>
      <div className="mb-14 flex flex-col m-auto w-full">
        <h1 className="primary-text-color text-5xl md:text-3xl lg:text-7xl tracking-tighter">
          {head1}
        </h1>
        <h1
          className={`${
            pl ? pl : ""
          } primary-text-color text-5xl md:text-3xl lg:text-7xl lg:pl-10 tracking-tighter`}
        >
          {head2}
        </h1>
      </div>
    </>
  );
};

export default Heading;
