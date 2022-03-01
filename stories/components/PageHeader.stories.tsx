import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PageHeader, { IPageHeaderProps } from "../../src/components/UI/PageHeader.component";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/UI/PageHeader",
  component: PageHeader,
  argTypes: {
    children: {
      description: "Children content to be rendered",
      options: ["PageHeader", "Second PageHeader"],
      mapping: {
        PageHeader: <h1>Example PageHeader</h1>,
        SecondPageHeader: <h1>Second example PageHeader</h1>
      }
    }
  }
} as ComponentMeta<typeof PageHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PageHeader> = ({ children }: IPageHeaderProps) => (
  <PageHeader>{children}</PageHeader>
);

export const Primary = Template;

Primary.args = {
  children: <h1>PageHeader</h1>
};
