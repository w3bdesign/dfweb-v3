import { motion } from "framer-motion";

import { IAnimateWithDelayProps } from "./types/Animations.types";

const FadeDown = ({ children, cssClass, delay }: IAnimateWithDelayProps) => {
  const fadeDownVariants = {
    initial: { opacity: 0, y: -50 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { delay, type: "spring", duration: 0.5, stiffness: 120 }
    }
  };
  return (
    <motion.div
      className={cssClass}
      variants={fadeDownVariants}
      initial="initial"
      animate="animate">
      {children}
    </motion.div>
  );
};

export default FadeDown;
