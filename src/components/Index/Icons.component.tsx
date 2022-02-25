import React from "react";
import { FaReact, FaVuejs, FaPhp } from "react-icons/fa";
import { SiTypescript, SiWordpress } from "react-icons/si";

import FadeLeftToRight from "../Animations/FadeLeftToRight.component";
import FadeLeftToRightItem from "../Animations/FadeLeftToRightItem.component";

/**
 * Renders SVG icons that are used on the front page
 * Uses Framer Motion for animations to show the SVGs
 * @function Icons
 * @returns {JSX.Element} - Rendered component
 */

const Icons = (): JSX.Element => (
  <FadeLeftToRight delay={2.7} animateNotReverse cssClass="flex justify-center mt-4 p-2">
    <div data-testid="icons" />
    <FadeLeftToRightItem cssClass="p-2">
      <FaReact title="React ikon" size="3em" />
    </FadeLeftToRightItem>
    <FadeLeftToRightItem cssClass="p-2">
      <FaVuejs title="Vue ikon" size="3em" />
    </FadeLeftToRightItem>
    <FadeLeftToRightItem cssClass="p-2">
      <SiTypescript title="Typescript ikon" size="3em" />
    </FadeLeftToRightItem>
    <FadeLeftToRightItem cssClass="p-2">
      <SiWordpress title="Wordpress ikon" size="3em" />
    </FadeLeftToRightItem>
    <FadeLeftToRightItem cssClass="p-2">
      <FaPhp title="PHP ikon" size="3em" />
    </FadeLeftToRightItem>
  </FadeLeftToRight>
);

export default Icons;
