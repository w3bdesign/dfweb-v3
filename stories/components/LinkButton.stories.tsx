import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LinkButton from "../../src/components/Prosjekter/LinkButton.component";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Prosjekter/LinkButton",
  component: LinkButton,
  argTypes: {
    url: { description: "URL address to link to" },
    text: { description: "Text to display in button" }
  }
} as ComponentMeta<typeof LinkButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LinkButton> = ({ url, text }) => (
  <LinkButton url={url} text={text} />
);

export const Button = Template;

Button.args = {
  url: "https://storybook.js.org",
  text: "Github"
};
