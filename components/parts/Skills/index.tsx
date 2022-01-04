import Bubble from "@components/ui/Bubble";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const skills: string[] = [
  "React",
  "NextJS",
  "TypeScript",
  "JavaScript",
  "C",
  "C++",
  "Python",
  "GIT",
  "GitHub",
  "NodeJS",
  "Express",
  "SQL",
  "MongoDB",
  "Flask",
  "Java",
  "PHP",
  "SASS",
  "TailwindCSS",
  "React Native",
  "Figma",
  "Azure",
  "Firebase",
  "Heroku",
  "Linux",
  "Docker",
  "GraphQL",
  "PostgreSQL",
  "AntD",
];

const Skills = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const currentlyLearningAnimation = useAnimation();

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
      currentlyLearningAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.3,
          delay: 1.1,
        },
      });
    } else {
      animation.start({
        y: "30px",
        opacity: 0,
      });
      currentlyLearningAnimation.start({
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
        animate={animation}
        className="text-xl font-bold text-black dark:text-white"
      >
        Technologies I&apos;m good at
      </motion.h2>
      <div className="flex flex-wrap mt-6">
        {skills?.map((skill, i) => (
          <Bubble text={skill} key={i} delay={i / 30 + 0.05} inView={inView} />
        ))}
      </div>
      <motion.div
        animate={currentlyLearningAnimation}
        className="flex items-center mt-6"
      >
        <p className="text-black dark:text-white font-semibold text-sm mr-[8px]">
          I&apos;m currently learning:
        </p>
        <Bubble text="Golang" />
      </motion.div>
    </div>
  );
};

export default Skills;
