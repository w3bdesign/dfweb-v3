import { Variants } from "framer-motion";

// CircleCI doesn't like import { motion } from "framer-motion" here, so we use require
const { motion } = require("framer-motion");

import { IAnimateProps } from "./types/Animations.types";

/**
 * Grow items down. Needs to be used with GrowDown as parent container
 * @function GrowDownItem
 * @param {ReactNode} children - Children content to render
 * @param {string} cssClass - CSS classes to apply to component
 * @returns {JSX.Element} - Rendered component
 */

const GrowDownItem = ({ children, cssClass }: IAnimateProps): JSX.Element => {
  const GrowDownItemVariants: Variants = {
    visible: { opacity: 1, y: 0, height: 75 },
    hidden: { opacity: 0, y: -40, height:0 }
  };
  return (
    <motion.div
      variants={GrowDownItemVariants}
      className={cssClass}
      data-testid="GrowDownitem"
    >
      {children}
    </motion.div>
  );
};

export default GrowDownItem;
