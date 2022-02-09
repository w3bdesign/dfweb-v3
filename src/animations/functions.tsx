import { motion } from "framer-motion";
import { ReactNode } from "react";

import { bounceVariants, scaleInVariant, scaleInItemVariant } from "./variants";

interface IBounceProps {
  children: ReactNode;
}

interface IScaleInProps {
  children: ReactNode;
  cssClass?: string;
}

export const BounceInWhenVisible = ({ children }: IBounceProps) => (
  <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
    <motion.div variants={bounceVariants}>{children}</motion.div>
  </motion.div>
);

export const ScaleIn = ({ children, cssClass }: IScaleInProps) => (
  <motion.span initial="hidden" animate="visible" variants={scaleInVariant} className={cssClass}>
    {children}
  </motion.span>
);

export const ScaleInItem = ({ children }: IBounceProps) => (
  <motion.span variants={scaleInItemVariant}>{children}</motion.span>
);
