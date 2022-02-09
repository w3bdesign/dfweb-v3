import { Variants } from "framer-motion";

export const pageTransitionVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.0 } },
  exit: { opacity: 0 }
};

export const introVariants = {
  initial: { opacity: 0, y: -50 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.1,
      type: "spring",
      duration: 0.5,
      stiffness: 120
    }
  }
};

export const firstHeaderVariants: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { delay: 2.1, type: "spring", duration: 0.5, stiffness: 120 }
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
