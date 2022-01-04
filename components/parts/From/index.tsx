import Image from "next/image";

import Map from "@public/assets/map.svg";
import { HiOutlineLocationMarker } from "react-icons/hi";

const MapPin = () => {
  return (
    <div className="p-[3px] tablet:p-[4px] bg-white flex items-center justify-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 shadow-primary_light shadow-2xl dark:shadow-primary_dark">
      <div className="w-[30px] h-[30px] tablet:w-[35px] tablet:h-[35px] bg-primary_light dark:bg-primary_dark rounded-full"></div>
    </div>
  );
};

const From = () => {
  return (
    <div className="flex flex-col mt-[52px] tablet:max-w-[650px] tablet:mx-auto tablet:w-full">
      <h2 className="text-xl font-bold text-black dark:text-white">From</h2>
      <div className="mt-6 relative">
        <Image
          src={Map}
          alt="Kerala, India Map View"
          width={800}
          height={400}
          layout="responsive"
          quality={100}
          className="rounded-[10px]"
        />
        <MapPin />
      </div>
      <div className="flex items-center justify-end mt-[5px] text-dark dark:text-text_dark">
        <HiOutlineLocationMarker className="w-5 h-5" />
        <span className="text-dark dark:text-text_dark text-xs ml-1">
          Kerala, India
        </span>
      </div>
    </div>
  );
};

export default From;
