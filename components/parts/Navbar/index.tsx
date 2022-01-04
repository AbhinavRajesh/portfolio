import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import NavItem, { NavProps } from "./NavItem";
import NavGroup from "./NavGroup";

// All logos
import HomeIcon from "@public/icons/home.svg";
import BlogIcon from "@public/icons/blog.svg";
import ChatbotishIcon from "@public/icons/chatbotish.svg";
import AuraIcon from "@public/icons/aura.svg";
import SahaayIcon from "@public/icons/sahaay.svg";
import ProjectIcon from "@public/icons/projects.svg";
import GithubIcon from "@public/icons/github.svg";
import TwitterIcon from "@public/icons/twitter.svg";
import LinkedInIcon from "@public/icons/linkedin.svg";
import GoogleIcon from "@public/icons/google.svg";
import Logo from "@components/ui/Logo";

interface NavGroupItemsProps {
  groupName: string;
  items: NavProps[];
}

const navGroupItems: NavGroupItemsProps[] = [
  {
    groupName: "Projects",
    items: [
      {
        name: "Chatbotish",
        icon: ChatbotishIcon,
        externalLink: false,
        to: "/projects/Chatbotish",
      },
      {
        name: "Aura",
        icon: AuraIcon,
        externalLink: false,
        to: "/projects/Aura",
      },
      {
        name: "Sahaay",
        icon: SahaayIcon,
        externalLink: false,
        to: "/projects/Sahaay",
      },
      {
        name: "View all projects",
        icon: ProjectIcon,
        externalLink: false,
        to: "/projects",
      },
    ],
  },
  {
    groupName: "Socials",
    items: [
      {
        name: "Github",
        externalLink: true,
        icon: GithubIcon,
        to: "https://github.com/AbhinavRajesh",
      },
      {
        name: "Twitter",
        externalLink: true,
        icon: TwitterIcon,
        to: "https://twitter.com/_AbhinavRajesh_",
      },
      {
        name: "LinkedIn",
        externalLink: true,
        icon: LinkedInIcon,
        to: "https://linkedin.com/in/abhinavrajesh",
      },
      {
        name: "Mail",
        externalLink: true,
        icon: GoogleIcon,
        to: "mailto:abhinavrajesh49@gmail.com",
      },
    ],
  },
];

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  return (
    <>
      <div className="z-10 max-h-[54px] w-full h-full flex items-center justify-center fixed bg-white dark:bg-black top-0 left-0 shadow-sm dark:shadow-[#eeeeee3d] px-4 tablet:px-[32px]">
        <div
          className="flex flex-col absolute left-[16px] tablet:left-[32px] cursor-pointer"
          onClick={toggleSidebar}
        >
          <span className="h-[2px] w-[16px] bg-black dark:bg-white"></span>
          <span className="h-[2px] w-[16px] bg-black dark:bg-white mt-[2px]"></span>
          <span className="h-[2px] w-[16px] bg-black dark:bg-white mt-[2px]"></span>
        </div>
        <Logo />
      </div>
      <motion.div
        className="z-40 fixed top-0 left-0 h-screen overflow-x-hidden w-screen"
        initial={{
          x: "-100vw",
        }}
        animate={{
          x: sidebarVisible ? 0 : "-100vw",
        }}
        transition={{
          duration: sidebarVisible ? 0.3 : 0,
          type: "tween",
        }}
      >
        <motion.div
          className="absolute w-full h-full top-0 left-0"
          animate={{
            opacity: sidebarVisible ? 1 : 0,
            background: sidebarVisible ? "rgba(0, 0, 0, 0.8)" : "rgb(0, 0, 0)",
          }}
          transition={{
            delay: sidebarVisible ? 0.15 : 0,
            duration: sidebarVisible ? 0.3 : 0,
            type: "tween",
          }}
          onClick={() => setSidebarVisible(false)}
        ></motion.div>
        <motion.div className="flex text-xs flex-col w-[320px] bg-white dark:bg-gradient-to-t dark:from-[#111827] dark:to-black h-full z-10 absolute left-0 top-0 px-4">
          <div className="z-10 max-h-[54px] w-full h-full flex items-center justify-center">
            <div
              className="flex flex-col absolute left-[16px] tablet:left-[32px] text-xl cursor-pointer text-black dark:text-white"
              onClick={toggleSidebar}
            >
              &times;
            </div>
            <Logo />
          </div>
          <NavItem icon={HomeIcon} name="Home" to="/" externalLink={false} />
          <NavItem
            icon={BlogIcon}
            name="Blog"
            to="https://blog.abhinavrajesh.com"
            externalLink={true}
          />
          {navGroupItems.map((navGroup, i) => (
            <NavGroup
              groupName={navGroup.groupName}
              navItems={navGroup.items}
              key={i}
            />
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
