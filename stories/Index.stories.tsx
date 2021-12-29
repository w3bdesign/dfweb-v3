import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Index from "../components/Index/Index.component";
import * as HeaderStories from "./Header.stories";

export default {
  title: "Example/Index",
  component: Index,
} as ComponentMeta<typeof Index>;

const Template: ComponentStory<typeof Index> = () => <Index />;

export const LoggedIn = Template;
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template;
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
