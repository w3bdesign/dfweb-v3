module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y" /*, {
                                                                                            name: "@storybook/addon-postcss",
                                                                                            options: {
                                                                                            postcssLoaderOptions: {
                                                                                            implementation: require("postcss")
                                                                                            }
                                                                                            }
                                                                                            }*/,
    "@storybook/addon-mdx-gfm"
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
