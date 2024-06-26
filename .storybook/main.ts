import type { StorybookConfig } from '@storybook/react-webpack5';
import { RuleSetRule } from 'webpack';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // '@storybook/addon-onboarding',
    // '@storybook/addon-docs',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {},
    },
  },

  docs: {
    autodocs: 'tag',
  },

  core: {
    disableTelemetry: true,   //Disables telemetry
  },

  // refs: {
  //   preview: {
  //     title: 'Preview',
  //     url: '...',
  //   },
  // },

  webpackFinal: async (config) => {
    if (!config.resolve) config.resolve = {};
    if (!config.plugins) config.plugins = [];
    if (!config.module) config.module = {};
    if (!config.module.rules) config.module.rules = [];

    config.resolve.alias = {
      ...config.resolve?.alias,
      'src': path.resolve(__dirname, '../src'),
    };

    // @ts-ignore
    const imageRule = config.module.rules.find((rule) => rule?.test?.test(".svg")) as RuleSetRule;
    if (imageRule) {
      imageRule.exclude = /\.svg$/;
    };

    config.module.rules.push(
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.s([ca])ss$/,
        use: [
          'style-loader',
          {
            loader: '@teamsupercell/typings-for-css-modules-loader',
            options: {
              banner: '// Autogenerated by typings-for-css-modules-loader. \n// Please do not change this file!',
              formatter: 'prettier',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: 'camelCaseOnly',
                localIdentName: '[local]__[contenthash:base64:5]',
              }
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.module\.s([ca])ss$/,
        use: [
          'style-loader',
          {
            loader: '@teamsupercell/typings-for-css-modules-loader',
            options: {
              banner: '// Autogenerated by typings-for-css-modules-loader. \n// Please do not change this file!',
              formatter: 'prettier',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: 'camelCaseOnly',
                localIdentName: '[local]__[contenthash:base64:5]',
              }
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/i,
        use: ['@svgr/webpack', 'url-loader'],
      },
    );

    return config;
  },
};

export default config;
