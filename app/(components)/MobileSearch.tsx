import React from "react";
import { QuickLinks } from "app/(constants)";
import Link from "next/link";

type MobileSearch = {
  searchActive: boolean;
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
  menuActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileSearch = ({
  searchActive,
  setSearchActive,
  menuActive,
  setMenuActive,
}: MobileSearch) => {
  return (
    <>
      <div
        className={`relative flex items-center border-b-[1px] border-white/25 bg-black px-4 pb-3 transition-all duration-[600ms] ease-[ease]  lg:hidden
        ${
          menuActive
            ? "opacity-100 [transform:rotateX(0deg)]"
            : "pointer-events-none -mt-[30px] opacity-0 [transform:rotateX(90deg)]"
        } ${searchActive ? "mt-[10px]" : ``}
        `}
      >
        <div className={` absolute left-[24px] opacity-50 `}>
          <svg
            className=" opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="44"
            viewBox="0 0 15 44"
          >
            <rect width="15" height="44" fill="none" />
            <path
              d="M13.98,27.343l-3.5-3.5a5.436,5.436,0,1,0-.778.777l3.5,3.5a.55.55,0,1,0,.778-.778ZM1.959,20.418a4.319,4.319,0,1,1,4.319,4.32A4.323,4.323,0,0,1,1.959,20.418Z"
              fill="#fff"
            />
          </svg>
        </div>
        <div className={`flex-1`}>
          <form action="">
            <input
              type="text"
              placeholder="Search apple.com"
              className="w-full items-center rounded-lg border-0 bg-[#1b1b1b] py-[6px] px-6 text-[17px] outline-none placeholder:font-sans placeholder:font-thin placeholder:text-white  placeholder:text-opacity-30"
              onClick={() => setSearchActive(true)}
            />
          </form>
        </div>
        <span
          className={`cursor-pointer text-[17px] font-normal text-[#2997ff] transition-all duration-[400ms] ease-[ease]  ${
            searchActive
              ? " w-[74px] px-4 opacity-100"
              : "pointer-events-none w-0 overflow-hidden opacity-0 "
          }`}
          onClick={() => setSearchActive(false)}
        >
          Cancel
        </span>
      </div>

      <div
        className={`absolute left-0 right-0 -z-50 px-10 transition-all duration-[400ms] ease-[ease] ${
          searchActive
            ? `top-[80px] opacity-100`
            : `pointer-events-none top-[10px] opacity-0`
        }  `}
      >
        <h2 className={`mt-1 text-xs font-light uppercase text-[#6e6e73]`}>
          Quick Links
        </h2>
        <ul
          className={`list-none divide-y divide-white/25  
        `}
        >
          {QuickLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={"#"}
                className={`font-text inline-block w-full items-center py-2 font-sans  text-sm hover:text-[#2997ff]`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileSearch;
