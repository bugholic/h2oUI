import React from "react";

type ButtonProps = {
  bgcolor?: string; // Optional string for background color
  textcolor?: string; // Optional string for text color
  border?: string;
  action?: string;
};

const Button: React.FC<ButtonProps> = ({ bgcolor, textcolor , border, action}) => {
  return (
    <button
      className={`btn ${bgcolor ? bgcolor : "bg-blue-700"} ${
        textcolor ? textcolor : "text-white"
      } ${border ? border : ""} w-max p-3 rounded-md hover:bg-blue-500 hover:text-white`}
    >
    {action}
    </button>
  );
};

export default Button;
