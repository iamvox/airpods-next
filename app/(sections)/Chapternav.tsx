import Image from "next/image";
import React from "react";
import { Airpods2Icon } from "app/(components)/Icons";
const Chapternav = () => {
  return (
    <div className="h-[100px] w-full translate-y-12 bg-yellow-500 py-2 lg:translate-y-0">
      <div className="flex flex-row ">
        <ul>
          <li>
            <Airpods2Icon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Chapternav;
