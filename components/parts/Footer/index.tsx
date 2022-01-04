import Logo from "@components/ui/Logo";

const Footer = () => {
  return (
    <div className="pt-[52px] -mx-4">
      <div className="flex flex-col px-4 shadow-inverse-sm dark:shadow-[#eeeeee3d] dark:text-text_dark">
        <div className="flex mt-[28px] justify-between items-start tablet:max-w-[650px] tablet:mx-auto tablet:w-full">
          <div className="flex flex-col items-start flex-[2]">
            <Logo />
            <small className="text-[12px]">UI/UX Designer</small>
            <small className="text-[12px]">Full Stack Developer</small>
          </div>
          <div className="flex flex-col text-dark dark:text-text_dark flex-1">
            <span>Home</span>
            <span>Blog</span>
            <span>Projects</span>
          </div>
        </div>
        <span className="text-xs text-center pb-4 font-medium mt-[20px]">
          Built with <span className="text-[#FF0000]">❤️</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
