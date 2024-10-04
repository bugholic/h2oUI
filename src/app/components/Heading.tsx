import React from "react";
import { FC } from "react";

type headingProto = {
  head1: String;
  head2: String;
};

const Heading: FC<headingProto> = ({ head1, head2 }) => {
  return (
    <>
      <div className="mb-14 flex-col m-auto">
        <h1 className="primary-text-color text-2xl md:text-3xl lg:text-7xl">
          {head1}
        </h1>
        <h1 className="sm:pl-10 primary-text-color text-2xl md:text-3xl lg:text-7xl">
          {head2}
        </h1>
      </div>
    </>
  );
};

export default Heading;
