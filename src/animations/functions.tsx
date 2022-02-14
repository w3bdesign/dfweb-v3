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
  staggerDelay?: number;
  animateAtOnce: boolean;
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
        exit="exit">
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
      className={cssClass}>
      <motion.div variants={bounceVariants}>{children}</motion.div>
    </motion.div>
  );
};

export const FadeLeftToRight = ({
  children,
  cssClass,
  delay,
  staggerDelay,
  animateAtOnce
}: IAnimateWithDelayProps) => {
  const FadeLeftToRightVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: staggerDelay ? staggerDelay : 0.5,
        delay,
        ease: "easeInOut",
        staggerDirection: 1
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: staggerDelay ? staggerDelay : 0.5,
        staggerDirection: -1
      }
    }
  };
  return (
    <motion.div
      initial="hidden"
      animate={animateAtOnce ? "visible" : "hidden"}
      variants={FadeLeftToRightVariants}
      className={cssClass}>
      {children}
    </motion.div>
  );
};

export const FadeLeftToRightItem = ({ children, cssClass }: IAnimateProps) => {
  const FadeLeftToRightItemVariants: Variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 }
  };
  return (
    <motion.span variants={FadeLeftToRightItemVariants} className={cssClass}>
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
