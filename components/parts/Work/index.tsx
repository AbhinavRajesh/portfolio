import Card from "@components/ui/Card";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const workExperience: Parameters<typeof Card>[0][] = [
  {
    title: (
      <div className="flex flex-col">
        <span className="m-0 leading-[19px]">DevRel Engineering Intern</span>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="m-0 leading-[17px] text-xs font-bold text-primary_light hover:text-blue-400 transition-colors duration-150 ease-in"
        >
          @GitHub
        </a>
      </div>
    ),
    value: "Feb. 2022 - Present",
    description:
      "Working on mini-projects that will help GitHub better serve developers in India",
  },
  {
    title: (
      <div className="flex flex-col">
        <span className="m-0 leading-[19px]">Software Engineer Intern</span>
        <a
          href="https://growth.cx"
          target="_blank"
          rel="noopener noreferrer"
          className="m-0 leading-[17px] text-xs font-bold text-primary_light hover:text-blue-400 transition-colors duration-150 ease-in"
        >
          @Growth.CX
        </a>
      </div>
    ),
    value: "Mar. 2021 - Jan. 2022",
    description:
      "Responsible for making Frontend of their upcoming product using React, TypeScript, AntD and TailwindCSS",
  },
];

const Work = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const { ref, inView } = useInView();
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
    <div
      ref={ref}
      className="flex flex-col mt-[52px] tablet:max-w-[650px] tablet:mx-auto tablet:w-full"
    >
      <motion.h2
        className="text-xl font-bold text-black dark:text-white"
        animate={animation}
      >
        Work Experience
      </motion.h2>
      {workExperience?.map(({ title, value, description, extras }, i) => (
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

export default Work;
