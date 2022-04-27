import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ErrorContent from "../../src/components/Error/ErrorContent.component";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Error/ErrorContent",
  component: ErrorContent,
  argTypes: {
    text: { description: "Text for error message" }
  }
} as ComponentMeta<typeof ErrorContent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ErrorContent> = ({ text }) => <ErrorContent text={text} />;

export const Error = Template;

Error.args = {
  text: "Site not found"
};
