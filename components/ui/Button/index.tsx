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
        className={`px-[21px] py-[9px] font-semibold text-white bg-primary_light rounded-[4px] ${extraClassNames}`}
      >
        {text}
      </a>
    </Link>
  );
};

export default Button;
