import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FadeLeftToRight from "../../src/components/Animations/FadeLeftToRight.component";
import FadeLeftToRightItem from "../../src/components/Animations/FadeLeftToRightItem.component";

import { IAnimateStaggerWithDelayProps } from "../../src/components/Animations/types/Animations.types";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Animations/FadeLeftToRight",
  component: FadeLeftToRight,
  parameters: {
    // Sets a delay for the component's stories
    chromatic: { delay: 3000 },
  },
  argTypes: {
    children: {
      description: "Children content to be rendered"
    }
  },
  cssClass: { description: "CSS class to append to content" },
  delay: { description: "Delay before starting animation" },
  staggerDelay: { description: "Delay before staggering animations for children" },
  animateNotReverse: { description: "Start animation at once" }
} as ComponentMeta<typeof FadeLeftToRight>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FadeLeftToRight> = ({
  children,
  cssClass,
  delay,
  staggerDelay,
  animateNotReverse
}: IAnimateStaggerWithDelayProps) => (
  <FadeLeftToRight
    cssClass={cssClass}
    delay={delay}
    staggerDelay={staggerDelay}
    animateNotReverse={animateNotReverse}
  >
    <FadeLeftToRightItem cssClass="block">{children}</FadeLeftToRightItem>
    <br />
    <FadeLeftToRightItem cssClass="block">{children}</FadeLeftToRightItem>
    <br />
    <FadeLeftToRightItem cssClass="block">{children}</FadeLeftToRightItem>
    <br />
    <FadeLeftToRightItem cssClass="block">{children}</FadeLeftToRightItem>
    <br />
  </FadeLeftToRight>
);

export const Primary = Template;

Primary.args = {
  delay: 0.2,
  staggerDelay: 0.2,
  animateNotReverse: true,
  children: <h1>Fade Left To Right</h1>,
  cssClass: "text-center"
};
