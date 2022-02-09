import { motion } from "framer-motion";

export const FadeInWhenVisible = ({ children }: any) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.3, staggerChildren: 10.5 }}
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: -50 }
    }}>
    {children}
  </motion.div>
);
