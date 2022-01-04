import Link from "next/link";

interface Props {
  to: string;
  text: string;
  extraClassNames?: string;
}

const Button = ({ to, text, extraClassNames }: Props) => {
  return (
    <Link href={to}>
      <a
        className={`px-[21px] py-[9px] font-semibold text-white bg-primary_light hover:bg-blue-400 transition-colors duration-150 ease-in  dark:bg-primary_dark rounded-[4px] ${extraClassNames}`}
      >
        {text}
      </a>
    </Link>
  );
};

export default Button;
