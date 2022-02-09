import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface IBounceProps {
  children: ReactNode;
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

export const BounceInWhenVisible = ({ children }: IBounceProps) => (
  <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.8 }}
    id="projectdiv"
    className="p-6 text-lg text-black  bg-white rounded shadow">
    <motion.div variants={bounceVariants}>{children}</motion.div>
  </motion.div>
);
