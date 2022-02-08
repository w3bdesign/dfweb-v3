import { FaReact, FaVuejs, FaPhp } from "react-icons/fa";
import { SiTypescript, SiWordpress } from "react-icons/si";

/**
 * Renders SVG icons that are used on the front page
 * Uses GSAP for animations to show the SVGs
 * @function Icons
 * @returns {JSX.Element} - Rendered component
 */

const Icons = (): JSX.Element => (
  <span className="flex justify-center p-6">
    <FaReact className="ikoner mr-6" title="React ikon" size="3em" />
    <FaVuejs className="ikoner mr-6" title="Vue ikon" size="3em" />
    <SiTypescript className="ikoner mr-6" title="Typescript ikon" size="3em" />
    <SiWordpress className="ikoner mr-6" title="Wordpress ikon" size="3em" />
    <FaPhp className="ikoner mr-6" title="PHP ikon" size="3em" />
  </span>
);

export default Icons;
