import React from "react";

type ButtonProps = {
  bgcolor?: string; // Optional string for background color
  textcolor?: string; // Optional string for text color
  border?: string;
  action?: string;
};

const Button: React.FC<ButtonProps> = ({ bgcolor, textcolor , border, action}) => {
  return (
    <div
      className={`btn ${bgcolor ? bgcolor : "bg-button-primary-color"} ${
        textcolor ? textcolor : "text-white"
      } ${border ? border : ""} w-40 my-2 p-3 rounded-xl hover:bg-opacity-90 text-center cursor-pointer`}
    >
    {action}
    </div>
  );
};

export default Button;
