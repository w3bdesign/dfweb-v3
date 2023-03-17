import { FaReact, FaVuejs, FaPhp } from "react-icons/fa";
import { SiTypescript, SiWordpress } from "react-icons/si";

import Grow from "../Animations/Grow.component";

/**
 * Renders SVG icons that are used on the front page
 * Uses Framer Motion for animations to show the SVGs
 * @function Icons
 * @returns {JSX.Element} - Rendered component
 */

const Icons = () => {
  const AnimateIcons = [
    { id: 0, Icon: FaReact },
    { id: 1, Icon: FaVuejs },
    { id: 2, Icon: SiTypescript },
    { id: 3, Icon: SiWordpress },
    { id: 4, Icon: FaPhp }
  ];

  return (
    <div data-testid="icons" className="flex justify-center mt-4 p-2">
      {AnimateIcons.map(({ Icon, id }) => (
        <>
          <span className="p-2" key={id}>
            <Grow delay={2.2 + id * 0.2}>
              <Icon
                data-testid={Icon.name}
                aria-label={Icon.name + " ikon"}
                title={Icon.name + " ikon"}
                size="3em"
              />
            </Grow>
          </span>
        </>
      ))}
    </div>
  );
};

export default Icons;
