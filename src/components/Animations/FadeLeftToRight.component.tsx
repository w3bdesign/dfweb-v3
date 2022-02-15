import { motion, Variants } from "framer-motion";

import { IAnimateAtOnceWithDelayProps } from "./types/Animations.types";

const FadeLeftToRight = ({
  children,
  cssClass,
  delay,
  staggerDelay,
  animateAtOnce
}: IAnimateAtOnceWithDelayProps) => {
  const FadeLeftToRightVariants: Variants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: staggerDelay ? staggerDelay : 0.5,
        delay,
        ease: "easeInOut",
        staggerDirection: 1
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: staggerDelay ? staggerDelay : 0.5,
        staggerDirection: -1
      }
    }
  };
  return (
    <motion.div
      initial="hidden"
      animate={animateAtOnce ? "visible" : "hidden"}
      variants={FadeLeftToRightVariants}
      className={cssClass}
    >
      {children}
    </motion.div>
  );
};

export default FadeLeftToRight;
