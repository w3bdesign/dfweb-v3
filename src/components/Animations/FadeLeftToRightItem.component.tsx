import { Variants } from "framer-motion";

// CircleCI doesn't like import { motion } from "framer-motion" here, so we use require
const { motion } = require("framer-motion");

import { IAnimateProps } from "./types/Animations.types";

/**
 * Fade content left to right. Needs to be used with FadeLeftToRight as parent container
 * @function FadeLeftToRightItem
 * @param {ReactNode} children - Children content to render
 * @param {string} cssClass - CSS classes to apply to component
 * @returns {JSX.Element} - Rendered component
 */

const FadeLeftToRightItem = ({ children, cssClass }: IAnimateProps): JSX.Element => {
  const FadeLeftToRightItemVariants: Variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -200, height: 0 }
  };
  return (
    <motion.div
      variants={FadeLeftToRightItemVariants}
      className={cssClass}
      data-testid="fadelefttorightitem"
    >
      {children}
    </motion.div>
  );
};

export default FadeLeftToRightItem;
