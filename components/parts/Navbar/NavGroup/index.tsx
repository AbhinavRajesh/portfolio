import NavItem, { NavProps } from "../NavItem";

interface Props {
  groupName: string;
  navItems: NavProps[];
}

const NavGroup = ({ groupName, navItems }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center px-4 font-semibold text-light_gray text-[12px] py-[10px]">
        <span className="mr-[6px]">{groupName}</span>
        <span className="h-[1px] bg-dark w-full"></span>
      </div>
      {navItems.map((item, i) => (
        <NavItem
          name={item.name}
          externalLink={item.externalLink}
          icon={item.icon}
          to={item.to}
          key={i}
        />
      ))}
    </div>
  );
};

export default NavGroup;
