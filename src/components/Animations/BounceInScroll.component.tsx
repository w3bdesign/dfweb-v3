import { Variants, motion } from "framer-motion";

import { IAnimateProps } from "./types/Animations.types";

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

/**
 * Bounce in content when content becomes visible in viewport
 * @function BounceInScroll
 * @param {ReactNode} children - Children content to render
 * @param {string} cssClass - CSS classes to apply to component
 * @returns {JSX.Element} - Rendered component
 */

const BounceInScroll = ({ children, cssClass }: IAnimateProps): JSX.Element => (
  <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.4 }}
    className={cssClass}>
    <motion.div variants={bounceVariants}>{children}</motion.div>
  </motion.div>
);

export default BounceInScroll;
