import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type GrowProps = {
  duration?: number;
  delay?: number;
  easing?: [number, number, number, number];
  children: ReactNode;
};

const Grow: React.FC<GrowProps> = ({
  duration = 0.5,
  delay = 0,
  easing = [0.42, 0, 0.58, 1],
  children
}) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration, delay, ease: easing }}>
      {children}
    </motion.div>
  );
};

export default Grow;
