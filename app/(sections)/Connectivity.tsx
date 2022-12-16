import { ConnectivityData } from "app/(constants)";
import Tile from "app/(components)/Tile";
const Connectivity = () => {
  return (
    <div className="bg-[#f5f5f7] pt-[76px] md:pt-[130px]  lg:pt-[150px]">
      <h1 className="text-center font-display text-[32px] font-bold text-[#1d1d1f] md:text-[48px]">
        A magical connection to <br /> your devices.
      </h1>
      <div>
        <ul className="mx-auto flex max-w-[1400px] flex-wrap justify-around pb-[52px] pt-[27px] md:pt-[52px]">
          {ConnectivityData.map((item, index) => (
            <Tile key={item.id} index={index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Connectivity;
