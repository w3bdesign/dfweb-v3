module.exports = {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: true
      }
    }
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  typescript: {
    reactDocgen: false
  },
  docs: {
    autodocs: true
  }
};
