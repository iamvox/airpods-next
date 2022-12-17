import CallToAction from "app/(components)/CallToAction";
import Image from "next/image";
import React from "react";

const Holiday = () => {
  return (
    <section className="relative mx-auto h-auto  w-auto min-w-[280px] max-w-[12.5%+400px]  pb-[5px] text-center    md:max-w-[4.16%+692px] md:pt-[37px]   lg:w-full lg:max-w-[1580px] lg:pb-[81px] lg:pt-[73px]">
      <div className="  mx-[2%] flex flex-col  items-center justify-around rounded-[18px] bg-[#01012a] p-[20px] px-[40px] align-middle font-sans text-[17px]  md:h-[401px] md:flex-row md:pt-[16px] md:pb-[20px]  lg:h-[585px] ">
        <div className=" px-[10px] text-center">
          <div className="mx-auto block w-[248px] text-center ">
            <Image
              width={84}
              height={84}
              className="mx-auto h-[84px] w-[84px] lg:h-[106px] lg:w-[106px]"
              src="/holiday/holiday_logo.jpg"
              alt="holiday logo"
            />
          </div>
          <h3 className="mx-auto mb-[13px] -mt-[2px] max-w-[360px] whitespace-nowrap text-center font-display text-[32px] font-bold text-white md:text-[40px] lg:text-[48px]">
            It&apos;s wow or never.
          </h3>
          <p className=" mx-auto mt-[13px] mb-[13px] whitespace-nowrap text-center font-sans text-[17px] text-white lg:text-[21px]">
            Discover last‑minute gifts that <br /> will make a lasting
            impression.
          </p>
          <CallToAction
            callToAction="Shop the Holiday Gift Guide"
            className="mt-[13px] text-[17px] text-[#06c] lg:text-[21px]"
          />
        </div>
        <div>
          <Image
            alt="holiday face"
            src="/holiday/holiday_banner.png"
            width={344}
            quality={100}
            height={344}
            className="mx-auto mt-[20px] object-cover lg:mt-0 lg:h-[555px] lg:w-[555px]"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Holiday;
