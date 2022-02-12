import { AnimatePresence, motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface IAnimateProps {
  children: ReactNode;
  cssClass?: string;
}

interface IAnimateWithDelayProps {
  children: ReactNode;
  cssClass?: string;
  delay: number;
}

export const PageTransition = ({ children, cssClass }: IAnimateProps) => {
  const pageTransitionVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.0 } },
    exit: { opacity: 0 }
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className={cssClass}
        variants={pageTransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export const BounceInWhenVisible = ({ children, cssClass }: IAnimateProps) => {
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
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={cssClass}
    >
      <motion.div variants={bounceVariants}>{children}</motion.div>
    </motion.div>
  );
};

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

export const ScaleInItem = ({ children, cssClass }: IAnimateProps) => {
  const scaleInItemVariants: Variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 1.7 }
  };
  return (
    <motion.span variants={scaleInItemVariants} className={cssClass}>
      {children}
    </motion.span>
  );
};

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
      animate="animate"
    >
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
