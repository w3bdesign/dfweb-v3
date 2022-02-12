import { Variants } from "framer-motion";

export const pageTransitionVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.0 } },
  exit: { opacity: 0 }
};

export const fadeDownVariants: Variants = {
  initial: { opacity: 0, y: -50 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 0.5, stiffness: 120 }
  }
};

export const fadeUpVariants: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 0.5, stiffness: 120 }
  }
};

export const secondHeaderVariants: Variants = {
  initial: { opacity: 0, y: -50 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { delay: 2.6, type: "spring", duration: 0.5, stiffness: 120 }
  }
};

export const mainiconVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 3.1, type: "spring", duration: 0.5, stiffness: 150 }
  }
};

export const seciconVariants: Variants = {
  initial: { scale: 2.5 },
  animate: {
    scale: 1,
    transition: { type: "spring", duration: 0.5, stiffness: 150, staggerChildren: 5.9 }
  }
};

/** */

export const bounceVariants: Variants = {
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

export const scaleInVariants: Variants = {
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

export const scaleInItemVariants: Variants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 1.7 }
};
