import React from "react";
import {
  DeliveryIcon,
  EngraveIcon,
  HelpIcon,
  SaveIcon,
} from "app/(components)/Icons";
import CallToAction from "app/(components)/CallToAction";

const PurchaseInfo = () => {
  return (
    <div className="mx-auto flex w-full max-w-[980px] flex-wrap justify-center border-b-[1px] border-[#d2d2d7]   pt-[8px] pb-[56px] text-center ">
      <section className="block max-w-[410px] shrink grow basis-[100%] xs:basis-[50%] lg:basis-[25%]">
        <div className="z-1 mx-auto w-[216px]  pt-[36px] text-center  lg:pt-[50px]">
          <DeliveryIcon className="h-[56px] w-[216px]" />
          <h3 className="mt-[10px] font-display text-[19px] font-semibold">
            Fast, free delivery
          </h3>
          <p className="font-text mt-[5.6px] text-[14px]">
            Or pick up available items at an Apple Store.
          </p>
          <CallToAction
            callToAction="Learn more"
            className="text-[14px] text-[#0066CC]"
          />
        </div>
      </section>
      <section className="block max-w-[410px] shrink grow basis-[100%] xs:basis-[50%] lg:basis-[25%]">
        <div className="z-1 mx-auto w-[216px]  pt-[36px] text-center  lg:pt-[50px]">
          <SaveIcon className="h-[56px] w-[216px]" />
          <h3 className="mt-[10px] font-display text-[19px] font-semibold">
            Save 5% with a new Apple Card
          </h3>
          <p className="font-text mt-[5.6px] text-[14px]">
            Shop for Apple products in stores or online now through 12/25.
            Exclusions and terms apply.
          </p>
          <CallToAction
            callToAction="Learn more"
            className="text-[14px] text-[#0066CC]"
          />
        </div>
      </section>
      <section className="block max-w-[410px] shrink grow basis-[100%] xs:basis-[50%] lg:basis-[25%]">
        <div className="z-1 mx-auto w-[216px]  pt-[36px] text-center  lg:pt-[50px]">
          <HelpIcon className="h-[56px] w-[216px]" />
          <h3 className="mt-[10px] font-display text-[19px] font-semibold">
            Get help buying
          </h3>
          <p className="font-text mt-[5.6px] text-[14px]">
            Have a question? Call a Specialist or chat online.
          </p>
          <p className="font-text  text-[14px]">Call 1-800-MY-APPLE.</p>
          <CallToAction
            callToAction="Contact us"
            className="text-[14px] text-[#0066CC]"
          />
        </div>
      </section>
      <section className="block max-w-[410px] shrink grow basis-[100%] xs:basis-[50%] lg:basis-[25%]">
        <div className="z-1 mx-auto w-[216px]  pt-[36px] text-center  lg:pt-[50px]">
          <EngraveIcon className="h-[56px] w-[216px]" />
          <h3 className="mt-[10px] font-display text-[19px] font-semibold">
            Make them yours
          </h3>
          <p className="font-text mt-[5.6px] text-[14px]">
            Engrave your AirPods with your initials or favorite emoji — free.
          </p>
          <p className="font-text  text-[14px]">Only at Apple.</p>
          <CallToAction
            callToAction="Learn more"
            className="text-[14px] text-[#0066CC]"
          />
        </div>
      </section>
    </div>
  );
};

export default PurchaseInfo;
