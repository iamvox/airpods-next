import Image from "next/image";
import React from "react";
import { chapterNav } from "app/(constants)";
import { v4 as uuid } from "uuid";
import Link from "next/link";
const Chapternav = () => {
  return (
    <nav className=" relative my-[8px] mt-12 block  bg-white md:mt-0">
      <div className="display  relative h-[110px]    text-center">
        <ul
          className={`ml-[34px] flex animate-slide-in flex-row justify-start overflow-x-hidden  overflow-y-hidden whitespace-nowrap md:justify-center`}
        >
          {chapterNav.map((item) => (
            <li
              key={uuid()}
              className="cursor-pointer  px-[20px] align-top font-sans text-xs text-[#1d1d1f] first:pl-[4px] first:pr-[15px] last:pr-[15px] last:pl-[4px] hover:text-blue-400 "
            >
              <Link href="#">
                <figure className="mx-auto mb-[7px] ">
                  <item.icon className="mx-auto" />
                </figure>

                <span className="">
                  {item.title}
                  <br />
                  {item.subtitle}
                </span>
              </Link>
            </li>
          ))}
          <div className="absolute right-0 flex h-[100px] w-[34px]  cursor-pointer items-center border-l-[1px] border-black border-opacity-20 bg-white  ease-out md:opacity-0  md:transition-opacity  md:duration-150">
            <button>
              <div className="absolute ml-1 h-11 w-[10px] items-center  opacity-80  ">
                <span
                  className={`absolute top-[3px] h-[1px] w-full -rotate-45 rounded-l-full bg-[#1d1d1f]`}
                ></span>
                <span
                  className={`absolute -top-[3.5px] h-[1px] w-full rotate-45 rounded-l-full bg-[#1d1d1f]`}
                ></span>
              </div>
            </button>
          </div>
          {/* <div className="fixed left-0 flex h-[100px] w-[34px] animate-slide-in cursor-pointer items-center border-r-[1px] border-black  border-opacity-20 bg-white  transition-opacity duration-150 ease-out md:opacity-0">
            <button>
              <div className="absolute ml-1 h-11 w-[10px] items-center  opacity-80 ">
                <span
                  className={`absolute top-[3px] h-[1px] w-full rotate-45 rounded-l-full bg-[#1d1d1f]`}
                ></span>
                <span
                  className={`absolute -top-[3.5px] h-[1px] w-full -rotate-45 rounded-l-full bg-[#1d1d1f]`}
                ></span>
              </div>
            </button>
          </div> */}
        </ul>
      </div>
    </nav>
  );
};

export default Chapternav;
