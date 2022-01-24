import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./Header";

export default {
  title: "Example/Header",
  component: Header
} as ComponentMeta<typeof Header>;

const functionNotImplemented = "Function not implemented.";

const Template: ComponentStory<typeof Header> = () => (
  <Header
    onLogin={function (): void {
      throw new Error(functionNotImplemented);
    }}
    onLogout={function (): void {
      throw new Error(functionNotImplemented);
    }}
    onCreateAccount={function (): void {
      throw new Error(functionNotImplemented);
    }}
  />
);

export const LoggedIn = Template;

LoggedIn.args = {
  user: {}
};

export const LoggedOut = Template;
LoggedOut.args = {};
