import React from "react";

type BuyProps = {
  /** set text-color bg-color **/
  className: string;
};

const Buy = ({ className }: BuyProps) => {
  return (
    <button
      type="button"
      className={`${className} h-[36px] w-[62px]  rounded-full hover:bg-opacity-90 md:h-[44px] md:w-[73px]`}
    >
      <span className="py-[8px] px-[16px] md:py-3 md:px-[22px]">Buy</span>
    </button>
  );
};

export default Buy;
