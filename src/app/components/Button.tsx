import React from "react";

type ButtonProps = {
  bgcolor?: string; // Optional string for background color
  textcolor?: string; // Optional string for text color
};

const Button: React.FC<ButtonProps> = ({ bgcolor, textcolor }) => {
  return (
    <button
      className={`btn ${bgcolor ? bgcolor : "bg-blue-700"} ${
        textcolor ? textcolor : "text-white"
      }  w-max p-3 rounded-md`}
    >
      Let's Get Started
    </button>
  );
};

export default Button;
