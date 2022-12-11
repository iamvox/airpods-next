"use client";

type Overlay = {
  setOverlayActive: React.Dispatch<React.SetStateAction<boolean>>;
  overlayActive: boolean;
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
  searchActive: boolean;
};

const Overlay = ({
  setOverlayActive,
  overlayActive,
  setSearchActive,
  searchActive,
}: Overlay) => {
  return (
    <div
      className={`${
        overlayActive
          ? `fixed left-0 top-0  z-[100] hidden h-screen w-full bg-black opacity-[48%] transition-all duration-[400ms] ease-[ease] lg:block`
          : ""
      }`}
      onClick={() => {
        setOverlayActive(!overlayActive);
        setSearchActive(!searchActive);
      }}
    ></div>
  );
};

export default Overlay;
