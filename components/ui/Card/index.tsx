import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  title: string | JSX.Element;
  value: string | JSX.Element;
  description: string | JSX.Element;
  extras?: string | JSX.Element;
  delay?: number;
  inView?: boolean;
}

const Card = ({
  title,
  value,
  description,
  extras,
  inView,
  delay = 0,
}: Props) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const animation = useAnimation();

  useEffect(() => {
    if (loaded) return;
    if (inView) {
      setLoaded(true);
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.3,
          delay: delay,
        },
      });
    } else {
      animation.start({
        y: "30px",
        opacity: 0,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <motion.div animate={animation} className="flex flex-col mt-[24px]">
      <div className="flex items-start justify-between">
        <span className="text-sm font-semibold text-black dark:text-white">
          {title}
        </span>
        <span className="text-xs font-medium text-dark dark:text-text_dark leading-[19px]">
          {value}
        </span>
      </div>
      <div className="italic text-xs font-medium leading-[17px] mt-1">
        {description}
      </div>
      {extras && (
        <div className="italic text-xs font-medium leading-[17px] mt-1">
          {extras}
        </div>
      )}
    </motion.div>
  );
};

export default Card;
