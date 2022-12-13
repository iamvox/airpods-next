import { QuickLinks } from "app/(constants)";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { SearchIcon, CloseIcon } from "./Icons";
type DesktopSearch = {
  searchActive: boolean;
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
  setOverlayActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const DesktopSearch = ({
  searchActive,
  setSearchActive,
  setOverlayActive,
}: DesktopSearch) => {
  return (
    <div
      className={`${
        searchActive
          ? " opacity-100 transition-all  duration-[400ms] ease-[ease]"
          : "pointer-events-none  opacity-0 transition-all  duration-[400ms] ease-[ease]"
      } fixed top-0 left-0 right-0 z-[200] mx-auto hidden w-3/5 max-w-2xl px-[42px] md:block`}
    >
      <div
        className={` ${
          searchActive
            ? "translate-x-0 opacity-50 transition-all delay-[600ms] duration-[400ms] ease-[ease]"
            : "pointer-events-none translate-x-[50px] opacity-0"
        } absolute left-3 mt-[5px] scale-110`}
      >
        <SearchIcon />
      </div>
      <div>
        <form
          action=""
          className={`${
            searchActive
              ? "translate-x-0 opacity-100 transition-all delay-[600ms] duration-[400ms] ease-[ease]"
              : "pointer-events-none translate-x-[50px] opacity-0"
          } mx-auto w-full `}
        >
          <input
            type="text"
            name=""
            id=""
            placeholder="Search apple.com"
            className="h-11 w-full border-none bg-transparent text-[20px] font-light text-white opacity-60 outline-none"
          />
        </form>
      </div>
      <div
        className={`${
          searchActive
            ? ` translate-x-0 opacity-50 transition-all delay-[600ms] duration-[400ms] ease-[ease]`
            : `translate-x-[50px] opacity-0`
        } absolute top-0 right-3 mt-4 block  scale-110 cursor-pointer   `}
        onClick={() => {
          setSearchActive(false);
          setOverlayActive(false);
        }}
      >
        <div
          className={`${
            searchActive
              ? ` translate-x-0 opacity-100 transition-all delay-[600ms] duration-[400ms] ease-[ease]`
              : `translate-x-[50px] opacity-0 `
          } `}
        >
          <CloseIcon className="h-11 w-5 bg-[length:17px_17px] bg-center bg-no-repeat opacity-50 transition-all duration-[200ms] hover:opacity-70" />
        </div>
      </div>
      <div
        className={`absolute left-0 right-0 list-none rounded-b-2xl bg-white px-2 py-4`}
      >
        <h2
          className={`${
            searchActive
              ? ` translate-x-0 opacity-100 transition-all delay-[400ms] duration-[400ms] ease-[ease]`
              : `translate-x-[50px] opacity-0`
          } mx-8 mt-[10px] text-xs font-light uppercase text-[#6e6e73]`}
        >
          Quick Links
        </h2>
        <ul className="mt-3 list-none">
          {QuickLinks.map((link) => (
            <li
              key={link.title}
              className={`${
                searchActive
                  ? `${link.delayOpen} translate-x-0 opacity-100 transition-all  duration-[400ms] ease-[ease]`
                  : `translate-x-[60px] opacity-0  `
              } `}
            >
              <Link
                href={"#"}
                className={` block w-full py-2 px-[50px] font-sans text-sm font-light text-[#1d1d1f] hover:bg-[#f5f5f5] hover:text-[#2997ff]`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DesktopSearch;
