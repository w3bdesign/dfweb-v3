import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../../src/components/UI/Button.component";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: "Test",
  children: <h1>Test H1</h1>
};
