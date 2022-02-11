import { motion } from "framer-motion";
import { ReactNode } from "react";

import { bounceVariants, scaleInVariants, scaleInItemVariants } from "./variants";

interface IAnimateProps {
  children: ReactNode;
  cssClass?: string;
}

/* Project */

export const BounceInWhenVisible = ({ children, cssClass }: IAnimateProps) => (
  <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.8 }}
    className={cssClass}>
    <motion.div variants={bounceVariants}>{children}</motion.div>
  </motion.div>
);

export const ScaleIn = ({ children, cssClass }: IAnimateProps) => (
  <motion.span initial="hidden" animate="visible" variants={scaleInVariants} className={cssClass}>
    {children}
  </motion.span>
);

export const ScaleInItem = ({ children, cssClass }: IAnimateProps) => (
  <motion.span variants={scaleInItemVariants} className={cssClass}>
    {children}
  </motion.span>
);
