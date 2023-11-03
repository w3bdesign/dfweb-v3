import { Variants, motion } from "framer-motion";

import { IAnimateBounceProps } from "./types/Animations.types";

const bounceVariants: Variants = {
  offscreen: {
    y: 30,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1.5
    }
  }
};

/**
 * Bounce in content when content becomes visible in viewport
 * @function BounceInScroll
 * @param {ReactNode} children - Children content to render
 * @param {string} cssClass - CSS classes to apply to component
 * @param {"some" | "all" | number} viewAmount - Amount of component needed to be visible before animating
 * @returns {JSX.Element} - Rendered component
 */

const BounceInScroll = ({ children, cssClass, viewAmount }: IAnimateBounceProps) => (
  <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: viewAmount || 0.2 }}
    className={cssClass}
    data-testid="bounceinscroll"
  >
    <motion.div variants={bounceVariants}>{children}</motion.div>
  </motion.div>
);

export default BounceInScroll;
