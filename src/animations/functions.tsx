import { motion } from "framer-motion";
import { ReactNode } from "react";

import { bounceVariants, scaleInVariant, scaleInItemVariant } from "./variants";

interface IAnimateProps {
  children: ReactNode;
  cssClass?: string;
}

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
  <motion.span initial="hidden" animate="visible" variants={scaleInVariant} className={cssClass}>
    {children}
  </motion.span>
);

export const ScaleInItem = ({ children, cssClass }: IAnimateProps) => (
  <motion.span variants={scaleInItemVariant} className={cssClass}>
    {children}
  </motion.span>
);
