import Image from "next/image";

import Map from "@public/assets/map.svg";
import LocationIcon from "@public/icons/location.svg";

const From = () => {
  return (
    <div className="flex flex-col mt-[52px] tablet:max-w-[650px] tablet:mx-auto tablet:w-full">
      <h2 className="text-lg font-bold text-black">From</h2>
      <div className="mt-6">
        <Image
          src={Map}
          alt="Kerala, India Map View"
          width={800}
          height={400}
          layout="responsive"
          quality={100}
          className="rounded-[10px]"
        />
      </div>
      <div className="flex items-center justify-end">
        <Image src={LocationIcon} alt="+" height={14} width={14} />
        <span className="text-dark text-xs ml-1">Kerala, India</span>
      </div>
    </div>
  );
};

export default From;
