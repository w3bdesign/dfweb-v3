import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface IBounceProps {
  children: ReactNode;
}

interface IScaleInProps {
  children: ReactNode;
  cssClass?: string;
}

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

const scaleInVariant: Variants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
      delay: 2.8,
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

const scaleInItemVariant: Variants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 2.2 }
};

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
