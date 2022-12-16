"use client";

import { useState } from "react";
import { navLinks } from "app/(constants)";
import Link from "next/link";
import DesktopSearch from "app/(components)/DesktopSearch";
import Overlay from "app/(components)/Overlay";
import { v4 as uuid } from "uuid";
import { LogoIcon, SearchIcon, BagIcon } from "./Icons";
const DesktopNav = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);
  return (
    <>
      <nav className="navbar  hidden h-11   overflow-hidden bg-black  font-sans font-thin text-white opacity-80 md:block">
        <ul
          className={`mx-auto flex max-w-5xl items-center justify-between space-x-4  whitespace-nowrap  transition-all duration-[400ms] ease-[ease]`}
        >
          <li
            className={`ml-6 mt-1 flex h-[48px] w-[16px] transition-all duration-[400ms] ease-[ease] ${
              searchActive
                ? "scale-50 opacity-0 delay-[360ms]"
                : `delay-0 scale-100`
            }`}
          >
            <LogoIcon
              fill={"#fff"}
              className="scale-125 fill-white opacity-80 duration-200 ease-[ease] hover:cursor-pointer  hover:opacity-100 "
            />
          </li>

          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`transition-all duration-[400ms] ease-[ease] ${
                searchActive
                  ? `scale-50 opacity-0 ${link.delayOpen}`
                  : `scale-100 opacity-100 ${link.delayClose}`
              } `}
            >
              <Link
                href="#"
                key={link.id}
                className={`flex h-10 items-center text-[13px] font-thin  opacity-80  duration-300 ease-[ease] hover:opacity-100 `}
              >
                {link.title}
              </Link>
            </li>
          ))}

          <li
            className={`flex h-10 w-3.5 cursor-pointer transition-all duration-[400ms] ease-[ease] ${
              searchActive
                ? `pointer-events-none scale-50 opacity-0 delay-[30ms]`
                : `scale-110 opacity-100 delay-[330ms]`
            }`}
            onClick={() => {
              setSearchActive(!searchActive);
              setOverlayActive(!overlayActive);
            }}
          >
            <SearchIcon className="scale-110 fill-white opacity-80 duration-200 ease-[ease]  hover:opacity-100" />
          </li>

          <li>
            <div
              className={` mr-5 flex h-11 w-3.5  cursor-pointer items-center transition-all  duration-[400ms] ease-[ease] ${
                searchActive
                  ? " scale-50 opacity-0"
                  : ` scale-100 opacity-100 delay-[360ms]`
              }`}
            >
              <BagIcon
                height="48"
                viewBox="0 0 15 48"
                width="15"
                className="opacity-80 transition-all duration-200 ease-[ease] hover:opacity-100 "
              />
            </div>
          </li>
        </ul>
      </nav>
      <DesktopSearch
        searchActive={searchActive}
        setSearchActive={setSearchActive}
        setOverlayActive={setOverlayActive}
      />
      <Overlay
        overlayActive={overlayActive}
        setOverlayActive={setOverlayActive}
        searchActive={searchActive}
        setSearchActive={setSearchActive}
      />
    </>
  );
};

export default DesktopNav;
