import React from "react";

type BuyProps = {
  /** set text-color bg-color **/
  className: string;
  textClassName: string;
};

const Buy = ({ className, textClassName }: BuyProps) => {
  return (
    <button
      type="button"
      className={`${className} rounded-full hover:bg-opacity-90 `}
    >
      <span className={`${textClassName} `}>Buy</span>
    </button>
  );
};

export default Buy;
