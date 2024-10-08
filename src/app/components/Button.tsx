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
      className={`btn ${bgcolor ? bgcolor : "bg-blue-600"} ${
        textcolor ? textcolor : "text-white"
      } ${border ? border : ""} w-40 my-2 p-3 rounded-md hover:bg-opacity-90`}
    >
    {action}
    </button>
  );
};

export default Button;
