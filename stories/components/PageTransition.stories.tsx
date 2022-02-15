import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PageTransition from "../../src/components/Animations/PageTransition.component";

import { IAnimateProps } from "../../src/components/Animations/types/Animations.types";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Animations/PageTransition",
  component: PageTransition,

  argTypes: {
    children: {
      description: "Children content to be rendered",
      options: ["Sample animation text"],
      mapping: {
        Sample: <h1>Sample animation text</h1>
      }
    },
    cssClass: { description: "CSS class to append to content" }
  }
} as ComponentMeta<typeof PageTransition>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PageTransition> = ({ children, cssClass }: IAnimateProps) => (
  <PageTransition cssClass={cssClass}>{children}</PageTransition>
);

export const Primary = Template;

Primary.args = {
  children: <h1>Sample animation text</h1>,
  cssClass: "text-center"
};
