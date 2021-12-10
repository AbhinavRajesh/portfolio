import { motion } from "framer-motion";

import Button from "@components/ui/Button";
import AboutSection from "./AboutSection";

const About = () => {
  return (
    <>
      <AboutSection
        content={[
          <div key="hero">
            Hey, I&apos;m Abhinav Rajesh. I&apos;m a passionate UI/ UX Designer
            and{" "}
            <span className="font-bold text-primary_light dark:text-primary_dark">
              Full Stack Developer
            </span>{" "}
            based in India. Web development has transformed from a spark of
            interest to an all out passion and an area that I want to master.
          </div>,
        ]}
        delay={0}
      />
      <AboutSection
        content={[
          <div key="hero">
            I&apos;m currently pursuing my bachelor&apos;s degree from{" "}
            <a
              href="https://soe.cusat.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary_light dark:text-primary_dark"
            >
              School of Engineering, CUSAT, India
            </a>{" "}
            and expected to graduate on 2023. I have always wanted to work and
            grow with a team of like minded and passionate creatives.
          </div>,
        ]}
        delay={0.1}
      />
      <AboutSection
        content={
          "Being a developer has given me the ability to craft digital things that not only look cool and interesting but that can be moved and interacted with. Enabling me to give great design life in a sense."
        }
        delay={0.2}
      />
      <AboutSection
        content={[
          <div key="hero">
            I occationally write about technology at my{" "}
            <a
              href="https://blog.abhinavrajesh.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary_light dark:text-primary_dark"
            >
              blog.
            </a>
          </div>,
        ]}
        delay={0.3}
      />
      <AboutSection
        content={[
          <div key="hero">
            You can find me on{" "}
            <a
              href="https://twitter.com/_AbhinavRajesh_"
              className="font-bold text-primary_light dark:text-primary_dark"
            >
              Twitter
            </a>{" "}
            where I talk about technology, or on{" "}
            <a
              href="https://github.com/AbhinavRajesh"
              className="font-bold text-primary_light dark:text-primary_dark"
            >
              Github
            </a>{" "}
            where I&apos;m building in the open.
          </div>,
        ]}
        delay={0.4}
      />
      <motion.div
        className="flex mt-[28px] text-[14px] tablet:max-w-[650px] tablet:mx-auto tablet:w-full"
        transition={{
          duration: 0.3,
          delay: 0.5,
          type: "tween",
        }}
        initial={{
          y: "30px",
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
      >
        <Button to="/" text="Updates" key="update" extraClassNames="mr-[8px]" />
        <Button to="/projects" text="Checkout my projects" key="projects" />
      </motion.div>
    </>
  );
};

export default About;
