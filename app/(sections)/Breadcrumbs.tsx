import React from "react";
import { LogoIcon, AngleBracketIcon } from "app/(components)/Icons";
const Breadcrumbs = () => {
  return (
    <div className="relative mx-auto flex h-[58px] w-full max-w-[980px] flex-row  border-b-[1px] border-[#d2d2d7]  text-left text-[12px] md:border-0 ">
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
