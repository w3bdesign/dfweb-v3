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

const BounceInScroll = ({ children, cssClass }: IAnimateProps) => (
  <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.3 }}
    className={cssClass}
  >
    <motion.div variants={bounceVariants}>{children}</motion.div>
  </motion.div>
);

export default BounceInScroll;
