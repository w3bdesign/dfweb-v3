import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FadeDown from "../../src/components/Animations/FadeDown.component";

import { IAnimateWithDelayProps } from "../../src/components/Animations/types/Animations.types";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Animations/FadeDown",
  component: FadeDown,
  argTypes: {
    children: {
      description: "Children content to be rendered",
      options: ["Sample animation text"],
      mapping: {
        Sample: <h1>Sample animation text</h1>
      }
    },
    cssClass: { description: "CSS class to append to content" },
    delay: { description: "Delay before starting animation" }
  }
} as ComponentMeta<typeof FadeDown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FadeDown> = ({
  children,
  cssClass,
  delay
}: IAnimateWithDelayProps) => (
  <FadeDown cssClass={cssClass} delay={delay}>
    {children}
  </FadeDown>
);

export const Primary = Template;

Primary.args = {
  children: <h1>Sample animation text</h1>,
  cssClass: "text-center",
  delay: 1
};
