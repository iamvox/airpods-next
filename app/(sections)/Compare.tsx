import { CompareData } from "app/(constants)";
import Image from "next/image";
import Buy from "app/(components)/Buy";
import CallToAction from "app/(components)/CallToAction";
import { v4 as uuid } from "uuid";
import SpatialAudioIcon from "../../public/compare/icon_spatial_audio.png";
const Compare = () => {
  return (
    <div className=" mx-auto w-full self-center bg-[#f5f5f7]  pb-[60px] pt-[30px] md:pt-[75px] lg:pt-[100px] ">
      <div
        className="mx-auto min-w-[280px] max-w-[692px] text-center
       md:max-w-[850px] lg:max-w-[980px]"
      >
        <h2 className="text-center font-display text-[32px] font-bold text-[#1d1d1f] md:text-[48px] lg:text-[64px]">
          Which AirPods are <br /> right for you?
        </h2>
        <div className="mx-auto mt-[18px] grid max-w-[500px] grid-cols-[repeat(2,1fr)] grid-rows-[repeat(12,auto)] gap-x-[10px] gap-y-[38px] overflow-hidden pb-[30px]  text-[#1d1d1f] md:mt-[18px] md:max-w-[850px] md:grid-cols-[repeat(4,1fr)] md:grid-rows-[repeat(6,auto)]  md:gap-y-[53px] md:gap-x-[34px] lg:max-w-[940px] ">
          {CompareData.map((item, index) => (
            <div
              key={item.id}
              className={`mb-[2px] block border-b-[1px] pb-[25px]   text-center md:row-start-1 ${
                index === 2
                  ? `row-start-[7]`
                  : index === 3
                  ? `row-start-[7]`
                  : ``
              }`}
            >
              <div className=" mx-auto flex h-[149px] w-[177px] items-end justify-center md:h-[132px] md:w-[187px] lg:h-[235px] lg:w-[208px] ">
                <Image
                  quality={100}
                  className={`z-[300] translate-y-5 scale-[72%] md:scale-[75%] lg:translate-y-0 lg:scale-[100%] ${
                    index === 3 ? `translate-y-8 md:scale-[65%]` : ``
                  }`}
                  src={item.img}
                  alt={`${item.title} ${item.subtitle}`}
                />
              </div>

              <h3 className="mt-[29px]  font-display text-[21px] font-semibold ">
                {item.title}
                <span className="block  font-sans text-[14px] font-normal text-[#1d1d1f]">
                  {item.subtitle}
                </span>
              </h3>
              <p className="mt-[13px] text-center font-sans font-normal">
                {item.price}
              </p>
              <ul className="mt-[13px]">
                <li>
                  <Buy
                    className=" bg-[#0077ed] py-[4px] px-[11px] text-[12px] text-white"
                    textClassName=""
                  />
                </li>
                <li>
                  <CallToAction
                    className="mt-[7px] text-[14px] text-[#06c]"
                    callToAction="Learn more"
                  />
                </li>
              </ul>
            </div>
          ))}
          {CompareData.map((item, index) => (
            <div
              key={uuid()}
              className={`flex flex-col items-center justify-center text-center font-sans text-[14px] font-normal text-[#1d1d1f] md:row-start-2 ${
                index === 2
                  ? `row-start-[8]`
                  : index === 3
                  ? `row-start-[8]`
                  : ``
              }`}
            >
              {item.features.spatialAudio ? (
                <div className={``}>
                  <Image
                    width={40}
                    height={38}
                    quality={100}
                    src={`/../public/compare/icon_spatial_audio.png`}
                    alt={`spatial audio icon`}
                    className="mx-auto mb-[9px]"
                  />
                  <p>Personalized Spatial Audio with dynamic head tracking</p>
                </div>
              ) : (
                <div className="flex flex-row flex-wrap items-center justify-center text-center text-[17px]">
                  <p className="tex-center block leading-[25px]">—</p>
                </div>
              )}
            </div>
          ))}
          {CompareData.map((item, index) => (
            <div
              key={uuid()}
              className={`flex flex-col items-center justify-center text-center font-sans text-[14px] font-normal text-[#1d1d1f] md:row-start-3 ${
                index === 2
                  ? `row-start-[9]`
                  : index === 3
                  ? `row-start-[9]`
                  : ``
              }`}
            >
              {item.features.noiseCancelling ? (
                <div className="flex flex-col items-center justify-center">
                  <div className="grid h-[43px]  grid-cols-2 gap-y-[10px]">
                    <Image
                      width={26}
                      height={34}
                      quality={100}
                      src={`/../public/compare/icon_transparency.png`}
                      alt={`noise cancelling icon`}
                      className="mb-[9px] "
                    />
                    <Image
                      width={26}
                      height={34}
                      quality={100}
                      src={`/../public/compare/icon_transparency_1.png`}
                      alt={`noise cancelling icon`}
                      className="mb-[9px]"
                    />
                  </div>

                  <p className="block">
                    Active Noise Cancellation and Adaptive Transparency
                  </p>
                </div>
              ) : (
                <div className="flex flex-row flex-wrap items-center justify-center text-center text-[17px]">
                  <p className="tex-center block leading-[25px]">—</p>
                </div>
              )}
            </div>
          ))}
          {CompareData.map((item, index) => (
            <div
              key={uuid()}
              className={`flex flex-col items-center justify-center text-center font-sans text-[14px] font-normal text-[#1d1d1f] md:row-start-4 ${
                index === 2
                  ? `row-start-[10]`
                  : index === 3
                  ? `row-start-[10]`
                  : ``
              }`}
            >
              {item.features.waterProof ? (
                <div className="flex flex-col items-center justify-center">
                  <Image
                    width={28}
                    height={41}
                    quality={100}
                    src={`/../public/compare/icon_water_resistent.png`}
                    alt={`water proof icon`}
                    className="mb-[9px]"
                  />
                  <p>Sweat and water resistant</p>
                </div>
              ) : (
                <div className="flex flex-row flex-wrap items-center justify-center text-center text-[17px]">
                  <p className="tex-center block leading-[25px]">—</p>
                </div>
              )}
            </div>
          ))}
          {CompareData.map((item, index) => (
            <div
              key={uuid()}
              className={`flex flex-col items-center text-center font-sans text-[14px] font-normal text-[#1d1d1f] md:row-start-5 ${
                index === 2
                  ? `row-start-[11]`
                  : index === 3
                  ? `row-start-[11]`
                  : ``
              }`}
            >
              {item.features.case ? (
                <div className="">
                  <Image
                    quality={100}
                    src={item.case}
                    alt={`spatial audio icon`}
                    className="mx-auto mb-[9px]"
                  />
                  <p>{item.caseDescription}</p>
                </div>
              ) : (
                <div className="flex flex-row flex-wrap items-center justify-center text-center text-[17px]">
                  <p className="tex-center block leading-[25px]">—</p>
                </div>
              )}
            </div>
          ))}
          {CompareData.map((item, index) => (
            <div
              key={uuid()}
              className={`flex flex-col items-center text-center font-sans text-[14px] font-normal text-[#1d1d1f] md:row-start-6 ${
                index === 2
                  ? `row-start-[12]`
                  : index === 3
                  ? `row-start-[12]`
                  : ``
              }`}
            >
              <div className="border-b-[1px] pb-[25px] md:border-b-0">
                <h1 className="font-display text-[42px] font-medium ">{`${item.charge} hrs`}</h1>
                <p className="">
                  Up to {item.charge} hours of listening time with a single
                  charge
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[40px] ">
          <CallToAction
            callToAction="Compare all AirPods models"
            className="  text-center font-display text-[17px] text-[#06c] md:text-[21px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Compare;
