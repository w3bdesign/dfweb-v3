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

const Icons = (): JSX.Element => (
  <motion.span
    variants={mainiconVariants}
    initial="initial"
    animate="animate"
    className="flex justify-center p-6">
    <motion.span variants={seciconVariants} initial="initial" animate="animate">
      <FaReact className="ikoner mr-6" title="React ikon" size="3em" />
    </motion.span>
    <motion.span variants={seciconVariants} initial="initial" animate="animate">
      <FaVuejs className="ikoner mr-6" title="Vue ikon" size="3em" />
    </motion.span>
    <SiTypescript className="ikoner mr-6" title="Typescript ikon" size="3em" />
    <SiWordpress className="ikoner mr-6" title="Wordpress ikon" size="3em" />
    <FaPhp className="ikoner mr-6" title="PHP ikon" size="3em" />
  </motion.span>
);

export default Icons;
