import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../../src/components/UI/Button.component";

interface IButtonProps {
  args: JSX.IntrinsicAttributes;
  text?: string | undefined;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  argTypes: { onClick: { action: "onClick" } }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args: IButtonProps) => <Button {...args} />;

export const Primary = Template;

Primary.args = {
  text: "",
  children: <h1>Button</h1>
};
