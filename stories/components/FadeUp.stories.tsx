import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FadeUp from "../../src/components/Animations/FadeUp.component";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Animations/FadeUp",
  component: FadeUp
} as ComponentMeta<typeof FadeUp>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FadeUp> = () => <FadeUp delay={1}>FadeUp animation</FadeUp>;

export const Primary = Template;

Primary.args = {
  delay: 1
};
