import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button, { IButtonProps } from "../../src/components/UI/Button.component";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/UI/Button",
  component: Button,
  argTypes: {
    text: { description: "Text for button" },
    children: {
      description: "Children content to be rendered",
      options: ["Button", "Second Button"],
      mapping: {
        Button: <h1>Button</h1>,
        SecondButton: <h1>Second Button</h1>
      }
    },
    onClick: {
      description: "onClick handler for button",
      action: "onClick"
    }
  }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = ({ text, children, onClick }: IButtonProps) => (
  <Button text={text} onClick={onClick}>
    {children}
  </Button>
);

export const Primary = Template;

Primary.args = {
  text: "",
  children: <h1>Button</h1>
};
