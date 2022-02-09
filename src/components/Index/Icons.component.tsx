import { FaReact, FaVuejs, FaPhp } from "react-icons/fa";
import { SiTypescript, SiWordpress } from "react-icons/si";
import { ScaleIn, ScaleInItem } from "../../animations/functions";

/**
 * Renders SVG icons that are used on the front page
 * Uses GSAP for animations to show the SVGs
 * @function Icons
 * @returns {JSX.Element} - Rendered component
 */

const Icons = (): JSX.Element => (
  <ScaleIn cssClass="flex justify-center p-6">
    <ScaleInItem>
      <FaReact className="ikoner mr-6" title="React ikon" size="3em" />
    </ScaleInItem>
    <ScaleInItem>
      <FaVuejs className="ikoner mr-6" title="Vue ikon" size="3em" />
    </ScaleInItem>
    <ScaleInItem>
      <SiTypescript className="ikoner mr-6" title="Typescript ikon" size="3em" />
    </ScaleInItem>
    <ScaleInItem>
      <SiWordpress className="ikoner mr-6" title="Wordpress ikon" size="3em" />
    </ScaleInItem>
    <ScaleInItem>
      <FaPhp className="ikoner mr-6" title="PHP ikon" size="3em" />
    </ScaleInItem>
  </ScaleIn>
);

export default Icons;
