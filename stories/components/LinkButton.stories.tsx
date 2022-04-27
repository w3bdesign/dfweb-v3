import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LinkButton from "../../src/components/Prosjekter/LinkButton.component";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Prosjekter/LinkButton",
  component: LinkButton
} as ComponentMeta<typeof LinkButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LinkButton> = () => (
  <LinkButton
    url="https://storybook.js.org/"
    name="Github"
    text="Github"
  />
);

export const Icon = Template;
