import { Variants, motion } from "framer-motion";

import { IAnimateProps } from "./types/Animations.types";

const FadeLeftToRightItem = ({ children, cssClass }: IAnimateProps) => {
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

export default FadeLeftToRightItem;
