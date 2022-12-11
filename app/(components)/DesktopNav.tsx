"use client";

import { useState } from "react";
import { navLinks } from "app/(constants)";
import Link from "next/link";
import DesktopSearch from "app/(components)/DesktopSearch";
import Overlay from "app/(components)/Overlay";
import { v4 as uuid } from "uuid";
const DesktopNav = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);
  return (
    <>
      <nav className="navbar  hidden   h-11 bg-black  font-sans font-thin text-white opacity-80 lg:block">
        <ul
          className={`mx-auto flex max-w-5xl items-center justify-between space-x-4  transition-all  duration-[400ms] ease-[ease]`}
        >
          <li
            className={`ml-6 mt-1 flex h-[48px] w-[16px] transition-all duration-[400ms] ease-[ease] ${
              searchActive
                ? "scale-50 opacity-0 delay-[360ms]"
                : `delay-0 scale-100`
            }`}
          >
            <svg
              className="scale-125 fill-white opacity-80 duration-200 ease-[ease] hover:cursor-pointer  hover:opacity-100 "
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m0 0h14v44h-14z" fill="none" />
              <path d="m13.0729 17.5214c-.093.0723-1.7248.9915-1.7248 3.0364 0 2.3651 2.0759 3.2017 2.1379 3.2223-.0103.0516-.3305 1.1464-1.0948 2.2618-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6835-.9089-2.4787-2.0243c-.9192-1.3117-1.6628-3.3463-1.6628-5.2776 0-3.0984 2.014-4.7406 3.9969-4.7406 1.0535 0 1.9313.692 2.5923.692.63 0 1.6112-.7333 2.8092-.7333.4545.0001 2.0864.0415 3.1605 1.5803zm-3.7284-2.8918c.4957-.5887.8469-1.4046.8469-2.2205 0-.1136-.0103-.2272-.031-.3202-.8056.031-1.7661.5371-2.3445 1.2084-.4544.5164-.8779 1.3323-.8779 2.1586 0 .1239.0207.2479.031.2892.0516.0103.1343.0207.2169.0207.723-.0001 1.6318-.4855 2.1586-1.1362z" />
            </svg>
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
                className={` flex h-10 items-center text-[13px] font-thin  opacity-80  duration-300 ease-[ease] hover:opacity-100 `}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="scale-110 fill-white opacity-80 duration-200 ease-[ease]  hover:opacity-100  "
            >
              <rect width="15" height="44" fill="none" />
              <path
                d="M13.98,27.343l-3.5-3.5a5.436,5.436,0,1,0-.778.777l3.5,3.5a.55.55,0,1,0,.778-.778ZM1.959,20.418a4.319,4.319,0,1,1,4.319,4.32A4.323,4.323,0,0,1,1.959,20.418Z"
                fill="#fff"
              />
            </svg>
          </li>

          <li>
            <div
              className={` mr-5 flex h-11 w-3.5  cursor-pointer items-center transition-all  duration-[400ms] ease-[ease] ${
                searchActive
                  ? " scale-50 opacity-0"
                  : ` scale-100 opacity-100 delay-[360ms]`
              }`}
            >
              <svg
                className="opacity-80 transition-all duration-200 ease-[ease] hover:opacity-100 "
                height="48"
                viewBox="0 0 15 48"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
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
