import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Page } from "./Page";
import * as HeaderStories from "./Header.stories";

export default {
  title: "Example/Page",
  component: Page
} as ComponentMeta<typeof Page>;

const functionNotImplemented = "Function not implemented.";

const Template: ComponentStory<typeof Page> = () => (
  <Page
    onLogin={(): void => {
      throw new Error(functionNotImplemented);
    }}
    onLogout={(): void => {
      throw new Error(functionNotImplemented);
    }}
    onCreateAccount={(): void => {
      throw new Error(functionNotImplemented);
    }}
  />
);

export const LoggedIn = Template;
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args
};

export const LoggedOut = Template;
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args
};
