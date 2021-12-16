import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Page } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/Page',
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = () => <Page onLogin={function (): void {
  throw new Error('Function not implemented.');
} } onLogout={function (): void {
  throw new Error('Function not implemented.');
} } onCreateAccount={function (): void {
  throw new Error('Function not implemented.');
} }  />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template;
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
