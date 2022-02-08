import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ImageProps } from "next/image";

import Image from "../../src/components/UI/Image.component";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Image",
  component: Image,
  argTypes: { onClick: { action: "onClick" } }
} as ComponentMeta<typeof Image>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Image> = () => (
  <Image src="/logo.png" alt="" width="100" height="100" />
);

export const Primary = Template;

Primary.args = {
  src: "/logo.png",
  alt: "Image example"
};
