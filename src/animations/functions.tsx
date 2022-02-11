import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

import {
  bounceVariants,
  scaleInVariants,
  scaleInItemVariants,
  fadeDownVariants,
  fadeUpVariants
} from "./variants";

interface IAnimateProps {
  children: ReactNode;
  cssClass?: string;
}

interface IAnimateWithDelayProps {
  children: ReactNode;
  cssClass?: string;
  delay: number;
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

export const ScaleIn = ({ children, cssClass, delay }: IAnimateWithDelayProps) => {
  const scaleInVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
        delay,
        ease: "easeInOut"
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren"
      }
    }
  };
  return (
    <motion.span initial="hidden" animate="visible" variants={scaleInVariants} className={cssClass}>
      {children}
    </motion.span>
  );
};

export const ScaleInItem = ({ children, cssClass }: IAnimateProps) => (
  <motion.span variants={scaleInItemVariants} className={cssClass}>
    {children}
  </motion.span>
);

export const FadeDown = ({ children, cssClass, delay }: IAnimateWithDelayProps) => {
  const fadeDownVariants = {
    initial: { opacity: 0, y: -50 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { delay, type: "spring", duration: 0.5, stiffness: 120 }
    }
  };
  return (
    <motion.div
      className={cssClass}
      variants={fadeDownVariants}
      initial="initial"
      animate="animate">
      {children}
    </motion.div>
  );
};

export const FadeUp = ({ children, cssClass, delay }: IAnimateWithDelayProps) => {
  const fadeUpVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { delay, type: "spring", duration: 0.5, stiffness: 120 }
    }
  };
  return (
    <motion.div className={cssClass} variants={fadeUpVariants} initial="initial" animate="animate">
      {children}
    </motion.div>
  );
};
