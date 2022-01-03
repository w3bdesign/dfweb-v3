import { ComponentStory, ComponentMeta } from "@storybook/react";

import Index from "../../src/pages/index";

export default {
  title: "Pages/Index",
  component: Index
} as ComponentMeta<typeof Index>;

export const IndexPage: ComponentStory<typeof Index> = () => <Index />;
