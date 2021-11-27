import Image from "next/image";
import Link from "next/link";

import ExternalLink from "@public/icons/link.svg";

export interface NavProps {
  name: string;
  icon: any;
  externalLink: boolean;
  to: string;
}

const NavItem = ({ name, icon, externalLink, to }: NavProps) => {
  if (externalLink)
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between"
      >
        <span className="px-4 my-1 flex items-center font-bold text-dark">
          <span className="mr-[6px] flex items-center justify-center">
            <Image src={icon} alt={name} height={14} width={14} />
          </span>
          <span>{name}</span>
        </span>
        <span className="pr-4 flex items-center justify-center">
          <Image src={ExternalLink} alt="Link" />
        </span>
      </a>
    );

  return (
    <Link href={to}>
      <a className="px-4 my-1 font-bold text-dark flex items-center">
        <span className="mr-[6px] flex items-center justify-center">
          <Image src={icon} alt={name} height={14} width={14} />
        </span>
        <span>{name}</span>
      </a>
    </Link>
  );
};

export default NavItem;
