import { ConnectivityData } from "app/(constants)";
import Tile from "app/(components)/Tile";
const Connectivity = () => {
  return (
    <div className="bg-[#f5f5f7] pt-[130px]">
      <h1 className="text-center font-display text-[32px] font-bold md:text-[48px]">
        A magical connection to <br /> your devices.
      </h1>
      <div>
        <ul className="mx-auto flex max-w-[1400px] flex-wrap justify-around pt-[27px]">
          {ConnectivityData.map((item, index) => (
            <Tile key={item.id} index={index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Connectivity;
