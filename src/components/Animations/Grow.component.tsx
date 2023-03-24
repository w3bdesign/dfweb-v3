import { motion } from "framer-motion";

import { IGrowProps } from "./types/Animations.types";

/**
 * A component that animates its children to grow in size.
 * @param props Props for the Grow component.
 * @returns A component that animates its children to grow in size.
 */
const Grow = ({ duration = 0.5, delay = 0, easing = [0.42, 0, 0.58, 1], children }: IGrowProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration, delay, ease: easing }}
      data-testid="grow"
    >
      {children}
    </motion.div>
  );
};

export default Grow;
