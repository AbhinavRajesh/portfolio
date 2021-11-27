import Image from "next/image";

import Logo from "@public/assets/logo-gray.svg";

const Footer = () => {
  return (
    <div className="flex flex-col px-4 shadow-inverse-sm mt-[52px]">
      <div className="flex mt-[28px] justify-between items-start">
        <div className="flex flex-col items-start flex-[2]">
          <Image src={Logo} alt="AR" />
          <small className="text-[12px]">UI/UX Designer</small>
          <small className="text-[12px]">Full Stack Developer</small>
        </div>
        <div className="flex flex-col text-dark flex-1">
          <span>Home</span>
          <span>Blog</span>
          <span>Projects</span>
        </div>
      </div>
      <span className="text-xs text-center pb-4 font-medium mt-[20px]">
        Built with <span className="text-[#FF0000]">❤️</span>
      </span>
    </div>
  );
};

export default Footer;
