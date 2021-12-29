import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IndexContent from "../components/Index/IndexContent.component";
import * as HeaderStories from "./Header.stories";

export default {
  title: "Example/Index",
  component: IndexContent,
} as ComponentMeta<typeof IndexContent>;

const Template: ComponentStory<typeof IndexContent> = () => <IndexContent />;

export const LoggedIn = Template;
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template;
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
