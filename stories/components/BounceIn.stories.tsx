import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BounceIn from "../../src/components/Animations/BounceIn.component";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Animations/BounceIn",
  component: BounceIn
} as ComponentMeta<typeof BounceIn>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BounceIn> = () => <BounceIn>BounceIn animation</BounceIn>;

export const Primary = Template;

Primary.args = {};
