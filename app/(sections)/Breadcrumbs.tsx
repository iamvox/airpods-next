import React from "react";
import { LogoIcon, AngleBracketIcon } from "app/(components)/Icons";
const Breadcrumbs = () => {
  return (
    <div className="relative block h-[58px] max-w-[980px] border-b-[1px] border-[#d2d2d7] px-[16px] text-left text-[12px] md:border-0 ">
      <div className="flex flex-row items-center py-[7px]">
        <LogoIcon fill="#555555" />
        <span className="ml-[15px] mr-[13px] text-[14px] text-[#d7d7db]">
          &#x3009;
        </span>
        <span className="text-[#1d1d1f]">AirPods</span>
      </div>
    </div>
  );
};

export default Breadcrumbs;
