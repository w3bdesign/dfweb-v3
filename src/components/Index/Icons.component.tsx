import { motion } from "framer-motion";

import { FaReact, FaVuejs, FaPhp } from "react-icons/fa";
import { SiTypescript, SiWordpress } from "react-icons/si";

import { mainiconVariants, seciconVariants } from "../../animations/variants";

/**
 * Renders SVG icons that are used on the front page
 * Uses GSAP for animations to show the SVGs
 * @function Icons
 * @returns {JSX.Element} - Rendered component
 */

const list = {
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

const item = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 2.2 }
};

const Icons = (): JSX.Element => (
  <motion.span
    initial="hidden"
    animate="visible"
    variants={list}
    className="flex justify-center p-6">
    <motion.span variants={item}>
      <FaReact className="ikoner mr-6" title="React ikon" size="3em" />
    </motion.span>
    <motion.span variants={item}>
      <FaVuejs className="ikoner mr-6" title="Vue ikon" size="3em" />
    </motion.span>
    <motion.span variants={item}>
      <SiTypescript className="ikoner mr-6" title="Typescript ikon" size="3em" />
    </motion.span>
    <motion.span variants={item}>
      <SiWordpress className="ikoner mr-6" title="Wordpress ikon" size="3em" />
    </motion.span>
    <motion.span variants={item}>
      <FaPhp className="ikoner mr-6" title="PHP ikon" size="3em" />
    </motion.span>
  </motion.span>
);

export default Icons;
