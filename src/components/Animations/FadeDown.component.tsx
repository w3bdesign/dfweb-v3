//import { motion } from "framer-motion";
const { motion } = require("framer-motion");

import { IAnimateWithDelayProps } from "./types/Animations.types";

/**
 * Fade down content animation
 * @function FadeDown
 * @param {ReactNode} children - Children content to render
 * @param {string} cssClass - CSS classes to apply to component
 * @param {number} delay - Time to wait before starting animation
 * @returns {JSX.Element} - Rendered component
 */

const FadeDown = ({ children, cssClass, delay }: IAnimateWithDelayProps): JSX.Element => {
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
      animate="animate"
    >
      {children}
    </motion.div>
  );
};

export default FadeDown;
