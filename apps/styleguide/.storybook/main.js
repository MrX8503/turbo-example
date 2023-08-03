const path = require("path");

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-styling",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  /**
    * configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    * You can change the configuration based on that
    * 'PRODUCTION' is used when building the static version of storybook
    */
  webpackFinal: async (config, { configType }) => (
    {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ui: path.resolve(
            __dirname,
            "../../../packages/ui/"
          )
        }
      }
    }
  )
};

export default config;
