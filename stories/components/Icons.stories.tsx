import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Icons from "../../src/components/Index/Icons.component";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Index/Icons",
  component: Icons
} as ComponentMeta<typeof Icons>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icons> = () => <Icons />;

export const Icon = Template;

