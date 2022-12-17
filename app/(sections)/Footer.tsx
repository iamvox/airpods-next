import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto w-full max-w-[980px] pt-[17px] pb-[19px] text-[12px] text-[#6e6e73] ">
      <div className="mb-[7px] border-[#d2d2d7] pb-[8px] md:border-b-[1px]">
        More ways to shop: <a>Find an Apple Store</a> or{" "}
        <a className="text-[#06c]">other retailer</a> near you. Or call
        1-800-MY-APPLE.
      </div>
      <div className="mt-[5px] pt-[5px] text-[12px] text-[#6e6e73] md:hidden">
        United States
      </div>
      <div className="flex-row items-center justify-between overflow-hidden pt-[12px] md:flex md:whitespace-nowrap">
        <div className=" mr-[5px] text-[12px] text-[#6e6e73] ">
          Copyright © 2022 Apple Inc. All rights reserved.
        </div>
        <div className="relative -top-[5px] z-[1] mt-[5px] mr-[5px] overflow-hidden">
          <a
            href="/"
            className="mr-[7px] mt-[5px] inline-block whitespace-nowrap border-r-[1px] border-[#d2d2d7] pr-[10px]"
          >
            Privacy Policy
          </a>
          <a
            href="/"
            className="mr-[7px] mt-[5px]  inline-block whitespace-nowrap border-r-[1px] border-[#d2d2d7] pr-[10px]"
          >
            Terms of Use
          </a>
          <a
            href="/"
            className="mr-[7px] mt-[5px] inline-block whitespace-nowrap border-r-[1px] border-[#d2d2d7] pr-[10px]"
          >
            Sales and Refunds
          </a>
          <a
            href="/"
            className="mr-[7px] mt-[5px] inline-block whitespace-nowrap border-r-[1px] border-[#d2d2d7] pr-[10px]"
          >
            Legal
          </a>
          <a
            href="/"
            className="mr-[7px] mt-[5px] inline-block whitespace-nowrap  pr-[10px]"
          >
            Site map
          </a>
        </div>
        <div className=" hidden  text-[12px] text-[#6e6e73] md:block">
          United States
        </div>
      </div>
    </div>
  );
};

export default Footer;
