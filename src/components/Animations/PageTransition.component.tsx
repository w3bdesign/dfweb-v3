import { Variants, AnimatePresence, motion } from "framer-motion";

import { IAnimateProps } from "./types/Animations.types";

const PageTransition = ({ children, cssClass }: IAnimateProps) => {
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

export default PageTransition;
