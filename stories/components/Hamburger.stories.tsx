import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Hamburger from "../../src/components/UI/Hamburger.component";

import { IHamburgerProps } from "../../src/components/UI/Hamburger.component";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/UI/Hamburger",
  component: Hamburger,
  parameters: {
    // Sets a delay for the component's stories
    chromatic: { delay: 3000 }
  },
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
