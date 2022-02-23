import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FadeUp from "../../src/components/Animations/FadeUp.component";

import { IAnimateWithDelayProps } from "../../src/components/Animations/types/Animations.types";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Animations/FadeUp",
  component: FadeUp,
  parameters: {
    chromatic: { delay: 3000 }
  },
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
} as ComponentMeta<typeof FadeUp>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FadeUp> = ({
  children,
  cssClass,
  delay
}: IAnimateWithDelayProps) => (
  <FadeUp cssClass={cssClass} delay={delay}>
    {children}
  </FadeUp>
);

export const Primary = Template;

Primary.args = {
  children: <h1>Sample animation text</h1>,
  cssClass: "text-center",
  delay: 1
};
