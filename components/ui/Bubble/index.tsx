import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface Props {
  text: string;
  inView?: boolean;
  delay?: number;
}

const Bubble = ({ text, inView = true, delay = 0 }: Props) => {
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.2,
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
    <motion.span
      animate={animation}
      className="py-1 px-2 text-xs font-semibold text-white bg-primary_light leading-[17px] m-[2px] rounded-[4px]"
    >
      {text}
    </motion.span>
  );
};

export default Bubble;
