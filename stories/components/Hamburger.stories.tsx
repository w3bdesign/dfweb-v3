import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Hamburger, { IHamburgerProps } from "../../src/components/Layout/Hamburger.component";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/UI/Hamburger",
  component: Hamburger,
  argTypes: {
    animatetoX: { description: "Animate hamburger to X" },
    onClick: {
      description: "onClick handler for Hamburger",
      action: "onClick"
    }
  }
} as ComponentMeta<typeof Hamburger>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Hamburger> = ({ onClick, animatetoX }: IHamburgerProps) => (
  <Hamburger onClick={onClick} animatetoX={animatetoX} />
);

export const Primary = Template;

Primary.args = {
  animatetoX: false
};

Primary.parameters = {
  backgrounds: { default: "dark" }
};
