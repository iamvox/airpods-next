import React from "react";
import CallToAction from "app/(components)/CallToAction";
const Ribbon = () => {
  return (
    <div className="  h-[50px] w-full  bg-[#f8f8f9] py-[4px] text-center text-xs lg:h-[38px] lg:py-[6px]">
      <p className="mx-[16px] min-w-[320px] whitespace-nowrap text-[12px] text-[#1d1d1f] ">
        Get 6 months of Apple Music free <br className="lg:hidden" /> with your
        AirPods.*{" "}
        <span className="">
          <CallToAction
            callToAction={"Learn more"}
            className={"text-blue-400"}
          />
        </span>
      </p>
    </div>
  );
};

export default Ribbon;
