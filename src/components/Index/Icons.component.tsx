import { FaReact, FaVuejs, FaPhp } from "react-icons/fa";
import { SiTypescript, SiWordpress } from "react-icons/si";

/**
 * Renders SVG icons that are used on the front page
 * Uses Framer Motion for animations to show the SVGs
 * @function Icons
 * @returns {JSX.Element} - Rendered component
 */

const Icons = (): JSX.Element => (
  <div data-testid="icons" className="flex justify-center mt-4 p-2">
    <span className="p-2">
      <FaReact data-testid="React" title="React ikon" size="3em" aria-label="React ikon" />
    </span>
    <span className="p-2">
      <FaVuejs data-testid="Vue" aria-label="Vue ikon" title="Vue ikon" size="3em" />
    </span>
    <span className="p-2">
      <SiTypescript
        data-testid="Typescript"
        aria-label="Typescript ikon"
        title="Typescript ikon"
        size="3em"
      />
    </span>
    <span className="p-2">
      <SiWordpress
        data-testid="Wordpress"
        aria-label="Wordpress ikon"
        title="Wordpress ikon"
        size="3em"
      />
    </span>
    <span className="p-2">
      <FaPhp data-testid="PHP" aria-label="PHP ikon" title="PHP ikon" size="3em" />
    </span>
  </div>
);

export default Icons;
