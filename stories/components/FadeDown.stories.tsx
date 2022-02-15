import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FadeDown from "../../src/components/Animations/FadeDown.component";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Animations/FadeDown",
  component: FadeDown
} as ComponentMeta<typeof FadeDown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FadeDown> = () => <FadeDown delay={1}>Tekst her</FadeDown>;

export const Primary = Template;

Primary.args = {
  delay: 1
};
