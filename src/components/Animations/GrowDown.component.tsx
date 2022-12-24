import { Variants } from "framer-motion";

// CircleCI doesn't like import { motion } from "framer-motion" here, so we use require
const { motion } = require("framer-motion");

import { IAnimateProps } from "./types/Animations.types";

/**
 * Grow content down. Needs to be used with GrowDownItem
 * @function GrowDown
 * @param {ReactNode} children - Children content to render
 * @param {string} cssClass - CSS classes to apply to component
 * @param {number} delay - Time to wait before starting animation
 * @param {number} staggerDelay - Time to wait before starting animation for children items

 * @returns {JSX.Element} - Rendered component
 */

const GrowDown = ({ children, cssClass }: IAnimateProps): JSX.Element => {
  const GrowDownVariants: Variants = {
    closed: {
      transition: {
        staggerChildren: 0.3,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.3,
        staggerDirection: 1
      }
    }
  };

  /*
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
    }*/

  return (
    <motion.div
      initial="closed"
      animate="open"
      exit="closed"
      variants={GrowDownVariants}
      className={cssClass}
      data-testid="GrowDown">
      {children}
    </motion.div>
  );
};

export default GrowDown;
