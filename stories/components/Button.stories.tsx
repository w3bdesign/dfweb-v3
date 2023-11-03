import React from "react";
import { Meta, Story } from "@storybook/react";
import Button, { IButtonProps } from "../../src/components/UI/Button.component";

export default {
  title: "Components/UI/Button",
  component: Button
} as Meta;

const Template: Story<IButtonProps> = (args: IButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Click me!"
};

export const AsLink = Template.bind({});
AsLink.args = {
  children: "Go to Google",
  renderAs: "a",
  href: "https://www.google.com"
};
