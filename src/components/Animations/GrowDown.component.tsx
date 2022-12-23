import { Variants } from "framer-motion";

// CircleCI doesn't like import { motion } from "framer-motion" here, so we use require
const { motion } = require("framer-motion");

import { IAnimateStaggerWithDelayProps } from "./types/Animations.types";

/**
 * Grow content down. Needs to be used with GrowDownItem
 * @function GrowDown
 * @param {ReactNode} children - Children content to render
 * @param {string} cssClass - CSS classes to apply to component
 * @param {number} delay - Time to wait before starting animation
 * @param {number} staggerDelay - Time to wait before starting animation for children items
 * @param {boolean} animateNotReverse - Start animation backwards
 * @returns {JSX.Element} - Rendered component
 */

const GrowDown = ({
  children,
  cssClass,
  delay,
  staggerDelay,
  animateNotReverse
}: IAnimateStaggerWithDelayProps): JSX.Element => {
  const GrowDownVariants: Variants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: staggerDelay ? staggerDelay : 0.5,
        delay,
        duration: 0.4,
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
      animate={animateNotReverse ? "visible" : "hidden"}
      variants={GrowDownVariants}
      className={cssClass}
      data-testid="GrowDown"
    >
      {children}
    </motion.div>
  );
};

export default GrowDown;
