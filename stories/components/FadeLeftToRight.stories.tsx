import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FadeLeftToRight from "../../src/components/Animations/FadeLeftToRight.component";
import FadeLeftToRightItem from "../../src/components/Animations/FadeLeftToRightItem.component";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Animations/FadeLeftToRight",
  component: FadeLeftToRight
} as ComponentMeta<typeof FadeLeftToRight>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FadeLeftToRight> = () => (
  <FadeLeftToRight animateAtOnce delay={1} staggerDelay={0.5}>
    <FadeLeftToRightItem>FadeLeftToRight animation</FadeLeftToRightItem>
  </FadeLeftToRight>
);

export const Primary = Template;

Primary.args = {
  delay: 1,
  staggerDelay: 0.5,
  animateAtOnce: true,
  children: <h1>Fade Left To Right</h1>,
  cssClass: "text-center"
};
