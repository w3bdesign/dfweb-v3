import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header onLogin={function (): void {
  throw new Error("Function not implemented.");
} } onLogout={function (): void {
  throw new Error("Function not implemented.");
} } onCreateAccount={function (): void {
  throw new Error("Function not implemented.");
} } />;

export const LoggedIn = Template

LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template
LoggedOut.args = {};
