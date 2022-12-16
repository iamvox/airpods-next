"use client";

import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
type DirectoryColumnProps = {
  title: string | undefined;
  subtitles: (string | undefined)[] | undefined | string[];
};

const DirectoryColumn = ({ title, subtitles }: DirectoryColumnProps) => {
  const [active, setActive] = useState(false);
  return (
    <div className="relative flex w-full flex-col overflow-hidden border-b-[1px] font-sans  text-[12px] text-[#000000] md:basis-1/5">
      <h3 className="z-[10] flex flex-row justify-between overflow-hidden bg-[#f5f5f7] py-[10px] md:mb-[9.6px] md:mr-[20px]  md:py-0 md:font-semibold">
        {title}
        <figure
          onClick={() => setActive(!active)}
          className={`relative h-[18px] w-[8px] cursor-pointer transition-all duration-300 ease-[ease] md:hidden ${
            active ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </figure>
      </h3>
      <ul
        className={`overflow-hidden transition-transform duration-300 ease-[ease] md:visible md:relative md:z-0 ${
          active
            ? `visible static transform-none overflow-hidden pt-[5px] pb-[16px] `
            : `absolute -z-[10] -translate-y-[100px] [visibility:hidden;] md:translate-y-0`
        } `}
      >
        {subtitles?.map((title: any) => (
          <li
            key={uuid()}
            className={`-z-[300] flex w-full basis-1/5 flex-col py-[6px] px-[14px] hover:underline md:mb-[9.6px] md:block md:p-0 `}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DirectoryColumn;
