import MobileNav from "app/(components)/MobileNav";
import DesktopNav from "app/(components)/DesktopNav";

const Navbar = () => {
  return (
    <div>
      <MobileNav />
      <DesktopNav />
    </div>
  );
};

export default Navbar;
