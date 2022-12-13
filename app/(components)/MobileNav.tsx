"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "app/(constants)";
import MobileSearch from "./MobileSearch";
import { v4 as uuid } from "uuid";
import { LogoIcon, BagIcon } from "./Icons";
const MobileNav = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  return (
    <nav
      className={`navbar absolute z-[200] flex w-full min-w-[320px]  flex-col bg-black font-sans font-thin text-white transition-[opacity,height] ease-[cubic-bezier(0.52,0.16,0.24,1.0)] md:hidden ${
        menuActive
          ? "h-screen opacity-100 [transition:opacity_0.3s,height_0.54s]"
          : "h-12 opacity-80 [transition:opacity_1s,height_0.54s] "
      }`}
    >
      <ul
        className={`mx-2 flex items-center justify-between transition-all duration-[400ms] ease-[ease] ${
          searchActive ? "-mt-11" : "mt-0 "
        }`}
      >
        <li
          className="ml-4 h-11 w-[16px] cursor-pointer items-center opacity-80 transition-all duration-200 ease-[ease] hover:cursor-pointer hover:opacity-100 "
          onClick={() => setMenuActive(!menuActive)}
        >
          <div className="relative mt-1 w-full ">
            <span
              className={`absolute h-[1px] w-full bg-white  delay-[0ms,160ms] duration-200  ${
                menuActive
                  ? "top-[22px] rotate-45 transition-[top,transform]"
                  : "top-[18px]  transition-[transform,top]"
              }`}
            ></span>
            <span
              className={`absolute h-[1px] w-full bg-white  delay-[0ms,160ms] duration-200  ${
                menuActive
                  ? "top-[22px] -rotate-45 transition-[top,transform]"
                  : "top-[26px] transition-[transform,top]"
              } `}
            ></span>
          </div>
        </li>
        <li className={`ml-4 mt-1 flex h-[48px] w-[16px]  `}>
          <LogoIcon className="scale-125 fill-white opacity-80 duration-200 ease-[ease] hover:cursor-pointer  hover:opacity-100 " />
        </li>
        <li>
          <div
            className={`mr-5  h-11 w-3.5 scale-[115%] cursor-pointer items-center transition-all duration-[300ms] ease-[ease] ${
              menuActive
                ? `translate-y-[3px] opacity-0 `
                : `translate-y-0 opacity-100 delay-[400ms] `
            }`}
          >
            <BagIcon className="fill-white opacity-80 transition-all duration-200 ease-[ease] hover:opacity-100 " />
          </div>
        </li>
      </ul>
      <MobileSearch
        searchActive={searchActive}
        setSearchActive={setSearchActive}
        menuActive={menuActive}
        setMenuActive={setMenuActive}
      />
      <ul
        className={` relative  left-0 right-0 -z-[300] flex flex-col
        divide-y divide-white/25  bg-black px-10 transition-all  duration-[360ms] lg:hidden ${
          menuActive && !searchActive
            ? `translate-y-0 opacity-100`
            : `pointer-events-none -translate-y-1 opacity-0`
        } ${
          menuActive && searchActive
            ? `pointer-events-none mt-20 opacity-0`
            : `mt-0`
        }`}
      >
        {navLinks.map((link) => (
          <li key={uuid()} className={`first:mt-2`}>
            <Link
              href="#"
              key={uuid()}
              className={`flex h-[44px] items-center  whitespace-nowrap font-sans text-[17px] font-thin  text-white opacity-80  duration-300 ease-[ease] hover:opacity-100`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
