import React from "react";
import { HeroData } from "app/(constants)";
import Buy from "app/(components)/Buy";
import Image from "next/image";
import CallToAction from "app/(components)/CallToAction";
const Hero = () => {
  return (
    <div>
      <ul className="flex h-full w-full flex-col ">
        {HeroData.map((item, index) => (
          <li
            key={item.id}
            className={`h-[520px] w-full bg-[#f5f5f7]  px-[34px] pt-[30px] first:h-[607px] first:bg-gradient-to-b first:from-white first:to-[#f5f5f7] md:h-[640px] first:md:h-[670px] lg:h-[710px] first:lg:h-[850px]`}
          >
            <div className=" relative mx-auto h-full min-w-[280px] max-w-[400px]  overflow-hidden rounded-2xl bg-white md:min-w-[680px] md:max-w-[980px] lg:min-w-[980] lg:max-w-[1520px]">
              <Image
                priority
                src={item.img[0]}
                className={`object-cover md:hidden lg:hidden ${
                  index === 1
                    ? "mx-auto max-h-[464px] max-w-[329px]"
                    : index === 2
                    ? "mx-auto mt-[25px] max-h-[275px] max-w-[202px]"
                    : index === 3
                    ? "mx-auto mt-[25px] max-h-[275px] max-w-[249px]"
                    : ""
                } `}
                alt={item.title}
                fill
                quality={100}
              ></Image>
              <Image
                src={item.img[1]}
                className={` hidden object-cover md:block lg:hidden ${
                  index === 0
                    ? ``
                    : index === 1
                    ? ``
                    : index === 2
                    ? `mt-10 object-top px-20`
                    : index === 3
                    ? `object-scale-down px-[30px]`
                    : ``
                }
                `}
                alt={item.title}
                fill
                quality={100}
              ></Image>
              <Image
                src={item.img[2]}
                className={`hidden object-cover lg:block ${
                  index === 2
                    ? `mx-auto mt-10 max-h-[680px] max-w-[700px] object-top `
                    : index === 3
                    ? `object-scale-down px-[30px]`
                    : ``
                }`}
                alt={item.title}
                fill
                quality={100}
              ></Image>
              <div
                className={`relative top-[60%] mx-auto text-center md:top-[35%] ${
                  index === 0
                    ? "top-[65%] md:top-[50%]"
                    : index === 3
                    ? "md:top-[65%]"
                    : ""
                }`}
              >
                <h1
                  className={`relative top-[12px] font-display text-[48px] font-bold md:text-[100px] lg:text-[120px]  ${
                    index === 0 ? "text-[#f5f5f7]" : "text-[#1d1d1f]"
                  } ${index === 3 ? "md:hidden " : ""}`}
                >
                  {item.title}
                </h1>
                <p
                  className={`relative font-display text-[19px] font-bold md:-top-3 md:text-[21px] ${
                    index === 0 ? "text-[#f5f5f7]" : "text-[#1d1d1f]"
                  } `}
                >
                  {item.subtitle}
                </p>
                <span
                  className={`relative font-display text-[19px] font-light md:-top-3 md:text-[21px]  ${
                    index === 0 ? "text-[#f5f5f7]" : "text-[#1d1d1f]"
                  } `}
                >
                  {item.price}
                </span>
              </div>
              <div
                className={` absolute bottom-0 left-[50%] mb-[20px] -translate-x-[50%] whitespace-nowrap ${
                  index === 0 ? `md:mb-[50px]` : ``
                }`}
              >
                <Buy
                  textClassName="py-[8px] px-[16px] md:py-3 md:px-[22px]"
                  className={`mr-3 h-[36px] w-[62px] font-light   md:h-[44px] md:w-[73px] ${
                    index === 0
                      ? `bg-white text-black`
                      : `bg-[#0071E3] text-white`
                  }`}
                />
                <CallToAction
                  callToAction="Learn more"
                  className={`text-[17px] font-light lg:text-[21px] ${
                    index === 0 ? `text-[#f5f5f7]` : `text-[#0066CC]`
                  }`}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hero;
