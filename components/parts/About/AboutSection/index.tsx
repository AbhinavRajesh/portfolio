import { motion } from "framer-motion";

interface Props {
  content: string | JSX.Element[];
  delay: number;
}

const AboutSection = ({ content, delay }: Props) => {
  return (
    <motion.div
      transition={{
        duration: 0.3,
        delay: delay,
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
      className="mt-[28px] tablet:max-w-[650px] tablet:mx-auto tablet:w-full"
    >
      {content}
    </motion.div>
  );
};

export default AboutSection;
