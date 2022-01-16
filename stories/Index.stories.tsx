import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IndexContent from "../src/components/Index/IndexContent.component";

export default {
  title: "Example/Index",
  component: IndexContent
} as ComponentMeta<typeof IndexContent>;

const Template: ComponentStory<typeof IndexContent> = () => <IndexContent />;

export const LoggedIn = Template;
