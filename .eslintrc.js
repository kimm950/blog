/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
  ],
  ignorePatterns: [
    'tests/',
    'DevTools/',
    'registerServiceWorker.js',
    'rollbar.umd.min.js',
    '*.spec.*',
    '*.test.*',
    '/app/assets/javascripts/',
    '/app/javascript/src/assets/styles/',
    '/app/javascript/src/i18n/lang',
    '/app/javascript/src/i18n/compiled_lang',
  ],
  rules: {
    'formatjs/no-offset': 'error',
    'no-plusplus': 'off',
    'class-methods-use-this': 'warn',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'import/extensions': ['error', 'never'],
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-inner-declarations': 'off',
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    'arrow-body-style': 'off',
    'react/sort-comp': 'off',
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
      { enforceForRenamedProperties: false },
    ],
    quotes: 'off',
    'react/jsx-filename-extension': 'off',
    radix: ['error', 'as-needed'],
    'react/jsx-props-no-spreading': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'warn',
    'react/require-default-props': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    camelcase: 'warn',
    'react/destructuring-assignment': 'off',
    'explicit-module-boundary-types': 'off',
    'no-alert': 'off',
    'no-continue': 'off',
    'no-return-assign': ['error', 'except-parens'],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            alias: {
              '@src': path.resolve('app/javascript/src'),
              '@tests': path.resolve('app/javascript/tests'),
              'zeals-protobuf': path.resolve('vendor/node/zeals/protobuf'),
            },
          },
        },
      },
    },
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
  globals: {
    window: true,
    document: true,
    __USERNAME__: true,
    __PASSWORD__: true,
    __PAGENAME__: true,
  },
  plugins: ['react', 'class-property', 'formatjs', '@typescript-eslint'],
};
