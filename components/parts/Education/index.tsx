import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Card from "@components/ui/Card";
import { useEffect } from "react";

const education: Parameters<typeof Card>[0][] = [
  {
    title: "B.Tech in CSE",
    value: "9.17 GPA",
    description: "School Of Engineering, CUSAT, India",
    extras: "2019-23",
  },
  {
    title: "Higher Secondary Education in CS",
    description: "Saraswathi Vidyanikethan, Elamakkara, India",
    value: "88.8%",
    extras: "2017-19",
  },
];

const Education = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.3,
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
    <div ref={ref} className="flex flex-col mt-[52px]">
      <motion.h2 className="text-lg font-bold text-black" animate={animation}>
        Education
      </motion.h2>
      {education?.map(({ title, value, description, extras }, i) => (
        <Card
          title={title}
          value={value}
          description={description}
          extras={extras}
          delay={i / 10 + 0.2}
          inView={inView}
          key={i}
        />
      ))}
    </div>
  );
};

export default Education;
