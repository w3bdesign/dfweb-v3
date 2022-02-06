// https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415
// https://www.youtube.com/watch?v=i5tvZ9f7gJw

import "../src/styles/globals.css";

export const parameters = {
  layout: 'centered', 
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
