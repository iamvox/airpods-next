"use client";

import { useState } from "react";
import { PlusCircle } from "app/(components)/Icons";
import Image, { StaticImageData } from "next/image";

type TileProps = {
  key: number;
  item: {
    id: number;
    title: string;
    img: StaticImageData[];
    description: string;
  };
  index: number;
};

const Tile = ({ key, item, index }: TileProps) => {
  const [expandTile, setExpandTile] = useState(false);
  return (
    <li
      key={key}
      className="mx-[10px] mb-[30px] flex  h-[410px] w-[300px] flex-col justify-center  rounded-2xl bg-white px-[20px] align-middle md:h-[450px] md:w-[350px] lg:h-[484px] lg:w-[404px]"
    >
      <div className={`grid h-full ${expandTile ? "hidden" : ``} `}>
        <Image
          src={item.img[0]}
          className={`mx-auto my-auto object-cover md:hidden lg:hidden`}
          alt={item.title}
        ></Image>
        <Image
          src={item.img[1]}
          className={` mx-auto my-auto hidden object-cover md:block lg:hidden
                `}
          alt={item.title}
        ></Image>
        <Image
          src={item.img[2]}
          className={`mx-auto hidden object-cover lg:block ${
            index === 2
              ? "my-auto"
              : index === 3
              ? "my-auto"
              : index === 4
              ? "my-auto"
              : index === 5
              ? "my-auto"
              : index === 6
              ? "my-auto"
              : ""
          }`}
          alt={item.title}
        ></Image>
      </div>
      <div
        className={`h-full pt-[80px] pl-[25px] pr-[40px] text-start md:pt-[100px] lg:pt-[150px] ${
          expandTile ? "block" : `hidden`
        }`}
      >
        <h2 className="font-display text-[19px] font-semibold text-[#1d1d1f] md:text-[24px]">
          {item.title}
        </h2>
        <p className="font-text mt-[13px] whitespace-normal text-[17px] text-[#1d1d1f] ">
          {item.description}
        </p>
      </div>
      <div className="flex flex-row  justify-between  pl-[5px] pb-[20px]">
        <h2
          className={`font-display text-[19px] font-semibold md:text-[24px] ${
            expandTile ? "opacity-0" : ``
          }`}
        >
          {item.title}
        </h2>
        <div
          className={`top-4 cursor-pointer ${
            index === 1 ? `md:translate-y-[36px] lg:translate-y-0` : ``
          }`}
          onClick={() => setExpandTile(!expandTile)}
        >
          <PlusCircle
            className={`md:scale-[117%] lg:scale-125 ${
              expandTile ? `rotate-45` : ``
            }`}
          />
        </div>
      </div>
    </li>
  );
};

export default Tile;
