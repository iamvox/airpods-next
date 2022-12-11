import React from "react";

type ButtonProps = {
  bgColor: string;
  textColor: string;
};

const Button = ({ bgColor, textColor }: ButtonProps) => {
  return (
    <button type="button" className={`bg-${bgColor} text-${textColor} `}>
      Buy
    </button>
  );
};

export default Button;
