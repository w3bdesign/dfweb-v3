import { Variants, motion } from "framer-motion";

import { IAnimateProps } from "./types/Animations.types";

const BounceIn = ({ children, cssClass }: IAnimateProps) => {
  const bounceVariants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.0
      }
    }
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={cssClass}>
      <motion.div variants={bounceVariants}>{children}</motion.div>
    </motion.div>
  );
};

export default BounceIn;
