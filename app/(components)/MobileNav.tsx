"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "app/(constants)";
import MobileSearch from "./MobileSearch";
import { v4 as uuid } from "uuid";
const MobileNav = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  return (
    <nav
      className={`navbar fixed z-[200] flex w-full min-w-[320px] flex-col  bg-black font-sans font-thin text-white transition-[opacity,height] ease-[cubic-bezier(0.52,0.16,0.24,1.0)] lg:hidden ${
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
          <svg
            className="scale-125 fill-white opacity-80 duration-200 ease-[ease] hover:cursor-pointer  hover:opacity-100 "
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m0 0h14v44h-14z" fill="none" />
            <path d="m13.0729 17.5214c-.093.0723-1.7248.9915-1.7248 3.0364 0 2.3651 2.0759 3.2017 2.1379 3.2223-.0103.0516-.3305 1.1464-1.0948 2.2618-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6835-.9089-2.4787-2.0243c-.9192-1.3117-1.6628-3.3463-1.6628-5.2776 0-3.0984 2.014-4.7406 3.9969-4.7406 1.0535 0 1.9313.692 2.5923.692.63 0 1.6112-.7333 2.8092-.7333.4545.0001 2.0864.0415 3.1605 1.5803zm-3.7284-2.8918c.4957-.5887.8469-1.4046.8469-2.2205 0-.1136-.0103-.2272-.031-.3202-.8056.031-1.7661.5371-2.3445 1.2084-.4544.5164-.8779 1.3323-.8779 2.1586 0 .1239.0207.2479.031.2892.0516.0103.1343.0207.2169.0207.723-.0001 1.6318-.4855 2.1586-1.1362z" />
          </svg>
        </li>
        <li>
          <div
            className={`mr-5  h-11 w-3.5 scale-[115%] cursor-pointer items-center transition-all duration-[300ms] ease-[ease] ${
              menuActive
                ? `translate-y-[3px] opacity-0 `
                : `translate-y-0 opacity-100 delay-[400ms] `
            }`}
          >
            <svg
              className="fill-white opacity-80 transition-all duration-200 ease-[ease] hover:opacity-100 "
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <path d="m0 48h15v-48h-15z" />
                <path
                  d="m14 28.5c0 .827-.673 1.5-1.5 1.5h-10c-.827 0-1.5-.673-1.5-1.5v-9.002c0-.828.673-1.5 1.5-1.5h10c.827 0 1.5.672 1.5 1.5zm-6.5-14c1.436 0 2.607 1.098 2.752 2.498h-5.504c.145-1.4 1.316-2.498 2.752-2.498zm5 2.498h-1.248c-.148-1.952-1.765-3.498-3.752-3.498s-3.604 1.546-3.752 3.498h-1.248c-1.378 0-2.5 1.121-2.5 2.5v9.002c0 1.378 1.122 2.5 2.5 2.5h10c1.378 0 2.5-1.122 2.5-2.5v-9.002c0-1.379-1.122-2.5-2.5-2.5z"
                  fill="#fff"
                />
              </g>
            </svg>
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
